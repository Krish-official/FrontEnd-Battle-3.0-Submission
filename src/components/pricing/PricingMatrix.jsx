import { useState, useCallback, useRef } from 'react';
import { PricingCard } from './PricingCard';
import { CurrencySwitcher } from './CurrencySwitcher';
import { BillingToggle } from './BillingToggle';

export function PricingMatrix() {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const cardRefs = useRef([]);

  // Isolated update - no parent re-render
  const handleCurrencyChange = useCallback((newCurrency) => {
    setCurrency(newCurrency);
    
    // Update all cards via refs (DOM manipulation)
    cardRefs.current.forEach(card => {
      if (card && card.updatePrice) {
        card.updatePrice(newCurrency, billingCycle);
      }
    });
  }, [billingCycle]);

  const handleBillingChange = useCallback((newCycle) => {
    setBillingCycle(newCycle);
    
    cardRefs.current.forEach(card => {
      if (card && card.updatePrice) {
        card.updatePrice(currency, newCycle);
      }
    });
  }, [currency]);

  return (
    <section className="pricing-section py-20 bg-arctic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-oceanic mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Flexible pricing for teams of all sizes
          </p>
        </div>

        {/* Controls - isolated from card re-renders */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <BillingToggle 
            value={billingCycle} 
            onChange={handleBillingChange} 
          />
          <CurrencySwitcher 
            value={currency} 
            onChange={handleCurrencyChange} 
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {['Starter', 'Professional', 'Enterprise'].map((tier, index) => (
            <PricingCard
              key={tier}
              tier={tier}
              ref={el => cardRefs.current[index] = el}
              currency={currency}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}