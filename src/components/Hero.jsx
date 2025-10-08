import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = ({
  name = "Thoai Le",
  title = "Computer Science",
  subtitle = "Master's Student & Teaching Assistant",
  avatar = "/assets/img/avt-transparent.png"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const slowSpringConfig = { damping: 30, stiffness: 100 };

  // Transform mouse position to rotation
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    springConfig
  );

  // Parallax for floating particles
  const parallaxX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), slowSpringConfig);
  const parallaxY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), slowSpringConfig);

  const parallaxX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-80, 80]), slowSpringConfig);
  const parallaxY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-80, 80]), slowSpringConfig);

  const parallaxX3 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), slowSpringConfig);
  const parallaxY3 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), slowSpringConfig);

  const parallaxX4 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-60, 60]), slowSpringConfig);
  const parallaxY4 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-60, 60]), slowSpringConfig);

  // Handle mouse move
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles following mouse */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl"
        style={{ x: parallaxX1, y: parallaxY1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-400/15 rounded-full blur-2xl"
        style={{ x: parallaxX2, y: parallaxY2 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-pink-400/20 rounded-full blur-lg"
        style={{ x: parallaxX3, y: parallaxY3 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-indigo-300/15 rounded-full blur-2xl"
        style={{ x: parallaxX4, y: parallaxY4 }}
      />

      {/* More subtle particles */}
      <motion.div
        className="absolute top-1/2 left-1/5 w-8 h-8 bg-purple-300/25 rounded-full blur-md"
        style={{
          x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), slowSpringConfig),
          y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), slowSpringConfig)
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/5 w-10 h-10 bg-pink-300/20 rounded-full blur-lg"
        style={{
          x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-70, 70]), slowSpringConfig),
          y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-70, 70]), slowSpringConfig)
        }}
      />
      <motion.div
        className="absolute top-1/5 right-2/5 w-14 h-14 bg-indigo-300/15 rounded-full blur-xl"
        style={{
          x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), slowSpringConfig),
          y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-25, 25]), slowSpringConfig)
        }}
      />

      {/* Geometric shapes following mouse */}
      <motion.div
        className="absolute top-1/6 left-1/6 w-6 h-6 border-2 border-indigo-400/30 rotate-12"
        style={{
          x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), slowSpringConfig),
          y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-35, 35]), slowSpringConfig),
          rotate: useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), slowSpringConfig)
        }}
      />
      <motion.div
        className="absolute bottom-1/6 right-1/6 w-8 h-8 border-2 border-purple-400/25 rounded-md"
        style={{
          x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-45, 45]), slowSpringConfig),
          y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-45, 45]), slowSpringConfig),
          rotate: useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), slowSpringConfig)
        }}
      />

      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <motion.img
            src={avatar}
            alt={name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl ring-4 ring-indigo-200/50 mx-auto"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            transform: "translateZ(30px)",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 mb-2 font-semibold"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            {title}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-600"
            style={{
              transform: "translateZ(10px)",
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Floating Elements on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                transform: "translateZ(70px)",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                transform: "translateZ(60px)",
              }}
            />
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
