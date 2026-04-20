import styles from "@/app/styles/components/Career.module.scss";
import Image from "next/image";
import title from "@/app/assets/images/title_career.svg";
import careerImageWebp from "@/app/assets/images/main_career.webp";
import careerImagePng from "@/app/assets/images/main_career.png";
import { careerItems } from "@/app/data/career";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Career() {
  return (
    <section id="career" className={`section ${styles["career-container"]}`}>
      <h2 className="blind">Career</h2>
      <ScrollReveal className="section-title-container" animateClass="animate">
        <Image src={title} alt="" title="Career" height={100} loading="lazy" className={`section-title ${styles["career-title-image"]}`} role="presentation" />
      </ScrollReveal>
      <div className={styles["career-inner"]}>
        <div className={styles["career-text-container"]}>
          <dl className={styles["career-detail-list"]}>
            {careerItems.map((item) => (
              <div key={item.company} className={styles["career-detail-item"]}>
                <dt className={styles["career-detail-title"]}>
                  {item.company} <span className={styles["career-detail-team"]}>({item.role})</span>
                </dt>
                <dd className={styles["career-detail-description"]}>
                  <span className={styles["career-detail-description-date"]}>{item.period}</span>
                  <p className={styles["career-detail-description-info"]}>{item.description}</p>
                  <div className={styles["career-detail-skill-container"]}>
                    <strong className={styles["career-detail-skill-title"]}>[주요기술/업무툴]</strong>
                    <ul className={styles["career-detail-skill-list"]}>
                      {item.skills.map((skill) => (
                        <li key={skill} className={styles["career-detail-skill-item"]}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ScrollReveal className={styles["career-image-container"]} animateClass={styles["animate"]}>
          <picture>
            <source srcSet={careerImageWebp.src} type="image/webp" className={styles["career-image-presentation"]} role="presentation" />
            <img src={careerImagePng.src} alt="" title="Career 이미지" width={1200} height={1400} loading="lazy" className={styles["career-image-presentation"]} role="presentation" />
          </picture>
        </ScrollReveal>
      </div>
    </section>
  );
}
