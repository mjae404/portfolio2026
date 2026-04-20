import styles from "@/app/styles/components/About.module.scss";
import Image from "next/image";
import title from "@/app/assets/images/title_about.svg";
import aboutImagePng from "@/app/assets/images/main_about.png";
import aboutImageWebp from "@/app/assets/images/main_about.webp";
import { profileInfo, aboutDetails } from "@/app/data/about";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className={`section ${styles["about-container"]}`}>
      <h2 className="blind">About</h2>
      <ScrollReveal className="section-title-container" animateClass="animate">
        <Image src={title} alt="" title="About" height={100} loading="lazy" className={`section-title ${styles["about-title-image"]}`} role="presentation" />
      </ScrollReveal>
      <div className={styles["about-inner"]}>
        <ScrollReveal className={styles["about-image-container"]} animateClass={styles["animate"]}>
          <picture>
            <source srcSet={aboutImageWebp.src} type="image/webp" className={styles["about-image-presentation"]} role="presentation" />
            <img src={aboutImagePng.src} alt="" title="About 이미지" width={1200} height={1400} loading="lazy" className={styles["about-image-presentation"]} role="presentation" />
          </picture>
        </ScrollReveal>
        <div className={styles["about-text-container"]}>
          <ul className={styles["about-text-title-list"]}>
            <li className={styles["about-text-title-item"]}>
              <strong className={styles["about-text-title"]}>{profileInfo.name}</strong>
            </li>
            <li className={styles["about-text-title-item"]}>{profileInfo.birth}</li>
            <li className={styles["about-text-title-item"]}>{profileInfo.role}</li>
          </ul>
          <p className={styles["about-text-description"]}>{profileInfo.description}</p>
          <dl className={styles["about-detail-list"]}>
            {aboutDetails.map((section) => (
              <div key={section.category} className={styles["about-detail-item"]}>
                <dt className={styles["about-detail-title"]}>{section.category}</dt>
                {section.entries.map((entry) => (
                  <dd key={`${entry.date}-${entry.title}`} className={styles["about-detail-description"]}>
                    <span className={styles["about-detail-description-date"]}>{entry.date}</span>
                    <strong className={styles["about-detail-description-title"]}>{entry.title}</strong>
                    {entry.organized ? (
                      <span className={`${styles["about-detail-description-info"]} ${styles["organized"]}`}>{entry.organized}</span>
                    ) : (
                      <span className={styles["about-detail-description-info"]}>{entry.info}</span>
                    )}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
