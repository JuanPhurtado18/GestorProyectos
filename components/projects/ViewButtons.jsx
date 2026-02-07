"use client";
import { useProjectStore } from "../store/useProjectStore";
import styles from "./ViewButtons.module.css";

export default function ViewButtons() {
  const mapVisible = useProjectStore((s) => s.mapVisible);
  const toggleMap = useProjectStore((s) => s.toggleMap);

  return (
    <div className={styles.wrapper}>
      <button className={styles.iconBtn}>☷</button>

      <button
        className={`${styles.iconBtn} ${mapVisible ? styles.active : ""}`}
        onClick={toggleMap}
      >
        📍
      </button>
    </div>
  );
}
