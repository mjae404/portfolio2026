"use client";

import { useState } from "react";
import styles from "@/app/styles/components/Contact.module.scss";
import Image from "next/image";
import title from "@/app/assets/images/title_contact.svg";
import contactImagePng from "@/app/assets/images/main_contact.png";
import contactImageWebp from "@/app/assets/images/main_contact.webp";
import { contactItems } from "@/app/data/contact";
import { db } from "@/app/lib/firebase";
import ScrollReveal from "@/app/components/ScrollReveal";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const submitLabel = {
    idle: "메시지 보내기",
    loading: "전송 중...",
    success: "전송 완료!",
    error: "전송 실패. 다시 시도해주세요.",
  };

  return (
    <section id="contact" className={`section ${styles["contact-container"]}`}>
      <h2 className="blind">Contact</h2>
      <ScrollReveal className="section-title-container" animateClass="animate">
        <Image src={title} alt="" title="Contact" height={100} loading="lazy" className={`section-title ${styles["contact-title-image"]}`} role="presentation" />
      </ScrollReveal>
      <div className={styles["contact-inner"]}>
        <div className={styles["contact-text-container"]}>
          <div className={styles["contact-status"]}>
            <span className={styles["contact-status-dot"]}></span>
            <span className={styles["contact-status-text"]}>현재 정규직 / 계약직 제안을 검토 중입니다</span>
          </div>
          <p className={styles["contact-text-description"]}>
            저와 나누고 싶으신 말씀이 있으시다면 편하게 연락 주세요:)<br aria-hidden={true} />
            확인하는 대로 최대한 빠르게 회신드리도록 하겠습니다.
          </p>
          <div className={styles["contact-info"]}>
            <span className={styles["contact-info-location"]}>Based in Seoul, South Korea</span>
          </div>

          <ul className={styles["contact-list"]}>
            {contactItems.map((item) => (
              <li key={item.label} className={styles["contact-item"]}>
                <a href={item.href} className={styles["contact-link"]} target="_blank" rel="noopener noreferrer">
                  <Image src={item.icon} alt="" title={item.label} width={20} height={20} className={styles["contact-icon"]} loading="lazy" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <form className={styles["contact-form"]} onSubmit={handleSubmit}>
            <h3 className={styles["contact-form-title"]}>Send me a message</h3>
            <div className={styles["contact-form-row"]}>
              <label htmlFor="contact-name" className="blind">이름</label>
              <input
                id="contact-name"
                type="text"
                placeholder="이름"
                required
                className={styles["contact-form-input"]}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className={styles["contact-form-row"]}>
              <label htmlFor="contact-email" className="blind">이메일</label>
              <input
                id="contact-email"
                type="email"
                placeholder="이메일"
                required
                className={styles["contact-form-input"]}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className={styles["contact-form-row"]}>
              <label htmlFor="contact-message" className="blind">메시지</label>
              <textarea
                id="contact-message"
                placeholder="메시지를 입력해주세요"
                required
                rows={5}
                className={`${styles["contact-form-input"]} ${styles["contact-form-textarea"]}`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className={`${styles["contact-form-submit"]}${status === 'success' ? ` ${styles["contact-form-submit-success"]}` : ''}${status === 'error' ? ` ${styles["contact-form-submit-error"]}` : ''}`}
              disabled={status === "loading"}
            >
              {submitLabel[status]}
            </button>
          </form>
        </div>
        <ScrollReveal className={styles["contact-image-container"]} animateClass={styles["animate"]}>
          <picture>
            <source srcSet={contactImageWebp.src} type="image/webp" className={styles["contact-image-presentation"]} role="presentation" />
            <img src={contactImagePng.src} alt="" title="Contact 이미지" width={1200} height={1400} loading="lazy" className={styles["contact-image-presentation"]} role="presentation" />
          </picture>
        </ScrollReveal>
      </div>
    </section>
  );
}
