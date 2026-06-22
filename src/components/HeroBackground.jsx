import { useEffect, useRef } from 'react';

/* ── Colour palettes per theme ── */
const DARK_COLORS = {
  bg0: '#020617',
  bg1: '#07111f',
  bg2: '#111032',
  bg3: '#030712',
  glow1: 'rgba(79, 70, 229, 0.26)',
  glow2: 'rgba(20, 184, 166, 0.18)',
  wave1: 'rgba(45, 212, 191, ',
  wave2: 'rgba(124, 58, 237, ',
  wave3: 'rgba(99, 102, 241, ',
  shapeCyan: 'rgba(45, 212, 191, 0.16)',
  shapePurple: 'rgba(124, 58, 237, 0.14)',
  shapeDot: 'rgba(248, 250, 252, 0.12)',
  particle: 'rgba(45, 212, 191, ',
  line: 'rgba(14, 165, 233, ',
  fade0: 'rgba(2, 6, 23, 0.02)',
  fade1: 'rgba(2, 6, 23, 0.12)',
  fade2: 'rgba(2, 6, 23, 0.62)',
};

const LIGHT_COLORS = {
  bg0: '#eef2ff',
  bg1: '#f0f4ff',
  bg2: '#e8f0fe',
  bg3: '#f5f7ff',
  glow1: 'rgba(99, 102, 241, 0.15)',
  glow2: 'rgba(20, 184, 166, 0.10)',
  wave1: 'rgba(99, 102, 241, ',
  wave2: 'rgba(124, 58, 237, ',
  wave3: 'rgba(20, 184, 166, ',
  shapeCyan: 'rgba(99, 102, 241, 0.12)',
  shapePurple: 'rgba(124, 58, 237, 0.10)',
  shapeDot: 'rgba(51, 65, 85, 0.07)',
  particle: 'rgba(99, 102, 241, ',
  line: 'rgba(99, 102, 241, ',
  fade0: 'rgba(240, 244, 255, 0.00)',
  fade1: 'rgba(240, 244, 255, 0.06)',
  fade2: 'rgba(240, 244, 255, 0.30)',
};

function createParticle(width, height, index) {
  const angle = ((index * 137.5) % 360) * (Math.PI / 180);
  const speed = 0.12 + (index % 5) * 0.025;

  return {
    x: ((index * 83) % Math.max(width, 1)) + Math.random() * 24,
    y: ((index * 47) % Math.max(height, 1)) + Math.random() * 24,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: 1.1 + (index % 4) * 0.45,
    glow: 0.25 + (index % 6) * 0.05,
  };
}

function createShape(width, height, index) {
  return {
    x: ((index * 211) % Math.max(width, 1)) + width * 0.08,
    y: ((index * 157) % Math.max(height, 1)) + height * 0.08,
    size: 14 + (index % 4) * 7,
    rotation: index * 0.8,
    speed: 0.00045 + (index % 3) * 0.0002,
    type: index % 3,
  };
}

function drawHexagon(context, x, y, size, rotation) {
  context.beginPath();

  for (let index = 0; index < 6; index += 1) {
    const angle = rotation + (Math.PI / 3) * index;
    const pointX = x + Math.cos(angle) * size;
    const pointY = y + Math.sin(angle) * size;

    if (index === 0) {
      context.moveTo(pointX, pointY);
    } else {
      context.lineTo(pointX, pointY);
    }
  }

  context.closePath();
}

