import { useEffect, lazy, Suspense, useState } from 'react';
import { useConfig } from './hooks/useConfig';
import { AnimatePresence } from 'framer-motion';

// Eager load components above the fold
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

// Lazy load sections below the fold for better performance
const AboutSection = lazy(() => import('./components/AboutSection'));
const PublicationsSection = lazy(() => import('./components/PublicationsSection'));
const AwardsSection = lazy(() => import('./components/AwardsSection'));
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
    // Show loading screen for 0.5 seconds for faster loading
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {(configLoading || showLoading) && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
      <Navigation title={config?.['nav-title'] || "Thoai Le"} />

      <Hero
        name={config?.['page-top-title'] || "Thoai Le"}
        title={config?.['top-section-bg-text'] || "Computer Science"}
        subtitle="Master's Student & Teaching Assistant"
        avatar="/assets/img/avt-transparent.png"
      />

      {/* Main Content Sections - Lazy loaded */}
      <Suspense fallback={
        <div className="py-20 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <AboutSection />
        <PublicationsSection />
        <AwardsSection />
      </Suspense>

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
