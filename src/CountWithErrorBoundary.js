import React, { useEffect, useState } from "react";

function CountWithErrorBoundary() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 0) {
      throw new Error("Count is less than 0. Error Occurred.");
    }
  }, [count]);
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

export default CountWithErrorBoundary;
