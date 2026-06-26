import { PRICING_MATRIX, CURRENCY_SYMBOLS } from '../constants/pricingMatrix';

export function calculatePrice(tier, currency, billingCycle) {
  const basePrice = PRICING_MATRIX.baseRates[tier];
  const currencyMultiplier = PRICING_MATRIX.currencyMultipliers[currency];
  const regionalTariff = PRICING_MATRIX.regionalTariffs[currency];
  
  let finalPrice = basePrice * currencyMultiplier * regionalTariff;
  
  // Apply annual discount
  if (billingCycle === 'annual') {
    finalPrice = finalPrice * (1 - PRICING_MATRIX.annualDiscount);
  }
  
  return {
    value: Math.round(finalPrice),
    symbol: CURRENCY_SYMBOLS[currency],
    formatted: `${CURRENCY_SYMBOLS[currency]}${Math.round(finalPrice)}`,
  };
}