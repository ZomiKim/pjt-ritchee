import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../assets/utils/supabase";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    // 개발 환경에서만 에러를 던지고, 프로덕션에서는 기본값 반환
    if (process.env.NODE_ENV === 'development') {
      console.error("useUser는 UserProvider 안에서 사용되어야 합니다.");
    }
    // 기본값 반환하여 앱이 크래시되지 않도록 함
    return {
      loading: false,
      user: null,
      signUp: async () => ({ error: new Error("UserProvider not found") }),
      signIn: async () => ({ error: new Error("UserProvider not found") }),
      signOut: async () => {},
      setLoading: () => {},
    };
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUserInfo = async (userId) => {
    try {
      const { data, error } = await supabase.from("h_user").select("*").eq("id", userId).single();

      if (error) {
        console.error("fetchUserInfo 에러:", error);
        return null;
      }
      return data;
    } catch (err) {
      console.error("fetchUserInfo 예외:", err);
      return null;
    }
  };

  const setUserSession = async (sessionUser) => {
    if (!sessionUser) {
      setUser(null);
      return;
    }
    const extra = await fetchUserInfo(sessionUser.id);
    // email은 sessionUser에서 가져오므로 명시적으로 보존
    // extra가 null이어도 기본 user 정보는 설정
    setUser({ ...sessionUser, ...(extra || {}), email: sessionUser.email });
  };

  useEffect(() => {
    let mounted = true;
    let subscription = null;

    const loadUser = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session ?? null;

      if (mounted) await setUserSession(session?.user ?? null);

      const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (!mounted) return;
        await setUserSession(session?.user ?? null);
      });
      subscription = listener.subscription;
    };

    loadUser();

    return () => {
      mounted = false;
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const signUp = async ({ email, password, options }) => {
    const { name, birth, gender, phone, text, addr = "" } = options?.data || {};

    try {
      setLoading(true);

      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        return { error: authError };
      }

      const { error: userError } = await supabase
        .from("h_user")
        .insert([
          {
            id: data.user.id,
            name,
            phone,
            text,
            gender,
            birth,
            addr,
            u_kind: 1,
          },
        ])
        .select("id,name,birth,gender,phone,text,addr");

      if (userError) {
        console.error("DB insert 실패", userError);
        return { error: userError };
      }

      const extra = await fetchUserInfo(data.user.id);
      // email은 data.user에서 가져오므로 명시적으로 보존
      setUser({ ...data.user, ...extra, email: data.user.email });

      return { error: null };
    } catch (err) {
      console.error("signUp error:", err);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error && data?.user) {
      const extra = await fetchUserInfo(data.user.id);
      // email은 data.user에서 가져오므로 명시적으로 보존
      // extra가 null이어도 기본 user 정보는 설정
      setUser({ ...data.user, ...(extra || {}), email: data.user.email });
      return { error: null };
    } else {
      return { error: error || new Error("데이터 반환X") };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = {
    loading,
    user,
    signUp,
    signIn,
    signOut,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
