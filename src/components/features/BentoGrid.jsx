import { useContextPreservation } from '../../hooks/useContextPreservation';
import { FeatureItem } from './FeatureItem';

const FEATURES = [
  {
    id: 1,
    title: 'Prime Logic',
    description:
      'We prioritize high-fidelity model alignment to ensure your agents deliver consistent results.',
    icon: 'cube-16-solid',
  },
  {
    id: 2,
    title: 'Total Clarity',
    description:
      'Gain full observability into how your data is processed, indexed, and retrieved by your AI.',
    icon: 'eye',
  },
  {
    id: 3,
    title: 'Fast Cycles',
    description:
      'Transition from prototype to production in weeks, not months, with our pre-built frameworks.',
    icon: 'arrow-path',
  },
  {
    id: 4,
    title: 'Neural Architecture',
    description:
      "We don't just ship code, we architect neural ecosystems with rigorous testing and rapid deployment.",
    icon: 'link-solid',
  },
];

export function BentoGrid() {
  const { activeIndex, setActiveIndex, isMobile } = useContextPreservation(768);

  return (
    <section
      id="features"
      className="py-16 sm:py-20 bg-white"
      aria-label="Platform Features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <img
              src="/assets/svgs/cog-8-tooth.svg"
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
            <span
              className="text-xs sm:text-sm font-heading font-medium uppercase tracking-wider"
              style={{ color: '#114C5A' }}
            >
              Features
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            style={{ color: '#172B36' }}
          >
            Why Choose Armory
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-body max-w-2xl mx-auto px-2">
            We don't just ship code, we architect neural ecosystems. Combining
            rigorous testing with rapid deployment cycles.
          </p>
        </div>

        {/* ✅ DESKTOP: Bento Grid */}
        {!isMobile && (
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="rounded-2xl p-8 border-2 cursor-pointer transition-all duration-200"
                style={{
                  borderColor: activeIndex === index ? '#FFC801' : '#E5E7EB',
                  backgroundColor: activeIndex === index ? '#D9E8E2' : '#FFFFFF',
                  transform: activeIndex === index ? 'scale(1.02)' : 'scale(1)',
                  boxShadow:
                    activeIndex === index
                      ? '0 20px 40px rgba(17,76,90,0.15)'
                      : '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <FeatureItem
                  feature={feature}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        )}

        {/* ✅ MOBILE: Accordion */}
        {isMobile && (
          <div className="space-y-3 max-w-2xl mx-auto">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="border-2 rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  borderColor: activeIndex === index ? '#FFC801' : '#E5E7EB',
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full px-5 py-4 flex justify-between items-center text-left transition-colors duration-150"
                  style={{
                    backgroundColor:
                      activeIndex === index ? '#D9E8E2' : '#FFFFFF',
                  }}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`/assets/svgs/${feature.icon}.svg`}
                      alt=""
                      aria-hidden="true"
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span
                      className="font-heading font-bold text-base"
                      style={{ color: '#172B36' }}
                    >
                      {feature.title}
                    </span>
                  </div>
                  {/* ✅ USING CHEVRON SVG */}
                  <img
                    src="/assets/svgs/chevron-down.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                    style={{
                      transform:
                        activeIndex === index
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                    }}
                  />
                </button>

                {/* Accordion Body */}
                <div
                  style={{
                    maxHeight: activeIndex === index ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 350ms ease-in-out',
                  }}
                >
                  <div
                    className="px-5 py-4"
                    style={{ backgroundColor: '#F1F6F4' }}
                  >
                    <p className="text-gray-600 font-body leading-relaxed text-sm">
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-heading font-medium transition-colors duration-150"
                      style={{ color: '#114C5A' }}
                    >
                      Learn more
                      <img
                        src="/assets/svgs/chevron-right.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}