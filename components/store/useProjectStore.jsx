import { create } from "zustand";

export const useProjectStore = create((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));
