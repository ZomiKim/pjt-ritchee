import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../assets/utils/supabase';

const DentContext = createContext();

export const useDent = () => {
  return useContext(DentContext);
};

export const DentProvider = ({ children }) => {
  // 병원 데이터 저장소
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    // 치과 db에서 데이터 가져옴
    const fetch = async () => {
      let { data, error } = await supabase.from('hospital').select('*').range(0, 9);
      if (error) console.error('error', error.message);
      else setHospital(data);
    };

    fetch();
  }, []);

  const value = {
    hospital,
  };

  return <DentContext.Provider value={value}>{children}</DentContext.Provider>;
};
