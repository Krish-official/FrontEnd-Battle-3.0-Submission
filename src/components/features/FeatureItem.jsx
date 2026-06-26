export function FeatureItem({ feature, isActive }) {
  return (
    <div className="feature-content">
      <div className="mb-6 flex items-center justify-start">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center transition-all duration-300 ${
          isActive ? 'scale-110 shadow-lg' : ''
        }`}>
          <img 
            src={`/assets/svgs/${feature.icon}.svg`} 
            alt={`${feature.title} icon`}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Fallback to cube if image doesn't load
              e.target.src = '/assets/svgs/cube-16-solid.svg';
            }}
          />
        </div>
      </div>
      
      <h3 className="text-2xl font-heading font-bold text-oceanic mb-3">
        {feature.title}
      </h3>
      
      <p className="text-gray-600 font-body leading-relaxed text-base">
        {feature.description}
      </p>
      
      {isActive && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-nocturnal font-heading font-medium text-sm hover:text-forsythia transition-colors"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}