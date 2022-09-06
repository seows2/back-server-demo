import { User } from '@/types';
import { atom, useRecoilState } from 'recoil';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = () => {
  return useRecoilState(userState);
};
