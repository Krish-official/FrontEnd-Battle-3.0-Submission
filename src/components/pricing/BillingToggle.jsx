export function BillingToggle({ value, onChange }) {
  return (
    <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
      <button
        onClick={() => onChange('monthly')}
        className={`px-6 py-2 rounded-full font-body font-medium transition-all duration-180 ${
          value === 'monthly'
            ? 'bg-nocturnal text-white'
            : 'text-gray-600 hover:text-oceanic'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange('annual')}
        className={`px-6 py-2 rounded-full font-body font-medium transition-all duration-180 ${
          value === 'annual'
            ? 'bg-nocturnal text-white'
            : 'text-gray-600 hover:text-oceanic'
        }`}
      >
        Annual
        <span className="ml-2 text-xs bg-forsythia text-oceanic px-2 py-1 rounded-full">
          Save 20%
        </span>
      </button>
    </div>
  );
}