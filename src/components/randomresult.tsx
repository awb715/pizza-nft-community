import { useRandomizer } from '@/lib/hooks/randomcall';
import React, { useState } from 'react';
import { projectInfo, pizzaPlaces } from '@/data/project-summary';

function RandomPizzaPlaceComponent() {
  const { data, isLoading, error } = useRandomizer();

  const handleButtonClick = () => {
    // Check if data has been fetched successfully
    if (!data) {
      return; // Prevent action if data not available
    }

    const randomIndex = data % Object.keys(pizzaPlaces).length; // Ensure index stays within dictionary range
    const chosenRestaurant = pizzaPlaces[randomIndex + 1]; // Adjust for 1-based indexing

    // Optional: Perform further actions with the selected restaurant (e.g., display on screen)
    console.log("Let's eat at", chosenRestaurant);
  };

  return (
    <div>
      {isLoading ? (
        <p>Choosing a pizza place for you...</p>
      ) : error ? (
        <p>Error fetching randomness: {error.message}</p>
      ) : (
        <button onClick={handleButtonClick}>Let's eat!</button>
      )}
    </div>
  );
}

export{RandomPizzaPlaceComponent};