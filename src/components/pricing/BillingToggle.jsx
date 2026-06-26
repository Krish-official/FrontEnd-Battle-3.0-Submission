export function BillingToggle({ value, onChange }) {
  return (
    <div
      className="inline-flex items-center rounded-full p-1 shadow-md"
      style={{ backgroundColor: '#FFFFFF' }}
      role="group"
      aria-label="Billing cycle"
    >
      <button
        onClick={() => onChange('monthly')}
        className="px-4 sm:px-6 py-2 rounded-full font-body font-medium text-sm sm:text-base transition-all duration-200"
        style={
          value === 'monthly'
            ? { backgroundColor: '#114C5A', color: '#FFFFFF' }
            : { color: '#6B7280' }
        }
        aria-pressed={value === 'monthly'}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange('annual')}
        className="px-4 sm:px-6 py-2 rounded-full font-body font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-1 sm:gap-2"
        style={
          value === 'annual'
            ? { backgroundColor: '#114C5A', color: '#FFFFFF' }
            : { color: '#6B7280' }
        }
        aria-pressed={value === 'annual'}
      >
        Annual
        <span
          className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-heading font-bold"
          style={{ backgroundColor: '#FFC801', color: '#172B36' }}
        >
          -20%
        </span>
      </button>
    </div>
  );
}