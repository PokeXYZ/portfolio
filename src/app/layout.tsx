"use client"; // needed since we use useEffect

import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const body = document.body;
    let t = 0;

    function frame() {
      t += 0.01; // adjust speed
      const x1 = 50 + Math.sin(t) * 30;
      const y1 = 50 + Math.cos(t) * 30;
      const x2 = 50 + Math.cos(t * 0.7) * 40;
      const y2 = 50 + Math.sin(t * 0.7) * 40;
      const x3 = 50 + Math.sin(t * 1.3) * 20;
      const y3 = 50 + Math.cos(t * 1.3) * 20;

      body.style.background = `
        radial-gradient(circle at ${x1}% ${y1}%, rgba(30,144,255,0.4), transparent 40%),
        radial-gradient(circle at ${x2}% ${y2}%, rgba(0,191,255,0.35), transparent 30%),
        radial-gradient(circle at ${x3}% ${y3}%, rgba(65,105,225,0.3), transparent 40%),
        linear-gradient(to bottom right, #04152d, #0a1f3d)
      `;

      requestAnimationFrame(frame);
    }

    frame();
  }, []);

  return (
    <html lang="en">
      <body className="min-h-screen text-white">{children}</body>
    </html>
  );
}
