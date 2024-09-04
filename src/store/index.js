import { create } from 'zustand';

export const useMobileMenu = create((set) => ({
  active: false,
  selectedMobileMenu: () => set((state) => ({ active: !state.active })),
}));
