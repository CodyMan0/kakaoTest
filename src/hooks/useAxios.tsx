import axios from 'axios';
import { useEffect, useState } from 'react';
import { LOGIN } from '../constants/contants';

type data = {
  data:
    | (() => Promise<void>)
    | { data: undefined; isLoading: boolean; error: undefined };
};

const useAxios = () => {
  const [response, setResponse] = useState({
    data: undefined,
    isLoading: false,
    error: undefined,
  });

  const axiosKakaoLogin = async () => {
    try {
      setResponse(prev => ({ ...prev, isLoading: true }));
      const results = await axios(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${LOGIN.REST_API_KEY}&redirect_uri=${LOGIN.REDIRECT_URI}`
      );
      console.log(results);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setResponse(prev => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    axiosKakaoLogin();
  }, []);

  return [axiosKakaoLogin, { ...response }];
};
export default useAxios;
