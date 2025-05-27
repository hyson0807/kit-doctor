// stores/userInfo.ts
import { create } from 'zustand';

interface UserInfoState {
    year: string;
    name: string;
    email: string;
    setYear: (year: string) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    reset: () => void;
}

export const useUserInfo = create<UserInfoState>((set) => ({
    year: '',
    name: '',
    email: '',
    setYear: (year) => set({ year }),
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    reset: () => set({ year: '', name: '', email: '' }),
}));
