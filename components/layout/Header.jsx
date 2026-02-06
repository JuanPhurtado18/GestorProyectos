"use client";

import styles from "./Header.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.brand}>Spybee</span>
      </div>

      <div className={styles.user}>
        <div className={styles.avatar}>M</div>

        <div className={styles.info}>
          <strong>Marco</strong>
          <span>Administrador</span>
        </div>

        <span className={styles.arrow}>▾</span>
      </div>
    </header>
  );
}
