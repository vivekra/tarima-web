import { useState } from "react";

export default function SwingCalculator() {
  const [capital, setCapital] = useState("");
  const [entry, setEntry] = useState("");
  const [stoploss, setStoploss] = useState("");
  const [risk, setRisk] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const cap = parseFloat(capital);
    const ent = parseFloat(entry);
    const sl = parseFloat(stoploss);
    const riskPercent = parseFloat(risk);

    if (isNaN(cap) || isNaN(ent) || isNaN(sl) || isNaN(riskPercent) || ent <= sl) {
      setResult("Please enter valid numbers. Entry should be greater than Stop Loss.");
      return;
    }

    const riskAmount = cap * (riskPercent / 100);
    const perShareRisk = ent - sl;
    const quantity = Math.floor(riskAmount / perShareRisk);
    const totalInvestment = quantity * ent;

    setResult({
      quantity,
      totalInvestment: totalInvestment.toFixed(2),
      riskAmount: riskAmount.toFixed(2),
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Swing Position Size Calculator</h2>
      <div className="space-y-2">
        <input
          type="number"
          placeholder="Capital (₹)"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Entry Price (₹)"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Stop Loss Price (₹)"
          value={stoploss}
          onChange={(e) => setStoploss(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Risk %"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={calculate}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          {typeof result === "string" ? (
            <p className="text-red-600">{result}</p>
          ) : (
            <>
              <p><strong>Buy Quantity:</strong> {result.quantity}</p>
              <p><strong>Total Investment:</strong> ₹{result.totalInvestment}</p>
              <p><strong>Risk Amount:</strong> ₹{result.riskAmount}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
