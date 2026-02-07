"use client";
import { useState, useRef, useEffect } from "react";
import { useProjectStore } from "../store/useProjectStore";
import styles from "./FilterDropdown.module.css";

export default function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const setSortBy = useProjectStore((s) => s.setSortBy);
  const sortBy = useProjectStore((s) => s.sortBy);
  const ref = useRef();

  const options = [
    { label: "Orden alfabético", value: "alphabetical" },
    { label: "Número de incidencias", value: "incidents" },
    { label: "Número de RFI", value: "rfi" },
    { label: "Número de tareas", value: "tasks" },
  ];

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.iconBtn} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.option} ${
                sortBy === opt.value ? styles.active : ""
              }`}
              onClick={() => {
                setSortBy(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
