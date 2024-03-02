import React, { useEffect, useState } from 'react';
import { fetchNFTDataFromAPI } from '../../lib/hooks/useNFTCollectibles';// Adjust the path
import { projectInfo,linkMap} from "@/data/project-summary";
import { NFTGallery } from '.';  // Import your NFTGallery component
import { useAccount } from 'wagmi';

const YourSlices = ({ address }) => {
    const [value, setValue] = useState(1);
    console.log(address)
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Make your API request to get the value
        //   const response = await fetch('your-api-endpoint VALUE HERE');
        //   const data = await response.json();
          setValue(0);  // Assuming the value is available in the 'value' field of the API response
        } catch (error) {
          console.error('Error fetching value:', error);
        }
      };
  
      fetchData();
    }, []);  // Empty dependency array ensures the effect runs only once on component mount
  

  return (
    <div>
      {value === 0 ? (
        <p>Mint an NFT</p>
      ) : (
        <NFTGallery contractAddress={projectInfo.nftAddress}></NFTGallery>
      )}
    </div>
  );
};

export{ YourSlices};