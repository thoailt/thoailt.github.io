// Animation utilities for performance optimization

// Detect if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect mobile/low-performance devices
export const isMobileDevice = () => {
  return window.innerWidth < 768 || 'ontouchstart' in window;
};

// Get optimized animation config based on device
export const getAnimationConfig = () => {
  const shouldReduceMotion = prefersReducedMotion() || isMobileDevice();

  return {
    // Disable animations on mobile or if user prefers reduced motion
    disabled: shouldReduceMotion,

    // Faster durations on mobile
    duration: shouldReduceMotion ? 0.2 : 0.5,

    // Simpler spring config for performance
    spring: shouldReduceMotion
      ? { duration: 0.3 }
      : { damping: 25, stiffness: 150 },

    // Viewport options - animate once only
    viewport: { once: true, margin: "-50px" }
  };
};

// Fade in animation (lightweight)
export const fadeIn = (delay = 0) => {
  const config = getAnimationConfig();

  if (config.disabled) {
    return { initial: {}, animate: {}, transition: {} };
  }

  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: config.duration, delay }
  };
};

// Slide up animation (lightweight)
export const slideUp = (delay = 0) => {
  const config = getAnimationConfig();

  if (config.disabled) {
    return { initial: {}, animate: {}, transition: {} };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: config.duration, delay }
  };
};

// Scale animation (lightweight)
export const scaleIn = (delay = 0) => {
  const config = getAnimationConfig();

  if (config.disabled) {
    return { initial: {}, animate: {}, transition: {} };
  }

  return {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: config.duration, delay }
  };
};
