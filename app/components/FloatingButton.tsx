"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/styles/components/FloatingButton.module.scss";
import iconMoon from "@/app/assets/icons/icon-moon.svg";
import iconSun from "@/app/assets/icons/icon-sun.svg";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className={styles["floating"]}>
      {visible && (
        <button
          type="button"
          className={`${styles["floating-button"]} ${styles["floating-button-top"]}`}
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          TOP
        </button>
      )}
      <button
        type="button"
        className={styles["floating-button"]}
        onClick={toggleTheme}
        aria-label={isDark ? "라이트모드로 전환" : "다크모드로 전환"}
      >
        <Image
          src={isDark ? iconSun : iconMoon}
          alt={isDark ? "라이트모드" : "다크모드"}
          title={isDark ? "라이트모드" : "다크모드"}
          width={20}
          height={20}
          loading="eager"
          className={styles["floating-icon"]}
        />
      </button>
    </div>
  );
}
