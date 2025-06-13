import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.13/v1/currencies/${baseCurrency.toLowerCase()}.json`
        );
        const result = await res.json();
        setData(result[baseCurrency.toLowerCase()]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        setData({});
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
