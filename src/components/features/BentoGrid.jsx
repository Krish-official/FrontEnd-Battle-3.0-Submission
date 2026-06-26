import { useContextPreservation } from '../../hooks/useContextPreservation';
import { FeatureItem } from './FeatureItem';

const FEATURES = [
  {
    id: 1,
    title: 'Prime Logic',
    description: 'We prioritize high-fidelity model alignment to ensure your agents deliver consistent results.',
    icon: 'cube-16-solid',
  },
  {
    id: 2,
    title: 'Total Clarity',
    description: 'Gain full observability into how your data is processed, indexed, and retrieved by your AI.',
    icon: 'eye',
  },
  {
    id: 3,
    title: 'Fast Cycles',
    description: 'Transition from prototype to production in weeks, not months, with our pre-built frameworks.',
    icon: 'arrow-path', // ✅ USING ARROW-PATH
  },
  {
    id: 4,
    title: 'Neural Architecture',
    description: 'We don\'t just ship code, we architect neural ecosystems with rigorous testing.',
    icon: 'link-solid',
  },
];

export function BentoGrid() {
  const { activeIndex, setActiveIndex, isMobile } = useContextPreservation(768);

  return (
    <section className="features-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            {/* ✅ USING COG ICON */}
            <img src="/assets/svgs/cog-8-tooth.svg" alt="" className="w-5 h-5 text-nocturnal" />
            <span className="text-sm font-heading font-medium text-nocturnal uppercase tracking-wider">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-oceanic mb-4">
            Why Choose Armory
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            We don't just ship code, we architect neural ecosystems. Our approach combines rigorous testing with rapid deployment cycles.
          </p>
        </div>

        {/* Desktop: Bento Grid */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 gap-6 feature-container">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`bento-card p-8 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  activeIndex === index
                    ? 'border-forsythia bg-mystic shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-nocturnal hover:shadow-lg'
                }`}
              >
                <FeatureItem feature={feature} isActive={activeIndex === index} />
              </div>
            ))}
          </div>
        )}

        {/* Mobile: Accordion */}
        {isMobile && (
          <div className="space-y-4 feature-container">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="accordion-item border-2 border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-mystic transition-colors duration-150"
                >
                  <span className="font-heading font-bold text-oceanic text-left">
                    {feature.title}
                  </span>
                  {/* ✅ USING CHEVRON */}
                  <img 
                    src="/assets/svgs/chevron-down-solid.svg" 
                    alt="" 
                    className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`accordion-panel bg-arctic ${activeIndex === index ? 'open' : ''}`}
                  style={{
                    maxHeight: activeIndex === index ? '300px' : '0',
                    padding: activeIndex === index ? '1.5rem' : '0 1.5rem',
                    transition: 'all 350ms ease-in-out',
                  }}
                >
                  <FeatureItem feature={feature} isActive={true} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}