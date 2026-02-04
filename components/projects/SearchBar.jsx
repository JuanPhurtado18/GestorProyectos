"use client";

import { useProjectStore } from "../store/useProjectStore";

export default function SearchBar() {
  const search = useProjectStore((state) => state.search);
  const setSearch = useProjectStore((state) => state.setSearch);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar proyecto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
