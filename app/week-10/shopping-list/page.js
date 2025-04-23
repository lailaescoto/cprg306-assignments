"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    try {
      if (user?.uid) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    } catch (error) {
      console.error("Error loading shopping list items:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  const handleAddItem = async (newItem) => {
    try {
      if (user?.uid) {
        const docId = await addItem(user.uid, newItem);
        const itemWithId = { id: docId, ...newItem };
        setItems((prevItems) => [...prevItems, itemWithId]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );

    setSelectedItemName(cleanedName);
  };


  if (!user) {
    return (
      <div>
        <h1>Week 9</h1>
        <p>Go Away!</p>
      </div>
    );
  }

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
