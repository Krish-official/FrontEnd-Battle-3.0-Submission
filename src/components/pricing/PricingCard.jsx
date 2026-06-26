import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { calculatePrice } from '../../utils/pricingCalculator';

const FEATURES = {
  Starter: [
    'Up to 5 AI agents',
    '10,000 monthly requests',
    'Basic analytics dashboard',
    'Email support',
    'API access',
  ],
  Professional: [
    'Up to 25 AI agents',
    '100,000 monthly requests',
    'Advanced analytics',
    'Priority support',
    'Custom integrations',
    'Team collaboration',
  ],
  Enterprise: [
    'Unlimited AI agents',
    'Unlimited requests',
    'Full observability suite',
    '24/7 dedicated support',
    'White-label options',
    'SLA guarantees',
    'Custom LLM deployment',
  ],
};

export const PricingCard = forwardRef(
  ({ tier, currency, billingCycle, isFeatured }, ref) => {
    const priceValueRef = useRef(null);
    const priceSymbolRef = useRef(null);

    useImperativeHandle(ref, () => ({
      updatePrice: (newCurrency, newCycle) => {
        const { value, symbol } = calculatePrice(tier, newCurrency, newCycle);
        // ✅ DIRECT DOM - ZERO RE-RENDER
        if (priceValueRef.current) priceValueRef.current.textContent = value;
        if (priceSymbolRef.current) priceSymbolRef.current.textContent = symbol;
      },
    }));

    useEffect(() => {
      const { value, symbol } = calculatePrice(tier, currency, billingCycle);
      if (priceValueRef.current) priceValueRef.current.textContent = value;
      if (priceSymbolRef.current) priceSymbolRef.current.textContent = symbol;
    }, []);

    return (
      <article
        className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 ${
          isFeatured
            ? 'shadow-2xl scale-100 md:scale-105'
            : 'shadow-lg hover:shadow-xl bg-white'
        }`}
        style={
          isFeatured
            ? { background: 'linear-gradient(135deg, #114C5A, #172B36)', color: 'white' }
            : { backgroundColor: '#FFFFFF' }
        }
      >
        {/* Featured badge */}
        {isFeatured && (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-heading font-bold"
            style={{ backgroundColor: '#FFC801', color: '#172B36' }}
          >
            MOST POPULAR
          </div>
        )}

        {/* Tier name */}
        <header className="mb-6">
          <h3
            className="text-xl sm:text-2xl font-heading font-bold mb-1"
            style={{ color: isFeatured ? '#FFC801' : '#114C5A' }}
          >
            {tier}
          </h3>
          <p
            className="text-sm font-body"
            style={{ color: isFeatured ? 'rgba(255,255,255,0.7)' : '#6B7280' }}
          >
            {tier === 'Starter' && 'Perfect for individuals'}
            {tier === 'Professional' && 'Best for growing teams'}
            {tier === 'Enterprise' && 'For large organizations'}
          </p>
        </header>

        {/* Price display */}
        <div className="flex items-baseline gap-1 mb-6">
          <span
            ref={priceSymbolRef}
            className="text-2xl sm:text-3xl font-heading font-bold"
            style={{ color: isFeatured ? '#FFC801' : '#114C5A' }}
          >
            $
          </span>
          <span
            ref={priceValueRef}
            className="text-5xl sm:text-6xl font-heading font-bold"
            style={{
              color: isFeatured ? '#FFFFFF' : '#172B36',
              contain: 'layout style',
            }}
          >
            0
          </span>
          <span
            className="text-sm font-body ml-1"
            style={{ color: isFeatured ? 'rgba(255,255,255,0.6)' : '#9CA3AF' }}
          >
            /mo
          </span>
        </div>

        {/* Feature list */}
        <ul className="space-y-3 mb-8 flex-1">
          {FEATURES[tier].map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: isFeatured ? '#FFC801' : '#114C5A' }}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className="text-sm font-body"
                style={{ color: isFeatured ? 'rgba(255,255,255,0.85)' : '#374151' }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="w-full py-3 px-6 rounded-lg font-heading font-bold text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:scale-105"
          style={
            isFeatured
              ? { backgroundColor: '#FFC801', color: '#172B36' }
              : { backgroundColor: '#114C5A', color: '#FFFFFF' }
          }
        >
          Get Started
        </button>
      </article>
    );
  }
);

PricingCard.displayName = 'PricingCard';