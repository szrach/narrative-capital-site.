"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.animationDelay = `${delay}ms`;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add("reveal-in");
        io.unobserve(el);
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal-out ${className}`}>
      {children}
    </Tag>
  );
}
