export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Features', href: '#features' },
      { label: 'Articles', href: '#' },
    ],
    'Company': [
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Book A Call', href: '#' },
      { label: 'More Templates', href: '#' },
    ],
    'Policies': [
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-oceanic text-white pt-16 pb-8 relative">
      {/* ✅ BACK TO TOP BUTTON - USING CHEVRON-UP */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forsythia text-oceanic w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-xl"
        aria-label="Back to top"
      >
        <img src="/assets/svgs/chevron-up-solid.svg" alt="" className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-forsythia rounded-lg flex items-center justify-center">
                <span className="text-oceanic font-heading font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-heading font-bold">armory</span>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Building the future of AI automation, one neural ecosystem at a time.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-forsythia transition-colors duration-150 font-body text-sm flex items-center gap-2 group"
                    >
                      {/* ✅ USING CHEVRON-RIGHT */}
                      <img 
                        src="/assets/svgs/chevron-right.svg" 
                        alt="" 
                        className="w-0 group-hover:w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 font-body text-sm">
            © {currentYear} Armory AI. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-forsythia flex items-center justify-center transition-all duration-200 hover:scale-110 text-white hover:text-oceanic">
              <span className="text-sm font-bold">𝕏</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-forsythia flex items-center justify-center transition-all duration-200 hover:scale-110 text-white hover:text-oceanic">
              <span className="text-sm font-bold">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}