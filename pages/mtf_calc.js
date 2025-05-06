import { useState } from "react";

export default function MTFCalculator() {
  const [stockPrice, setStockPrice] = useState(1000);
  const [quantity, setQuantity] = useState(100);
  const [marginPercent, setMarginPercent] = useState(25);
  const [days, setDays] = useState(5);
  const [result, setResult] = useState(null);

  const calculateMTF = () => {
    const investment = stockPrice * quantity;
    const yourMargin = investment * (marginPercent / 100);
    const fundedAmount = investment - yourMargin;
    const interestRate = 0.0004; // 0.04% per day
    const totalInterest = fundedAmount * interestRate * days;
    const breakeven = stockPrice + totalInterest / quantity;

    setResult({
      investment,
      yourMargin,
      fundedAmount,
      totalInterest,
      breakeven,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-xl space-y-4">
      <h2 className="text-xl font-bold">Zerodha MTF Calculator</h2>
      <div className="space-y-2">
        <label className="block">
          Stock Price
          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Quantity
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Margin Requirement (%)
          <input
            type="number"
            value={marginPercent}
            onChange={(e) => setMarginPercent(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Holding Days
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>
        <button
          onClick={calculateMTF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="bg-gray-100 p-4 rounded-lg space-y-1">
          <p><strong>Total Investment:</strong> ₹{result.investment.toFixed(2)}</p>
          <p><strong>Your Margin:</strong> ₹{result.yourMargin.toFixed(2)}</p>
          <p><strong>Zerodha Funded:</strong> ₹{result.fundedAmount.toFixed(2)}</p>
          <p><strong>Interest (₹):</strong> ₹{result.totalInterest.toFixed(2)}</p>
          <p><strong>Breakeven Price:</strong> ₹{result.breakeven.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
