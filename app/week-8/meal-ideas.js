"use client";

import { useState, useEffect  } from "react";

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
      if (!ingredient) return;

      try {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
    }
};
    
      useEffect(() => {
        loadMealIdeas();
      }, [ingredient]);

      return (
        <section className="p-4  rounded">
            <h2 className="text-xl font-bold mb-2">Meal Ideas for "{ingredient}"</h2>
            {meals.length === 0 ? (
                <p>No meal ideas found.</p>
            ) : (
                <ul className="list-disc pl-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="mb-2 flex items-center">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded mr-2" />
                            <span>{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    console.log(data);
    return data.meals || [];
}