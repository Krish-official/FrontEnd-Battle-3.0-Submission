import { useRef, useCallback } from 'react';
import { calculatePrice } from '../utils/pricingCalculator';

export function useCurrencyPrice(tier) {
  const priceRef = useRef(null);
  
  const updatePrice = useCallback((currency, billingCycle) => {
    if (!priceRef.current) return;
    
    const { formatted } = calculatePrice(tier, currency, billingCycle);
    
    // Direct DOM manipulation - NO REACT RE-RENDER
    priceRef.current.textContent = formatted;
  }, [tier]);
  
  return { priceRef, updatePrice };
}