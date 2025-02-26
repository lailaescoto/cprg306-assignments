"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => {
            setQuantity(quantity + 1);
        
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, category, quantity };
        console.log(item);
        alert(`Name: ${name}, Category: ${category}, Quantity: ${quantity}`);

        setName("");
        setCategory("Produce");
        setQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-600 rounded-lg">
        <div className="flex flex-col space-y-4">
        
        <label htmlFor="name" className="text-lg font-bold mx-auto">Name </label>
        <input type="text" id="name" value={name} required onChange={(event) => setName(event.target.value)}  className="mx-auto p-2 rounded text-gray-800" />
        
        <label htmlFor="quantity" className="text-lg font-bold mx-auto">Quantity </label>
        <div className="flex justify-center items-center max-w-sm bg-white mx-auto space-x-4 p-4 rounded-lg">
            <div className="text-black text-lg font-semibold mx-auto">{quantity}</div>
            <button onClick={(event) => { event.preventDefault(); decrement(); }} disabled={quantity === 1} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> - </button>
            <button onClick={(event) => { event.preventDefault(); increment(); }} className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"> + </button>
        </div>
        
        <label htmlFor="category" className="text-lg font-bold mx-auto">Category </label>
        <select id="category" value={category} onChange={(event) => setCategory(event.target.value)} className="p-2 rounded text-gray-800">
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
