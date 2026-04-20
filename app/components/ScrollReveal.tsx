"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animateClass: string;
}

export default function ScrollReveal({ children, className, animateClass }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(animateClass, entry.isIntersecting);
      });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateClass]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
