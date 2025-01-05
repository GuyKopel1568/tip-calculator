import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );

  function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * (percentage1 + percentage2) / 2 / 100;

    function handleReset() {
      setBill("");
      setPercentage1(0);
      setPercentage2(0);
    }

    return (
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your freind like the service?
        </SelectPercentage>
        <Output bill={bill} tip={tip} />
        <ResetButton onReset={handleReset} />
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

  function SelectPercentage({ children, percentage, onSelect }) {
    return (
      <div style={{ display: "flex" }}>
        <p style={{ margin: "10px" }}>
          {children}
        </p>
        <select
          value={percentage}
          onChange={e => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied 0%</option>
          <option value="10">It was okay 10%</option>
          <option value="15"> It was very good 15%</option>
          <option value="20">Absolutly Amazing! 20%</option>
        </select>
      </div>
    );
  }

  function Output({ bill, tip }) {
    return (
      <div>
        <h3>
          You pay {bill + tip}$ ({bill}$ +{tip}$ tip)
        </h3>
      </div>
    );
  }

  function ResetButton({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
}
