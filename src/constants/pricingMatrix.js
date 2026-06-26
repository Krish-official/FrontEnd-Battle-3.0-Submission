// Multi-dimensional pricing configuration
export const PRICING_MATRIX = {
  tiers: ['Starter', 'Professional', 'Enterprise'],
  
  baseRates: {
    // Base monthly prices in USD
    Starter: 29,
    Professional: 99,
    Enterprise: 299,
  },
  
  // Currency conversion multipliers
  currencyMultipliers: {
    USD: 1,
    EUR: 0.92,
    INR: 83.12,
  },
  
  // Annual discount
  annualDiscount: 0.20, // 20% off
  
  // Regional tariff adjustments (optional complexity)
  regionalTariffs: {
    USD: 1.0,
    EUR: 1.05,
    INR: 0.95,
  },
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  INR: '₹',
};