import { useEffect, useState } from 'react';

import { useUserState } from '@/atoms/userState';
import { authApi } from '@/apis';

const useAutoLogin = () => {
  const [user, setUserState] = useUserState();
  const [isLoading, setIsLoading] = useState(true);

  const autoLogin = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      setIsLoading(true);

      await authApi.refresh();

      setUserState({ userId });
    } catch (error) {
      localStorage.removeItem('userId');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return { isLoading, isLoggedIn: user !== null };
};

export default useAutoLogin;
