import styles from "@/app/styles/components/Summary.module.scss";
import { summarySections } from "@/app/data/summary";

export default function Summary() {
  return (
    <section className={styles["summary-container"]}>
      <h2 className="blind">Intro</h2>
      <div className={styles["summary-inner"]}>
        <ol className={styles["summary-list"]}>
          {summarySections.map((section) => (
            <li key={section.title} className={styles["summary-item"]}>
              <strong className={styles["summary-item-title"]}>{section.title}</strong>
              <ul className={styles["summary-sub-list"]}>
                {section.items.map((item) => (
                  <li key={item} className={styles["summary-sub-item"]}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
