import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom({ key: 'countState', default: 0 });

export const useCountValue = () => {
  return useRecoilValue(countState);
};

export const useSetCount = () => {
  return useSetRecoilState(countState);
};
