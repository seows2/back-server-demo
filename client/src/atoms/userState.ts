import { User } from '@/types';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = () => {
  return useRecoilState(userState);
};

export const useSetUserState = () => {
  return useSetRecoilState(userState);
};
