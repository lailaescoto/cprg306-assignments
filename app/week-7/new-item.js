"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [item, setItem] = useState({ name: "", category: "Produce", quantity: 1 });

    const handleNameChange = (event) => {
        setItem({ ...item, name: event.target.value });
    };

    const handleCategoryChange = (event) => {
        setItem({ ...item, category: event.target.value });
    };

    const handleQuantityChange = (amount) => {
        setItem({ ...item, quantity: Math.max(1, item.quantity + amount) });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { ...item, id: Math.floor(Math.random() * 10000) };
        onAddItem(newItem);
        setItem({ name: "", category: "Produce", quantity: 1 });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg p-6 bg-gray-600 rounded-lg">
        <div className="flex flex-col space-y-4">
        
        <label htmlFor="name" className="text-lg font-bold mx-auto">Name </label>
        <input type="text" id="name" value={item.name} required onChange={handleNameChange}  className="mx-auto p-2 rounded text-gray-800" />
        
        <label htmlFor="quantity" className="text-lg font-bold mx-auto">Quantity </label>
        <div className="flex justify-center items-center max-w-sm bg-white mx-auto space-x-4 p-4 rounded-lg">
            <div className="text-black text-lg font-semibold mx-auto">{item.quantity}</div>
            <button onClick={(event) => { event.preventDefault(); handleQuantityChange(-1); }} disabled={item.quantity === 1} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> - </button>
            <button onClick={(event) => { event.preventDefault(); handleQuantityChange(1); }} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> + </button>
        </div>
        
        <label htmlFor="category" className="text-lg font-bold mx-auto">Category </label>
        <select id="category" value={item.category} onChange={handleCategoryChange} className="p-2 rounded text-gray-800">
            <option value="Produce">Produce</option>
            <option value="Dairy"> Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
        </select>

        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block">Add Item</button>
        </form>
    );
}
