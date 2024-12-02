"use client"
import Link from "next/link";
import { useEffect } from "react";

export default function LevelNoob() {
    useEffect(() => {
        const countDisplay = document.getElementById("count")!;
        let count = 0;

        const increment = () => {
        count += 1;
        countDisplay.textContent = count.toString();
        };

        const decrement = () => {
        count -= 1;
        countDisplay.textContent = count.toString();
        };

        const reset = () => {
        count = 0;
        countDisplay.textContent = count.toString();
        };

        document.getElementById("increment")!.addEventListener("click", increment);
        document.getElementById("decrement")!.addEventListener("click", decrement);
        document.getElementById("reset")!.addEventListener("click", reset);

        return () => {
            document.getElementById("increment")!.removeEventListener("click", increment)
            document.getElementById("decrement")!.removeEventListener("click", decrement);
            document.getElementById("reset")!.removeEventListener("click", reset);
            // document.getElementById("increment")?.removeEventListener("click", increment)
            // document.getElementById("decrement")?.removeEventListener("click", decrement);
            // document.getElementById("reset")?.removeEventListener("click", reset);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <h1 className="text-4xl font-bold mb-6">Level 1: Vanilla JS</h1>
            <div
                id="count"
                className="text-6xl font-bold text-gray-100 mb-6"
            >
                0
            </div>
            <div className="flex gap-4">
                <button
                id="increment"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Increment
                </button>
                <button
                id="decrement"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                Decrement
                </button>
                <button
                id="reset"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
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