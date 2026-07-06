"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "#2de8b0";
      ring.style.opacity = "0.6";
      dot.style.opacity = "0";
    };

    const onLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(255,255,255,0.4)";
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Hide on mobile
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      dot.style.display = "none";
      ring.style.display = "none";
    } else {
      document.body.style.cursor = "none";
    }

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#2de8b0",
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.4)",
          marginLeft: "-16px",
          marginTop: "-16px",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
