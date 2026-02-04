"use client";

import { useProjectStore } from "../store/useProjectStore";

export default function SortSelect() {
  const sortBy = useProjectStore((state) => state.sortBy);
  const setSortBy = useProjectStore((state) => state.setSortBy);

  return (
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="alphabetical">Orden alfabético</option>
      <option value="incidents">Cantidad de incidencias</option>
      <option value="rfi">Cantidad de RFI</option>
      <option value="tasks">Cantidad de tareas</option>
    </select>
  );
}
