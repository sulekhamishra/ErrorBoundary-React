import React, { useState } from "react";

function CountWithoutErrorBoundary() {
  const [count, setCount] = useState(0);
  if (count < 0) {
    throw new Error("Count is less than 0. Error Occurred.");
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CountWithoutErrorBoundary;
