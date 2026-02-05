import { create } from "zustand";

export const useProjectStore = create((set) => ({
  search: "",
  sortBy: "alphabetical",
  selectedProject: null, // 👈 proyecto seleccionado

  setSearch: (value) => set({ search: value }),
  setSortBy: (value) => set({ sortBy: value }),
  setSelectedProject: (project) => set({ selectedProject: project }), // 👈 setter
}));