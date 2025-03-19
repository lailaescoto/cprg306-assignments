"use client";

import { useState } from "react";
import Item from "./item.js";


export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] =   useState("name");

    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });


    return (  
      <main>
        <div className="m-2 p-2 mx-auto">
        <p>Sort By:</p>
        <button onClick={() => setSortBy("name")} className={`m-2 p-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-blue-800 text-white"}`}>Name</button>
        <button onClick={() => setSortBy("category")} className={`m-2 p-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-blue-800 text-white"}`}>Sort by Category</button>
        </div>

        <ul> 
          {sortedItems.map((item) => (
            <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={() => onItemSelect(item)}
        />
          ))}
        </ul>
      </main>
    );
}