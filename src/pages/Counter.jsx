import React, { useState } from "react";
import Button from "../components/CounterBtn";
import "../assets/css/style.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  return (
    <div className='app'>
      <div>
        <h1>Counter App</h1>
        <div class='count'>
          <h3>Count: </h3>
          <h1>{count}</h1>
        </div>
        <div class='buttons'>
          <Button title={"+"} action={increment} />
          <Button title={"-"} action={decrement} />
        </div>
      </div>
    </div>
  );
}
