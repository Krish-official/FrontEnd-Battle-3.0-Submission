import { useEffect, useState } from 'react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #172B36 0%, #114C5A 50%, #172B36 100%)' }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating SVG decorations - hidden on mobile for performance */}
      <img
        src="/assets/svgs/cube-16-solid.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-32 right-16 w-16 h-16 opacity-10"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          filter: 'invert(1)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <img
        src="/assets/svgs/link-solid.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute bottom-48 left-16 w-12 h-12 opacity-10"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
          filter: 'invert(1)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8 hero-title">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-body text-white/90 font-medium">
              Revolutionizing AI Automation
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight hero-title">
            Build Smarter AI
            <br />
            <span style={{ color: '#FFC801' }}>Automation Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl text-white/80 font-body mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed hero-subtitle px-2">
            We architect neural ecosystems that solve complex operational
            hurdles and drive measurable growth through predictive analytics
            and seamless AI integration.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 hero-cta px-4">
            <button
              className="w-full sm:w-auto font-heading font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#FFC801', color: '#172B36' }}
            >
              Start Free Trial
            </button>
            <button
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 hero-cta">
            <div className="flex items-center gap-2 text-white/60 font-body text-xs sm:text-sm">
              <img
                src="/assets/svgs/arrow-trending-up.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 sm:w-5 sm:h-5 opacity-60"
                style={{ filter: 'invert(1)' }}
              />
              <span>500+ companies trust us</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white/60 font-body text-xs sm:text-sm">
              <img
                src="/assets/svgs/chart-pie.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 sm:w-5 sm:h-5 opacity-60"
                style={{ filter: 'invert(1)' }}
              />
              <span>99.9% uptime SLA</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-white/60 font-body text-xs sm:text-sm">
              <img
                src="/assets/svgs/cog-8-tooth.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 sm:w-5 sm:h-5 opacity-60"
                style={{ filter: 'invert(1)' }}
              />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}