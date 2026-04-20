import styles from "@/app/styles/components/Visual.module.scss";
import Image from "next/image";
import titleMinjee from "@/app/assets/images/title_minjee.svg";
import titlePortfolio from "@/app/assets/images/title_portfolio.svg";
import mainImagePng from "@/app/assets/images/main_visual.png";
import mainImageWebp from "@/app/assets/images/main_visual.webp";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Visual() {
  return (
    <section className={`section ${styles["visual-container"]}`}>
      <h2 className="blind">Minjee Kim's Portfolio</h2>
      <ScrollReveal className={styles["visual-title-inner"]} animateClass={styles["animate"]}>
        <div className={styles["visual-title-wrapper"]}>
          <Image src={titleMinjee} alt="minjee's" title="minjee's" height={160} loading="eager" className={`${styles["minjeekim"]} ${styles["visual-title"]}`} />
        </div>
        <div className={styles["visual-title-wrapper"]}>
          <Image src={titlePortfolio} alt="portfolio" title="portfolio" height={130} loading="eager" className={`${styles["portfolio"]} ${styles["visual-title"]}`} />
        </div>
      </ScrollReveal>
      <ScrollReveal className={styles["visual-image-inner"]} animateClass={styles["animate"]}>
        <picture>
          <source srcSet={mainImageWebp.src} type="image/webp" />
          <img src={mainImagePng.src} alt="" title="메인 비주얼" width={1200} height={1400} loading="eager" className={styles["visual-image"]} />
        </picture>
      </ScrollReveal>
      <div className={styles["visual-scroll-mouse-container"]}>
        <div className={styles["visual-scroll-mouse"]}>
          <span className={styles["mouse"]}>
            <span></span>
          </span>
        </div>
        <p className={styles["visual-scroll-mouse-text"]}>scroll me</p>
      </div>
    </section>
  );
}
