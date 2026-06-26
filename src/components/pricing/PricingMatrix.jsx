import { useState, useCallback, useRef } from 'react';
import { PricingCard } from './PricingCard';
import { CurrencySwitcher } from './CurrencySwitcher';
import { BillingToggle } from './BillingToggle';

export function PricingMatrix() {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const cardRefs = useRef([]);

  const handleCurrencyChange = useCallback((newCurrency) => {
    setCurrency(newCurrency);
    cardRefs.current.forEach(card => {
      if (card?.updatePrice) {
        card.updatePrice(newCurrency, billingCycle);
      }
    });
  }, [billingCycle]);

  const handleBillingChange = useCallback((newCycle) => {
    setBillingCycle(newCycle);
    cardRefs.current.forEach(card => {
      if (card?.updatePrice) {
        card.updatePrice(currency, newCycle);
      }
    });
  }, [currency]);

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20"
      style={{ backgroundColor: '#F1F6F4' }}
      aria-label="Pricing Plans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <img
              src="/assets/svgs/chart-pie.svg"
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
            <span
              className="text-xs sm:text-sm font-heading font-medium uppercase tracking-wider"
              style={{ color: '#114C5A' }}
            >
              Pricing
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4"
            style={{ color: '#172B36' }}
          >
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-body max-w-xl mx-auto px-2">
            Flexible pricing for teams of all sizes. Switch anytime.
          </p>
        </div>

        {/* Controls - STACK ON MOBILE */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 sm:mb-12">
          <BillingToggle
            value={billingCycle}
            onChange={handleBillingChange}
          />
          <CurrencySwitcher
            value={currency}
            onChange={handleCurrencyChange}
          />
        </div>

        {/* Cards - SINGLE COLUMN ON MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {['Starter', 'Professional', 'Enterprise'].map((tier, index) => (
            <PricingCard
              key={tier}
              tier={tier}
              ref={el => cardRefs.current[index] = el}
              currency={currency}
              billingCycle={billingCycle}
              isFeatured={tier === 'Professional'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}