function drawHeroScene(context, state, reduceMotion, C) {
  const { width, height, dpr, particles, shapes, pointer, time } = state;
  const renderWidth = width / dpr;
  const renderHeight = height / dpr;
  const parallaxX = pointer.x * 16;
  const parallaxY = pointer.y * 12;

  context.clearRect(0, 0, renderWidth, renderHeight);

  /* Background gradient */
  const baseGradient = context.createLinearGradient(0, 0, renderWidth, renderHeight);
  baseGradient.addColorStop(0, C.bg0);
  baseGradient.addColorStop(0.45, C.bg1);
  baseGradient.addColorStop(0.72, C.bg2);
  baseGradient.addColorStop(1, C.bg3);
  context.fillStyle = baseGradient;
  context.fillRect(0, 0, renderWidth, renderHeight);

  /* Glow spots */
  const glowOne = context.createRadialGradient(
    renderWidth * 0.18 + parallaxX, renderHeight * 0.24 + parallaxY, 0,
    renderWidth * 0.18 + parallaxX, renderHeight * 0.24 + parallaxY, renderWidth * 0.52,
  );
  glowOne.addColorStop(0, C.glow1);
  glowOne.addColorStop(1, 'transparent');
  context.fillStyle = glowOne;
  context.fillRect(0, 0, renderWidth, renderHeight);

  const glowTwo = context.createRadialGradient(
    renderWidth * 0.78 - parallaxX, renderHeight * 0.38 - parallaxY, 0,
    renderWidth * 0.78 - parallaxX, renderHeight * 0.38 - parallaxY, renderWidth * 0.46,
  );
  glowTwo.addColorStop(0, C.glow2);
  glowTwo.addColorStop(1, 'transparent');
  context.fillStyle = glowTwo;
  context.fillRect(0, 0, renderWidth, renderHeight);

  /* Wave bands */
  context.save();
  context.globalCompositeOperation = 'multiply';

  for (let wave = 0; wave < 3; wave += 1) {
    const waveY = renderHeight * (0.28 + wave * 0.18);
    const offset = reduceMotion ? 0 : Math.sin(time * 0.00035 + wave) * 22;
    const gradient = context.createLinearGradient(0, waveY - 90, renderWidth, waveY + 90);
    gradient.addColorStop(0, `${C.wave1}0)`);
    gradient.addColorStop(0.42, `${wave === 1 ? C.wave2 : C.wave1}0.045)`);
    gradient.addColorStop(1, `${C.wave3}0)`);

    context.beginPath();
    context.moveTo(-80, waveY + offset);

    for (let x = -80; x <= renderWidth + 80; x += 80) {
      const y = waveY + offset + Math.sin(x * 0.008 + time * 0.0005 + wave) * 26;
      context.lineTo(x, y);
    }

    context.lineTo(renderWidth + 80, waveY + 90 + offset);
    context.lineTo(-80, waveY + 90 + offset);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();
  }

  context.restore();

  /* Floating shapes */
  for (let index = 0; index < shapes.length; index += 1) {
    const shape = shapes[index];
    const drift = reduceMotion ? 0 : Math.sin(time * shape.speed + index) * 8;
    const x = shape.x + parallaxX * 0.45;
    const y = shape.y + drift + parallaxY * 0.35;

    context.save();
    context.translate(x, y);
    context.rotate(shape.rotation + time * shape.speed);
    context.strokeStyle = index % 2 === 0 ? C.shapeCyan : C.shapePurple;
    context.lineWidth = 1;

    if (shape.type === 0) {
      context.beginPath();
      context.arc(0, 0, shape.size, 0, Math.PI * 2);
      context.stroke();
    } else if (shape.type === 1) {
      drawHexagon(context, 0, 0, shape.size, 0);
      context.stroke();
    } else {
      context.fillStyle = C.shapeDot;
      context.beginPath();
      context.arc(0, 0, 2.2, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  }

  /* Particles + connecting lines */
  if (!reduceMotion) {
    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < -20) particle.x = renderWidth + 20;
      if (particle.x > renderWidth + 20) particle.x = -20;
      if (particle.y < -20) particle.y = renderHeight + 20;
      if (particle.y > renderHeight + 20) particle.y = -20;
    }
  }

  for (let first = 0; first < particles.length; first += 1) {
    const particle = particles[first];
    const x = particle.x + parallaxX * 0.28;
    const y = particle.y + parallaxY * 0.22;

    context.fillStyle = `${C.particle}${particle.glow})`;
    context.beginPath();
    context.arc(x, y, particle.radius, 0, Math.PI * 2);
    context.fill();

    for (let second = first + 1; second < particles.length; second += 1) {
      const neighbor = particles[second];
      const dx = particle.x - neighbor.x;
      const dy = particle.y - neighbor.y;
      const distance = Math.hypot(dx, dy);
      const maxDistance = Math.min(145, renderWidth * 0.16);

      if (distance < maxDistance) {
        const alpha = (1 - distance / maxDistance) * 0.14;
        context.strokeStyle = `${C.line}${alpha})`;
        context.lineWidth = 0.8;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(neighbor.x + parallaxX * 0.28, neighbor.y + parallaxY * 0.22);
        context.stroke();
      }
    }
  }

  /* Bottom vignette fade */
  const fade = context.createLinearGradient(0, 0, 0, renderHeight);
  fade.addColorStop(0, C.fade0);
  fade.addColorStop(0.55, C.fade1);
  fade.addColorStop(1, C.fade2);
  context.fillStyle = fade;
  context.fillRect(0, 0, renderWidth, renderHeight);
}

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      particles: [],
      shapes: [],
      pointer: { x: 0, y: 0 },
      targetPointer: { x: 0, y: 0 },
      time: 0,
    };

    let frameId = 0;
    let reduceMotion = motionQuery.matches;

    /* Detect current theme from the root element */
    const getColors = () => {
      const root = document.documentElement;
      const isLight =
        root.getAttribute('data-theme') === 'light' ||
        document.body.closest('.theme-light') !== null ||
        document.querySelector('.theme-light') !== null;
      return isLight ? LIGHT_COLORS : DARK_COLORS;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(Math.floor(rect.width * dpr), 1);
      const height = Math.max(Math.floor(rect.height * dpr), 1);

      state.width = width;
      state.height = height;
      state.dpr = dpr;
      canvas.width = width;
      canvas.height = height;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const renderWidth = width / dpr;
      const renderHeight = height / dpr;
      const particleCount = reduceMotion
        ? 18
        : Math.min(54, Math.max(28, Math.round(renderWidth / 24)));
      const shapeCount = renderWidth < 640 ? 5 : 8;

      state.particles = Array.from({ length: particleCount }, (_, index) =>
        createParticle(renderWidth, renderHeight, index),
      );
      state.shapes = Array.from({ length: shapeCount }, (_, index) =>
        createShape(renderWidth * 0.84, renderHeight * 0.78, index),
      );

      drawHeroScene(context, state, reduceMotion, getColors());
    };

    const animate = (time) => {
      state.time = time;
      state.pointer.x += (state.targetPointer.x - state.pointer.x) * 0.035;
      state.pointer.y += (state.targetPointer.y - state.pointer.y) * 0.035;
      drawHeroScene(context, state, reduceMotion, getColors());

      if (!reduceMotion) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      state.targetPointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      state.targetPointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };

    const handlePointerLeave = () => {
      state.targetPointer.x = 0;
      state.targetPointer.y = 0;
    };

    const handleMotionPreference = (event) => {
      reduceMotion = event.matches;
      cancelAnimationFrame(frameId);
      resize();
      if (!reduceMotion) frameId = requestAnimationFrame(animate);
    };

    resize();
    if (!reduceMotion) frameId = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    motionQuery.addEventListener('change', handleMotionPreference);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      motionQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

export default HeroBackground;
