"use client";
import { useProjectStore } from "../store/useProjectStore";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const search = useProjectStore((s) => s.search);
  const setSearch = useProjectStore((s) => s.setSearch);

  return (
    <div className={styles.searchBox}>
      <input
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className={styles.icon}>🔍</span>
    </div>
  );
}