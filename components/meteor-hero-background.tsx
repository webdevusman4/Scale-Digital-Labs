'use client';

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  isCyan: boolean;
  pulsePhase: number;
}

interface Pulse {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tailLength: number;
  isOrange: boolean;
}

export function MeteorHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let pulses: Pulse[] = [];
    let isVisible = true;
    let width = 0;
    let height = 0;

    const maxConnectionDistance = 140;
    const mouseConnectionDistance = 160;

    const initParticles = () => {
      particles = [];
      const isMobile = width < 768;
      // 1.5x population density
      const count = isMobile ? 54 : 126;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // 4x speed (2x of previous 2x)
          vx: (Math.random() - 0.5) * (isMobile ? 0.8 : 1.4),
          vy: (Math.random() - 0.5) * (isMobile ? 0.8 : 1.4),
          baseRadius: Math.random() * 1.5 + 1.2,
          isCyan: Math.random() < 0.15, // Roughly 1 in 6-8 are lit nodes
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); 
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    handleResize();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !prefersReducedMotion) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(container);

    let lastPulseSpawn = 0;

    const render = (timestamp: number) => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Meteors (Pulses) spawning from lit nodes only
      if (!prefersReducedMotion && timestamp - lastPulseSpawn > 1000 && particles.length > 5) {
        lastPulseSpawn = timestamp;
        
        const litNodes = particles.filter(p => p.isCyan);
        if (litNodes.length > 0) {
          const origin = litNodes[Math.floor(Math.random() * litNodes.length)];
          
          const angle = Math.random() * Math.PI * 2; // Any outward angle (0-360)
          const speed = Math.random() * 1.5 + 1.5; // 1.5 to 3 px per frame
          
          pulses.push({
            x: origin.x,
            y: origin.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            tailLength: 30 + Math.random() * 20,
            isOrange: Math.random() > 0.5
          });
        }
      }

      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          // 2x phase animation speed
          p.pulsePhase += 0.05;

          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;
        }
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mouseRef.current.active && mx > -100 && mx < width + 100 && my > -100 && my < height + 100;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const factor = 1 - dist / maxConnectionDistance;
            ctx.beginPath();

            if (p1.isCyan || p2.isCyan) {
              // Highlighted nodes connect with fuchsia
              ctx.strokeStyle = `rgba(247, 37, 133, ${factor * 0.3})`;
              ctx.lineWidth = 1;
            } else {
              ctx.strokeStyle = `rgba(123, 47, 247, ${factor * 0.12})`;
              ctx.lineWidth = 0.8;
            }

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (hasMouse) {
          const mdx = p1.x - mx;
          const mdy = p1.y - my;
          const mDist = Math.hypot(mdx, mdy);

          if (mDist < mouseConnectionDistance) {
            const mFactor = 1 - mDist / mouseConnectionDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(247, 37, 133, ${mFactor * 0.5})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mx, my);
            ctx.stroke();

            if (!prefersReducedMotion && mDist > 25) {
              p1.x -= (mdx / mDist) * 0.25 * mFactor;
              p1.y -= (mdy / mDist) * 0.25 * mFactor;
            }
          }
        }

        ctx.beginPath();
        const pulseAmp = Math.sin(p1.pulsePhase) * 0.4 + 0.6;

        if (p1.isCyan) {
          ctx.fillStyle = `rgba(247, 37, 133, ${0.85 * pulseAmp})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#F72585";
          ctx.arc(p1.x, p1.y, p1.baseRadius * 1.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; 
        } else {
          ctx.fillStyle = "rgba(123, 47, 247, 0.3)";
          ctx.arc(p1.x, p1.y, p1.baseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        for (let i = pulses.length - 1; i >= 0; i--) {
          const pulse = pulses[i];
          pulse.x += pulse.vx;
          pulse.y += pulse.vy;

          if (pulse.x < -20 || pulse.x > width + 20 || pulse.y < -20 || pulse.y > height + 20) {
            pulses.splice(i, 1);
            continue;
          }

          const speed = Math.hypot(pulse.vx, pulse.vy);
          const tailX = pulse.x - (pulse.vx * (pulse.tailLength / speed));
          const tailY = pulse.y - (pulse.vy * (pulse.tailLength / speed));

          // --- COMET MULTI-STOP DIGITAL GRADIENT TRAIL (TAPERED) ---
          const grad = ctx.createLinearGradient(tailX, tailY, pulse.x, pulse.y);
          grad.addColorStop(0, "rgba(123, 47, 247, 0)");       // Tail fades into transparent Purple
          grad.addColorStop(0.5, "rgba(247, 37, 133, 0.8)");   // Solidifies into Fuchsia
          grad.addColorStop(1, "rgba(255, 140, 66, 1)");       // Strikes at the head with Orange

          // Draw tapered comet shape
          const angle = Math.atan2(pulse.vy, pulse.vx);
          const headRadius = 4.5; // Thickness of the meteor head

          ctx.beginPath();
          // Arc for the front of the head
          ctx.arc(pulse.x, pulse.y, headRadius, angle - Math.PI / 2, angle + Math.PI / 2);
          // Line back to the tail tip
          ctx.lineTo(tailX, tailY);
          ctx.closePath();

          ctx.fillStyle = grad;
          ctx.fill();

          // --- LEADING HIGH-INTENSITY PHOTON ---
          ctx.beginPath();
          ctx.fillStyle = "#ffffff";                           // White hot core
          ctx.shadowBlur = 20;
          ctx.shadowColor = "#FF8C42";                         // Orange volumetric bloom
          ctx.arc(pulse.x, pulse.y, headRadius * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;                                  // Reset immediately
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      resizeObserver.disconnect();
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-transparent">
      
      {/* VOLUMETRIC CORE LIGHT */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[700px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(123, 47, 247, 0.05)', filter: 'blur(120px)' }}
        aria-hidden="true"
      />

      {/* DYNAMIC CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full pointer-events-none z-10"
      />
    </div>
  );  
}
