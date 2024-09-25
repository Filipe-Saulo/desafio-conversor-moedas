// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  useEffect(function () {
    async function fetchMoedas() {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoedas();
  }, []);

  return (
    <div>
      <input type="text" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
