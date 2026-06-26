import { useState } from 'react';

const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];

export function CurrencySwitcher({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = CURRENCIES.find(c => c.code === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 font-body"
      >
        <span className="font-medium">{selected.symbol} {selected.code}</span>
        {/* ✅ USING CHEVRON-DOWN */}
        <img 
          src="/assets/svgs/chevron-down.svg" 
          alt="" 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl py-2 min-w-[180px] z-50">
          {CURRENCIES.map(currency => (
            <button
              key={currency.code}
              onClick={() => {
                onChange(currency.code);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-forsythia hover:text-oceanic transition-all duration-150 font-body currency-option flex items-center justify-between"
            >
              <span>{currency.symbol} {currency.name}</span>
              {value === currency.code && (
                <span className="text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}