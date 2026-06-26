const CASE_STUDIES = [
  {
    id: 1,
    company: 'Cigna Smart Health Systems',
    year: '2026',
    description:
      'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    metric: '85%',
    metricLabel: 'faster diagnostics',
  },
  {
    id: 2,
    company: 'Aetna Health Data Ecosystem',
    year: '2026',
    description:
      "Automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
    metric: '2.3M',
    metricLabel: 'members served',
  },
  {
    id: 3,
    company: 'Anthem Neural Care Network',
    year: '2026',
    description:
      "Deployed a custom LLM to automate Anthem's provider relations, reducing ticket lifecycles by eighty-five percent.",
    metric: '85%',
    metricLabel: 'ticket reduction',
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-16 sm:py-20"
      style={{ background: 'linear-gradient(to bottom, #F1F6F4, #FFFFFF)' }}
      aria-label="Case Studies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <img
              src="/assets/svgs/link-solid.svg"
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
            <span
              className="text-xs sm:text-sm font-heading font-medium uppercase tracking-wider"
              style={{ color: '#114C5A' }}
            >
              Case Studies
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            style={{ color: '#172B36' }}
          >
            Proven Neural Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-body max-w-2xl mx-auto px-2">
            We partner with industry leaders to deploy bespoke AI agents that
            solve complex operational hurdles and drive measurable growth.
          </p>
        </div>

        {/* Cards - SINGLE COLUMN ON MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-body text-gray-400">
                  //{study.year}
                </span>
                <img
                  src="/assets/svgs/arrow-path.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300"
                />
              </div>

              <h3
                className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-nocturnal transition-colors"
                style={{ color: '#172B36' }}
              >
                {study.company}
              </h3>

              <p className="text-gray-600 font-body leading-relaxed mb-6 text-sm sm:text-base">
                {study.description}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <span
                  className="text-2xl sm:text-3xl font-heading font-bold"
                  style={{ color: '#FFC801' }}
                >
                  {study.metric}
                </span>
                <span className="text-gray-500 font-body text-sm ml-2">
                  {study.metricLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}