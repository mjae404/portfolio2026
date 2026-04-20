"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import styles from "@/app/styles/components/Work.module.scss";
import Image from "next/image";
import title from "@/app/assets/images/title_work.svg";
import iconClose from "@/app/assets/icons/icon-close.svg";
import iconArrow from "@/app/assets/icons/icon-arrow-right.svg";
import { workItems, WorkItem } from "@/app/data/work";
import ScrollReveal from "@/app/components/ScrollReveal";

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Work() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-animate-target]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(styles["animate"], entry.isIntersecting);
      });
    });

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closePopup = useCallback(() => {
    setActiveItem(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  const openPopup = useCallback((item: WorkItem, buttonEl: HTMLButtonElement) => {
    triggerRef.current = buttonEl;
    setActiveItem(item);
  }, []);

  const preloadImages = useCallback((item: WorkItem) => {
    item.detailImages.forEach((image) => {
      const img = new window.Image();
      img.src = image.jpg.src;

      const imgWebp = new window.Image();
      imgWebp.src = image.webp.src;
    });
  }, []);

  useEffect(() => {
    if (!activeItem) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
        return;
      }

      if (e.key === "Tab") {
        const popup = popupRef.current;
        if (!popup) return;

        const focusableEls = popup.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusableEls.length === 0) return;

        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const closeBtn = popupRef.current?.querySelector<HTMLElement>(`.${styles["popup-close"]}`);
    closeBtn?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem, closePopup]);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  }, [closePopup]);

  return (
    <section id="work" className={`section ${styles["work-container"]}`}>
      <h2 className="blind">Work</h2>
      <ScrollReveal className="section-title-container" animateClass="animate">
        <Image src={title} alt="" title="Work" height={100} loading="lazy" className={`section-title ${styles["work-title-image"]}`} role="presentation" />
      </ScrollReveal>
      <div className={styles["work-inner"]}>
        <ul className={styles["work-detail-list"]}>
          {workItems.map((item) => (
            <li key={item.id} className={styles["work-detail-item"]} data-animate-target>
              <button
                type="button"
                className={styles["work-detail-button"]}
                onMouseEnter={() => preloadImages(item)}
                onFocus={() => preloadImages(item)}
                onClick={(e) => openPopup(item, e.currentTarget)}
              >
                <div className={styles["work-detail-image-wrap"]}>
                  <picture>
                    <source srcSet={item.imageWebp.src} type="image/webp" className={styles["work-detail-image"]} />
                    <img src={item.imageJpg.src} alt={item.title} title={item.title} width={1400} height={1050} loading="lazy" className={styles["work-detail-image"]} />
                  </picture>
                  <div className={styles["work-detail-overlay"]}></div>
                </div>
                <div className={styles["work-detail-title-wrap"]}>
                  <h3 className={styles["work-detail-title"]}>{item.title}</h3>
                  <span className={styles["work-detail-term"]}>{item.term}</span>
                  <p className={styles["work-detail-text"]}>{item.summary}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeItem && (
        <div
          className={styles["popup-backdrop"]}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles["popup"]} ref={popupRef}>
            <div className={styles["popup-header"]}>
              <h3 className={styles["popup-title"]}>{activeItem.title}</h3>
              <a href={activeItem.url} target="_blank" rel="noopener noreferrer" className={styles["popup-link"]}>
                <span className={styles["popup-link-text"]}>사이트 바로가기</span>
                <Image src={iconArrow} alt="" title="새탭" width={14} height={14} loading="eager" className={styles["popup-link-icon"]} />
              </a>
              <button type="button" className={styles["popup-close"]} onClick={closePopup}>
                <Image src={iconClose} alt="닫기" title="닫기" width={24} height={24} loading="eager" />
              </button>
            </div>
            <div className={styles["popup-body"]}>
              <div className={styles["popup-info"]}>
                <dl className={styles["popup-info-list"]}>
                  <div className={styles["popup-info-item"]}>
                    <dt className={styles["popup-info-title"]}>기간</dt>
                    <dd className={styles["popup-info-details"]}>{activeItem.term}</dd>
                  </div>
                  <div className={styles["popup-info-item"]}>
                    <dt className={styles["popup-info-title"]}>기술 스택</dt>
                    <dd className={styles["popup-info-details"]}>{activeItem.skills}</dd>
                  </div>
                  <div className={styles["popup-info-item"]}>
                    <dt className={styles["popup-info-title"]}>기여도</dt>
                    <dd className={styles["popup-info-details"]}>{activeItem.contribution}</dd>
                  </div>
                </dl>
                <p className={styles["popup-description"]}>{activeItem.description}</p>
              </div>
              <div className={styles["popup-images"]}>
                {activeItem.detailImages.map((image, index) => (
                  <picture key={image.jpg.src}>
                    <source srcSet={image.webp.src} type="image/webp" />
                    <img src={image.jpg.src} alt={`${activeItem.title} 상세 ${index + 1}`} title={`${activeItem.title} 상세 ${index + 1}`} width={image.jpg.width} height={image.jpg.height} loading="lazy" className={styles["popup-image"]} />
                  </picture>
                ))}
              </div>
            </div>
            <a href={activeItem.url} target="_blank" rel="noopener noreferrer" className={styles["popup-link-mobile"]}>
              <span className={styles["popup-link-text"]}>사이트 바로가기</span>
              <Image src={iconArrow} alt="" title="새탭" width={14} height={14} loading="eager" className={styles["popup-link-icon"]} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
