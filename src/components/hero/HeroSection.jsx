export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-oceanic via-nocturnal to-oceanic overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 hero-title">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia"></span>
            </span>
            <span className="text-sm font-body text-white/90 font-medium">
              Revolutionizing AI Automation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight hero-title">
            Build Smarter AI
            <br />
            <span className="text-forsythia">Automation Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 font-body mb-12 max-w-2xl mx-auto leading-relaxed hero-subtitle">
            We architect neural ecosystems that solve complex operational hurdles and drive measurable growth through predictive analytics and seamless AI integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-cta">
            <button className="bg-forsythia text-oceanic font-heading px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-200 hover:shadow-xl hover:scale-105 w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-heading px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-200 w-full sm:w-auto">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap hero-cta">
            {/* ✅ USING ARROW-TRENDING-UP */}
            <div className="flex items-center gap-2 text-white/70 font-body text-sm">
              <img src="/assets/svgs/arrow-trending-up.svg" alt="" className="w-5 h-5 opacity-70" />
              <span>500+ companies</span>
            </div>
            
            {/* ✅ USING CHART-PIE */}
            <div className="flex items-center gap-2 text-white/70 font-body text-sm">
              <img src="/assets/svgs/chart-pie.svg" alt="" className="w-5 h-5 opacity-70" />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}