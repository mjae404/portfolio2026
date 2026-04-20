import styles from "@/app/styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-inner"]}>
        <p className={styles["footer-copyright"]}>&copy; Copyright 2021 - {new Date().getFullYear()} Minjee Kim.</p>
      </div>
    </footer>
  );
}
