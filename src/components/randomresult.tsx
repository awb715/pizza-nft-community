import React, { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { RandomnessReceiver_ABI } from '../abi/objects';
import { pizzaPlaces } from '@/data/project-summary';
import { parseEther } from 'viem';
import { projectInfo } from '@/data/project-summary';

import { watchContractEvent } from '@wagmi/core'
//import {config} from '../pages/_app'



function RandomPizzaPlaceComponent() {
  const { writeContract } = useWriteContract();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [randomData, setRandomData] = useState(null);
  const [chosenRestaurant, setChosenRestaurant] = useState(null);

  const getRandomNumber = async () => {
    setIsLoading(true);

    try {
//et your desired gas price (in wei)
      const transaction = await writeContract({
        address: '0x1d709a7c76a8af1ecbd1bbe9388fba366610f311',
        abi: RandomnessReceiver_ABI,
        functionName: 'requestRandomnessTestPreset',
        args: [],
        value: parseEther('.002') // Equivalent to 0.002 ETH
      });
      setRandomData(random);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    // Check if data has been fetched successfully
    if (!randomData) {
      return; // Prevent action if data not available
    }

    const randomIndex = randomData % Object.keys(pizzaPlaces).length; // Ensure index stays within dictionary range
    const selectedRestaurant = pizzaPlaces[randomIndex + 1]; // Adjust for 1-based indexing

    // Set the chosen restaurant in the state
    setChosenRestaurant(selectedRestaurant);

    // Optional: Perform further actions with the selected restaurant (e.g., display on screen)
    console.log("Let's eat at", selectedRestaurant);
  };


  return (
    <div>
      {isLoading ? (
        <p>Choosing a pizza place for you...</p>
      ) : error ? (
        <p>Error fetching randomness: {error.message}</p>
      ) : (
        <>
          <button onClick={getRandomNumber}>Click me to find a new pizza place to eat at!</button>
          <br></br><br></br>
          <button onClick={handleButtonClick} disabled={!randomData}>
            Let's eat!
          </button>
          {chosenRestaurant && <p>Selected Pizza Place: {chosenRestaurant}</p>}
        </>
      )}
    </div>
  );
}

export { RandomPizzaPlaceComponent };
