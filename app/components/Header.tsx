"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "@/app/styles/components/Header.module.scss";
import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";
import iconMenu from "@/app/assets/icons/icon-menu.svg";
import iconClose from "@/app/assets/icons/icon-close.svg";
import { navItems } from "@/app/data/header";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    closeMenu();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [closeMenu]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <header className={`${styles["header"]}${isActive ? ` ${styles["active"]}` : ''}`}>
      <div className={styles["header-inner"]}>
        <h1 className="blind">Mjaedot - minjee kim's portfolio</h1>
        <button type="button" className={styles["header-menu-button"]} onClick={scrollToTop}>
          <Image src={logo} alt="minjee kim's portfolio" title="minjee kim's portfolio" width={508} height={156} loading="eager" />
        </button>
        <button
          type="button"
          className={styles["header-hamburger"]}
          onClick={openMenu}
          aria-label="메뉴 열기"
        >
          <Image src={iconMenu} alt="메뉴" title="메뉴" width={24} height={24} loading="eager" />
        </button>

        <nav className={`${styles["header-nav"]}${isMenuOpen ? ` ${styles["header-nav-open"]}` : ''}`}>
          <button
            type="button"
            className={styles["header-nav-close"]}
            onClick={closeMenu}
            aria-label="메뉴 닫기"
          >
            <Image src={iconClose} alt="닫기" title="닫기" width={24} height={24} loading="eager" />
          </button>
          <ul className={styles["header-nav-list"]}>
            {navItems.map((item) => (
              <li key={item.number} className={styles["header-nav-item"]}>
                <button
                  type="button"
                  className={styles["header-nav-button"]}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  <span className={styles["header-nav-button-number"]}>{item.number}</span>
                  <span className={styles["header-nav-button-text"]}>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
