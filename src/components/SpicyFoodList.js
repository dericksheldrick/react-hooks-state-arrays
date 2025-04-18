import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // Any time we need to update an object or array in state, 
    // we need to make a new object and call setState with the new object.

    const newFoodArray = [...foods, newFood];

    setFoods(newFoodArray)

    console.log(newFood);

  }
  // have added handleClick function that remove the list of food when it is clicked on

  function handleClick(id){
    const newFoodArray = foods.filter((food) =>
    food.id !== id);
    setFoods(newFoodArray);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
