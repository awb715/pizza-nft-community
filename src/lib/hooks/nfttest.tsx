import { useEffect, useState } from 'react';
import { projectInfo } from '@/data/project-summary';

const useFetchNFTData = (address) => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://base-sepolia.g.alchemy.com/nft/v3/docs-demo/getNFTsForOwner?owner=${address}&contractAddresses[]=${projectInfo.nftAddress}&withMetadata=true&pageSize=100`;
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        const response = await fetch(url, options);
        console.log(response)
        // const jsonData = await response.json();

        setValue(0); // Assuming the value is available in the 'value' field of the API response
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching value:', error);
        setError(error);
      }
    };

    fetchData();
  }, [address]);

  return { value, data, error };
};

export  {useFetchNFTData};