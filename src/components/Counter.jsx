import { useState } from "react";

export function Counter() {
  // Aqui estou desestruturando com []
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={Increment}>
        incrementar +2
      </button>
    </div>
  );
}
