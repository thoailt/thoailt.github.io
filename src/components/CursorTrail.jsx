import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [lastTrailTime, setLastTrailTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    // Throttle trail creation - only create trail every 100ms
    const now = Date.now();
    if (now - lastTrailTime > 100) {
      setLastTrailTime(now);

      const newTrail = {
        id: now,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails(prev => {
        const updated = [...prev, newTrail];
        // Keep only last 8 particles instead of 20
        return updated.slice(-8);
      });
    }
  }, [cursorX, cursorY, lastTrailTime]);

  // Detect mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Disable cursor trail on mobile/tablet for performance
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove, isMobile]);

  // Auto remove old trails - slower interval
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setTrails(prev => prev.length > 0 ? prev.slice(1) : prev);
    }, 150);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Don't render cursor trail on mobile/tablet
  if (isMobile) return null;

  return (
    <>
      {/* Custom Cursor - Made brighter and more visible */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg" />
      </motion.div>

      {/* Trail Particles - Optimized */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-40 will-change-transform"
          initial={{
            opacity: 0.7,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0.3,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            x: trail.x,
            y: trail.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
          />
        </motion.div>
      ))}

    </>
  );
};

export default CursorTrail;
