import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'USD',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) {
  const id = useId();
  return (
    <div className={`bg-white/90 p-4 rounded-xl shadow-inner text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className='text-black/50 mb-2 inline-block font-medium'>{label}</label>
        <input
          id={id}
          type="number"
          className='outline-none w-full bg-transparent py-1.5 text-black text-base font-medium placeholder:text-black/30 focus:ring-2 focus:ring-blue-400 focus:outline-none'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/50 mb-2 w-full font-medium'>Currency Type</p>
        <select
          className='rounded-md px-2 py-1 outline-none bg-white shadow-sm cursor-pointer text-base font-semibold focus:ring-2 focus:ring-blue-400 focus:outline-none'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
