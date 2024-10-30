import { create } from 'zustand';

export type AuthStore = {
  isAuth: boolean;
  isIsAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set, get) => {
  return {
    isAuth: false,
    isIsAuth: () => {
      set((state: AuthStore) => ({ isAuth: false }));
    },
  };
});
