import { create } from "zustand";

export const useProjectStore = create((set) => ({
  search: "",
  sortBy:"alphabetical",
  setSearch: (value) => set({ search: value }),
  setSortBy: (value) => set ({sortBy:value}),
}));
