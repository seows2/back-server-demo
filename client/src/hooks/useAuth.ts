import { useUserState } from '@/atoms/userState';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginRequestBody } from '@/types';
import { authApi } from '@/apis';

const useAuth = () => {
  const [user, setUserState] = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ userId, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await authApi.login({ userId, password });

      setUserState(prev => ({ ...prev, userId }));

      localStorage.setItem('userId', userId);

      setIsLoading(false);

      navigate('/', { replace: true });
    } catch (error) {
      // 에러 처리
      console.log(error);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUserState(null);

    localStorage.removeItem('userId');

    authApi.logout().catch(() => {
      // 에러 처리를 하지 않음
    });
  };

  return { user, login, logout, isLoading };
};

export default useAuth;
