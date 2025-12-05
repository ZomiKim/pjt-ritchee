import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../assets/utils/supabase";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("userprovider 안에 있어야함.");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUserInfo = async (userId) => {
    const { data, error } = await supabase.from("h_user").select("*").eq("id", userId).single();

    if (error) return null;
    return data;
  };

  const setUserSession = async (sessionUser) => {
    if (!sessionUser) {
      setUser(null);
      return;
    }
    const extra = await fetchUserInfo(sessionUser.id);
    setUser({ ...sessionUser, ...extra });
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
      setUser({ ...data.user, ...extra });

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
      setUser({ ...data.user, ...extra });
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
