const CASE_STUDIES = [
  {
    id: 1,
    company: 'Cigna Smart Health Systems',
    year: '2026',
    description:
      'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    logo: 'cigna',
    metric: '85% faster diagnostics',
  },
  {
    id: 2,
    company: 'Aetna Health Data Ecosystem',
    year: '2026',
    description:
      'We automated Aetna\'s member data management using secure AI to provide personalized care and clinical insights.',
    logo: 'aetna',
    metric: '2.3M members served',
  },
  {
    id: 3,
    company: 'Anthem Neural Care Network',
    year: '2026',
    description:
      'We deployed a custom LLM to automate Anthem\'s provider relations, reducing ticket lifecycles by eighty-five percent.',
    logo: 'anthem',
    metric: '85% ticket reduction',
  },
];

export function CaseStudies() {
  return (
    <section className="case-studies-section py-20 bg-gradient-to-b from-arctic to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-nocturnal" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="text-sm font-heading font-medium text-nocturnal uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-oceanic mb-4">
            Proven Neural Solutions
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <article
              key={study.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-forsythia cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Year Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-body text-gray-400">
                  //{study.year}
                </span>
                <div className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-forsythia opacity-75 group-hover:opacity-100"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia"></span>
                </div>
              </div>

              {/* Company Name */}
              <h3 className="text-2xl font-heading font-bold text-oceanic mb-4 group-hover:text-nocturnal transition-colors">
                {study.company}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Metric */}
              <div className="pt-4 border-t border-gray-200">
                <span className="text-3xl font-heading font-bold text-forsythia">
                  {study.metric}
                </span>
              </div>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-nocturnal group-hover:gap-4 transition-all duration-200">
                <span className="font-body font-medium text-sm">Read case study</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}