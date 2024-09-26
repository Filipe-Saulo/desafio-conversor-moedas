// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);
  const [moedaInserida, setMoedaInserida] = useState("EUR");
  const [moedaConvertida, setMoedaConvertida] = useState("CAD");
  const [result, setResult] = useState();

  function handleSetResult({ rates }) {
    console.log(rates.CAD);
    // setMoedaConvertida(moeda);
  }

  useEffect(
    function () {
      async function fetchMoedas() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${value}&from=${moedaInserida}&to=${moedaConvertida}`
          );
          //pegando o json da api
          const data = await res.json();
          handleSetResult(data.rates);
          // console.log(data.rates);
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
      <p>{}</p>
    </div>
  );
}
