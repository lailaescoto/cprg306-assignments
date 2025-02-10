"use client";

import { useState } from "react";

export default function Quantity() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    return (
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-w-lg bg-white space-x-4 p-4 rounded-lg">
            <div className="text-black text-lg font-semibold">{quantity}</div>
            <button onClick={decrement} disabled={quantity === 1} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> - </button>
            <button onClick={increment} disabled={quantity === 20} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> + </button>
        </div>
        </div>
    );
}