"use client";
import { useState, useEffect } from "react";

const Counter = ({ initialValue, maxValue, label, isLast }) => {
  const [counter, setCounter] = useState(0);

  //   const [counter, setCounter] = useState(initialValue);
  const duration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const targetValue = Math.floor(
        initialValue + progress * (maxValue - initialValue)
      );

      setCounter(targetValue);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {
      setCounter(maxValue); // Ensure the final value is accurate
    };
  }, [initialValue, maxValue, duration]);

  const borderStyles = isLast ? "" : "md:border-r md:pr-40 border-[#595959]";

  return (
    <div className={`mx-auto bg-[#000000] w-full`}>
      <h3 className="text-[#A7A5A5] text-center">{label}</h3>
      <p className="text-[40px]  text-center font-bold">
        {counter.toLocaleString()}
      </p>
    </div>
  );
};
const CounterReal = () => {
  return (
    <div className="text-left grid gap-[1px] sm:grid-cols-1 lg:bg-gray-300 md:grid-cols-2 lg:grid-cols-3 my-20 space-y-5 md:space-y-0 justify-around mx-auto">
      <Counter initialValue={0} maxValue={231390} label="Tokens Burned" />
      <Counter initialValue={0} maxValue={16900} label="Total holders" />
      <Counter
        initialValue={0}
        maxValue={1500000}
        label="Tokens minted"
        isLast
      />
    </div>
  );
};
export default CounterReal;
