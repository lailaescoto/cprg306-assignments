"use client";

import Item from "./item.js";
import ItemData from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] =   useState("name");
    let items = [...ItemData];

    items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });


    return (  
      <main>
        <div className="m-2 p-2">
        <p>Sort By:</p>
        <button onClick={() => setSortBy("name")} className={`m-2 p-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-blue-800 text-white"}`}>Name</button>
        <button onClick={() => setSortBy("category")} className={`m-2 p-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-blue-800 text-white"}`}>Sort by Category</button>
        </div>

        <ul> 
          {items.map((item) => (
            <li key={item.id} className="m-2 p-2 bg-slate-600 max-w-md">
              <div>
                <p>{item.name}</p> 
                <p>Buy {item.quantity} in {item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
}