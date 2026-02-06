import { create } from "zustand";

export const useProjectStore = create((set) => ({
  search: "",
  sortBy: "alphabetical",
  selectedProject: null,
  mapVisible: false,

  setSearch: (value) => set({ search: value }),
  setSortBy: (value) => set({ sortBy: value }),

  setSelectedProject: (project) => set({ selectedProject: project }),

  toggleMap: () =>
    set((state) => ({
      mapVisible: !state.mapVisible,
    })),
}));
