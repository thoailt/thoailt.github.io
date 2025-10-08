import { useEffect, lazy, Suspense, useState } from 'react';
import { useConfig } from './hooks/useConfig';
import { AnimatePresence } from 'framer-motion';

// Eager load components above the fold
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

// Custom sections (not lazy loaded for better UX)
import AboutSection from './components/AboutSection';
import PublicationsSection from './components/PublicationsSection';
import AwardsSection from './components/AwardsSection';

// Lazy load footer
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

function App() {
  const { config, loading: configLoading } = useConfig();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (config?.title) {
      document.title = config.title;
    }
  }, [config]);

  useEffect(() => {
    // Show loading screen for at least 1.5 seconds for smooth animation
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {(configLoading || showLoading) && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
      <Navigation title={config?.['page-top-title'] || "Thoai Le"} />

      <Hero
        name={config?.['page-top-title'] || "Thoai Le"}
        title={config?.['top-section-bg-text'] || "Computer Science"}
        subtitle="Master's Student & Teaching Assistant"
        avatar="/assets/img/avt-transparent.png"
      />

      {/* Main Content Sections */}
      <AboutSection />
      <PublicationsSection />
      <AwardsSection />

      {/* Lazy loaded footer */}
      <Suspense fallback={<div className="h-20"></div>}>
        <Footer
          copyrightText={config?.['copyright-text']}
          githubLink="https://github.com/thoailt"
        />
        <ScrollToTop />
      </Suspense>
    </div>
    </>
  );
}

export default App;
