import React from "react";

export function Lanyard({ children, className = "", intensity = 40 }) {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-xl ${className}`}
      style={{
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 70%)",
          mixBlendMode: "overlay",
          filter: `blur(${intensity}px)`,
        }}
      ></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
