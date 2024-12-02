"use client"
import Link from "next/link";
import { useState } from "react";

export default function LevelMid() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
    };
    
    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    const handleReset = () => {
        const newCount = 0;
        setCount(newCount);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-4xl font-bold mb-6">Level 2: Hooks & State</h1>
        <div
            className={`text-6xl font-bold ${
            count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-100"
            }`}
        >
            {count}
        </div>
        <div className="flex gap-4 mt-6">
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleIncrement}
            >
            Increment
            </button>
            <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={handleDecrement}
            >
            Decrement
            </button>
            <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleReset}
            >
            Reset
            </button>
        </div>

        
        <div className="bg-white rounded-3xl text-black py-2 px-4 mt-2">
            <Link href='/'>Back to Home</Link>
        </div>
    </div>
  );
};
