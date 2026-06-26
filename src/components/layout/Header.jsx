import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#case-studies', label: 'Case Studies' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-forsythia rounded-lg flex items-center justify-center">
              <span className="text-oceanic font-heading font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-heading font-bold text-oceanic">
              armory
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-gray-700 hover:text-nocturnal transition-colors duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* ✅ USING SEARCH ICON */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Search">
              <img src="/assets/svgs/search.svg" alt="Search" className="w-5 h-5" />
            </button>
            
            <button className="bg-nocturnal text-white font-heading px-6 py-2.5 rounded-lg hover:bg-oceanic transition-all duration-200 hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-nocturnal transition-colors"
            aria-label="Toggle menu"
          >
            {/* ✅ USING X-MARK */}
            {isMobileMenuOpen ? (
              <img src="/assets/svgs/x-mark.svg" alt="Close menu" className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-gray-700 hover:text-nocturnal transition-colors duration-150 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-nocturnal text-white font-heading px-6 py-2.5 rounded-lg hover:bg-oceanic transition-all duration-200 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}