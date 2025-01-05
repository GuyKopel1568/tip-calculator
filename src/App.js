import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );

  function TipCalculator() {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState(0);

    return (
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage>How did you like the service?</SelectPercentage>
        <SelectPercentage>
          How did your freind like the service?
        </SelectPercentage>
        <Output bill={bill} />
        <ResetButton />
      </div>
    );
  }

  function BillInput({ bill, onSetBill }) {
    return (
      <div style={{ display: "flex" }}>
        <p style={{ margin: "10px" }}>How much was the bill?</p>
        <input
          type="text"
          placeholder="Enter number"
          value={bill}
          onChange={e => onSetBill(Number(e.target.value))}
        />
      </div>
    );
  }

  function SelectPercentage({ children }) {
    return (
      <div style={{ display: "flex" }}>
        <p style={{ margin: "10px" }}>
          {children}
        </p>
        <select>
          <option value="0">Dissatisfied 0%</option>
          <option value="10">It was okay 10%</option>
          <option value="15"> It was very good 15%</option>
          <option value="20">Absolutly Amazing! 20%</option>
        </select>
      </div>
    );
  }

  function Output({ bill }) {
    return (
      <div>
        <h3>`You pay X$ ({bill}$ +$b tip)`</h3>;
      </div>
    );
  }

  function ResetButton() {
    return <button>Reset</button>;
  }
}
