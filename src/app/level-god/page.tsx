"use client";
import { useState } from "react";
import { useIncrement } from "../hooks/useIncrement";
import { useDecrement } from "../hooks/useDecrement";
import { useReset } from "../hooks/useReset";
import Link from "next/link";

export default function LevelGod() {
  const [count, setCount] = useState(0);

  const { increment, loading: incrementLoading, error: incrementError } = useIncrement();
  const { decrement, loading: decrementLoading, error: decrementError } = useDecrement();
  const { reset } = useReset();

  const handleIncrement = async () => {
    const result = await increment(count);
    if (result !== undefined) setCount(result);
  };

  const handleDecrement = async () => {
    const result = await decrement(count);
    if (result !== undefined) setCount(result);
  };

  const handleReset = () => {
    setCount(reset());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold mb-6">Level 3: Server Actions</h1>
      <div
        className={`text-6xl font-bold ${
          count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-100"
        }`}
      >
        {count}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleIncrement}
          disabled={incrementLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {incrementLoading ? "Loading..." : "Increment"}
        </button>
        <button
          onClick={handleDecrement}
          disabled={decrementLoading}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
        >
          {decrementLoading ? "Loading..." : "Decrement"}
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
      {(incrementError || decrementError) && (
        <div className="text-red-500 mt-4">
          {incrementError || decrementError}
        </div>
      )}
      <div className="bg-white rounded-3xl text-black py-2 px-4 mt-2">
        <Link href='/'>Back to Home</Link>
      </div>
    </div>
  );
}
