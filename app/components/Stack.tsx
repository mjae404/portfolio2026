import styles from "@/app/styles/components/Stack.module.scss";
import Image from "next/image";
import title from "@/app/assets/images/title_stack.svg";
import stackImagePng from "@/app/assets/images/main_stack.png";
import stackImageWebp from "@/app/assets/images/main_stack.webp";
import { stackTags, stackDetails } from "@/app/data/stack";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Stack() {
  return (
    <section id="stack" className={`section ${styles["stack-container"]}`}>
      <h2 className="blind">Stack</h2>
      <ScrollReveal className="section-title-container" animateClass="animate">
        <Image src={title} alt="" title="Stack" height={100} loading="lazy" className={`section-title ${styles["stack-title-image"]}`} role="presentation" />
      </ScrollReveal>
      <div className={styles["stack-inner"]}>
        <ScrollReveal className={styles["stack-image-container"]} animateClass={styles["animate"]}>
          <picture>
            <source srcSet={stackImageWebp.src} type="image/webp" className={styles["stack-image-presentation"]} role="presentation" />
            <img src={stackImagePng.src} alt="" title="Stack 이미지" width={1200} height={1400} loading="lazy" className={styles["stack-image-presentation"]} role="presentation" />
          </picture>
        </ScrollReveal>
        <div className={styles["stack-text-container"]}>
          <ul className={styles["stack-list"]}>
            {stackTags.map((tag) => (
              <li key={tag} className={styles["stack-item"]}>{tag}</li>
            ))}
          </ul>
          <dl className={styles["stack-detail-list"]}>
            {stackDetails.map((detail) => (
              <div key={detail.title} className={styles["stack-detail-item"]}>
                <dt className={styles["stack-detail-title"]}>{detail.title}</dt>
                {detail.descriptions.map((desc) => (
                  <dd key={desc} className={styles["stack-detail-description"]}>{desc}</dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
