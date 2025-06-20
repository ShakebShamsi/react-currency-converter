import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from "./components/index.js";
import bgImage from '/img/background.png';


function App() {
   const [amount, setAmount] = useState("");
   const [from, setFrom] = useState('usd');
   const [to, setTo] = useState('inr');
   const [convertedAmount, setConvertedAmount] = useState("");

   const currencyInfo = useCurrencyInfo(from);
   const options = Object.keys(currencyInfo);

   const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
   };

   const convert = () => {
      if (!currencyInfo[to]) {
         alert("Conversion rate not available!");
         return;
      }
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
   };

   return (
      <div
         className="bg-cover bg-no-repeat min-h-screen flex items-center justify-center px-4 font-poppins bg-center bg-fixed"
         style={{
            backgroundImage: `url(${bgImage})`,
         }}
      >
         <div className='w-full max-w-md mx-auto bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/40'>
            <div className='text-center mb-7'>
               <span class="bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent text-4xl font-semibold bg-[length:200%_200%] animate-pulse">
                  Convert currency
               </span>
               <span className='line-clamp-1 text-2xl'> On the go!</span></div>
            <form onSubmit={(e) => {
               e.preventDefault();
               convert();
            }}>
               <div className='w-full mb-4'>
                  <InputBox
                     label="From"
                     amount={amount}
                     currencyOptions={options}
                     onCurrencyChange={(currency) => setFrom(currency)}
                     onAmountChange={(amount) => setAmount(amount)}
                     selectedCurrency={from}
                  />
               </div>

               <div className='relative w-full h-12 mb-4'>
                  <button
                     onClick={swap}
                     type='button'
                     className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full shadow-md transition-transform'
                  >
                     ⥮ Swap
                  </button>
               </div>

               <div className='w-full mb-4'>
                  <InputBox
                     label="To"
                     amount={convertedAmount}
                     currencyOptions={options}
                     amountDisabled={true}
                     onCurrencyChange={(currency) => setTo(currency)}
                     selectedCurrency={to}
                  />
               </div>

               <button
                  type='submit'
                  className='w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-50'
                  disabled={!currencyInfo[to]}
               >
                  Convert {from.toUpperCase()} → {to.toUpperCase()}
               </button>
            </form>
            <div className='mt-6 text-center text-sm text-gray-500'>               
            <span>made with ❤️  by
                  <a
                     href="https:shakeb.onrender.com"
                     className='text-blue-500 hover:underline font-semibold ml-1'>
            Shakeb Shamsi
            </a>
         </span>
            </div>
         </div>

         
      </div>
   );
}

export default App;
