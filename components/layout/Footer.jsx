import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span>Spybee</span>
      </div>

      <div className={styles.right}>
        <div className={styles.avatar}>M</div>
        <span>Marco</span>
        <span className={styles.role}>Administrador</span>
      </div>
    </footer>
  );
}