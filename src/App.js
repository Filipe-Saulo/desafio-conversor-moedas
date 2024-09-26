// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);
  const [moedaInserida, setMoedaInserida] = useState("EUR");
  const [moedaConvertida, setMoedaConvertida] = useState("CAD");
  const [result, setResult] = useState(null);

  useEffect(
    function () {
      async function fetchMoedas() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${value}&from=${moedaInserida}&to=${moedaConvertida}`
          );
          //pegando o json da api
          const data = await res.json();

          if (data.rates.CAD) setResult(data.rates.CAD);
          if (data.rates.USD) setResult(data.rates.USD);
          if (data.rates.EUR) setResult(data.rates.EUR);
          if (data.rates.INR) setResult(data.rates.INR);
        } catch (err) {
          // console.log(err);
        }
      }

      fetchMoedas();
    },
    [value]
  );

  return (
    <div>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <select
        value={moedaInserida}
        onChange={(e) => setMoedaInserida(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={moedaConvertida}
        onChange={(e) => setMoedaConvertida(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result}</p>
    </div>
  );
}
