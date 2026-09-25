"use client";

import { useEffect, useRef } from "react";

/**
 * Signature visual: a central aggregator node with orbiting client nodes,
 * connected by lines that pulse when a "round" completes. This is a direct
 * visual reference to federated learning — the strongest technical thread
 * in the CV — rather than decorative ambient motion.
 */
export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const NODE_COUNT = 8;
    type Client = { angle: number; radius: number; speed: number; pulse: number };
    const clients: Client[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
      angle: (i / NODE_COUNT) * Math.PI * 2,
      radius: 0,
      speed: (Math.random() * 0.15 + 0.06) * (Math.random() > 0.5 ? 1 : -1),
      pulse: Math.random() * Math.PI * 2,
    }));

    let roundT = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      clients.forEach((c) => {
        c.radius = Math.min(width, height) * (0.32 + Math.random() * 0.14);
      });
    }

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      roundT += 0.006;
      const pulseAmount = (Math.sin(roundT) + 1) / 2; // 0..1 aggregation pulse

      // connections
      clients.forEach((c) => {
        const x = cx + Math.cos(c.angle) * c.radius;
        const y = cy + Math.sin(c.angle) * c.radius * 0.62;
        const alpha = 0.08 + pulseAmount * 0.14;
        ctx.strokeStyle = `rgba(89, 201, 188, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      // client nodes
      clients.forEach((c) => {
        if (!prefersReducedMotion) c.angle += c.speed * 0.01;
        const x = cx + Math.cos(c.angle) * c.radius;
        const y = cy + Math.sin(c.angle) * c.radius * 0.62;
        const r = 2.4 + Math.sin(roundT * 2 + c.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(89, 201, 188, 0.55)";
        ctx.fill();
      });

      // aggregator node
      const serverR = 5 + pulseAmount * 3;
      ctx.beginPath();
      ctx.arc(cx, cy, serverR + 8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(242, 164, 92, ${0.15 + pulseAmount * 0.15})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, serverR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(242, 164, 92, 0.85)";
      ctx.fill();

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    draw();
    if (prefersReducedMotion) {
      // draw a single static frame
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  );
}
