"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {      
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0]  
            .trim()
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "");

        setSelectedItemName(cleanedName);
    };

    return (
      <main className="flex flex-col md:flex-row gap-4 p-4">   
        <div className="w-full md:w-1/2">
        <h1 className="font-bold text-4xl m-5">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>        
        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
    </main>
    );
}