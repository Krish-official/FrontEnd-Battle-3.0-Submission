import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { calculatePrice } from '../../utils/pricingCalculator';

const FEATURES = {
  Starter: [
    'Up to 5 AI agents',
    '10,000 monthly requests',
    'Basic analytics',
    'Email support',
  ],
  Professional: [
    'Up to 25 AI agents',
    '100,000 monthly requests',
    'Advanced analytics',
    'Priority support',
    'Custom integrations',
  ],
  Enterprise: [
    'Unlimited AI agents',
    'Unlimited requests',
    'Full observability',
    '24/7 dedicated support',
    'White-label options',
    'SLA guarantees',
  ],
};

export const PricingCard = forwardRef(({ tier, currency, billingCycle }, ref) => {
  const priceValueRef = useRef(null);
  const priceSymbolRef = useRef(null);

  // Expose update method to parent without re-rendering
  useImperativeHandle(ref, () => ({
    updatePrice: (newCurrency, newCycle) => {
      const { value, symbol } = calculatePrice(tier, newCurrency, newCycle);
      
      // Direct DOM manipulation - ZERO REACT RE-RENDER
      if (priceValueRef.current) {
        priceValueRef.current.textContent = value;
      }
      if (priceSymbolRef.current) {
        priceSymbolRef.current.textContent = symbol;
      }
    },
  }));

  // Initial price calculation
  useEffect(() => {
    const { value, symbol } = calculatePrice(tier, currency, billingCycle);
    if (priceValueRef.current) priceValueRef.current.textContent = value;
    if (priceSymbolRef.current) priceSymbolRef.current.textContent = symbol;
  }, [tier, currency, billingCycle]);

  return (
    <article className="pricing-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 hw-accelerated">
      <header className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-oceanic mb-2">
          {tier}
        </h3>
        <div className="flex items-baseline gap-1">
          <span ref={priceSymbolRef} className="text-3xl font-bold text-nocturnal">
            $
          </span>
          <span ref={priceValueRef} className="text-5xl font-heading font-bold text-nocturnal isolated-update">
            0
          </span>
          <span className="text-gray-500 font-body">
            /{billingCycle === 'monthly' ? 'mo' : 'yr'}
          </span>
        </div>
      </header>

      <ul className="space-y-3 mb-8">
        {FEATURES[tier].map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-forsythia flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-body">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-nocturnal text-white font-heading py-3 px-6 rounded-lg button-hover">
        Get Started
      </button>
    </article>
  );
});

PricingCard.displayName = 'PricingCard';