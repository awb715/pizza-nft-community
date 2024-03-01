import React, { useEffect, useState } from 'react';
import { fetchNFTDataFromAPI } from '../../lib/hooks/useNFTCollectibles';// Adjust the path
import { SimpleNFTComponent } from './nft-card';

// Adjust the path
// ... other imports

const NFTGallery: React.FC<{ contractAddress: string }> = ({ contractAddress }) => {
	const [nftData, setNFTData] = useState<any[]>([]); // Change the type if needed
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
  
	useEffect(() => {
	  const fetchData = async () => {
		setLoading(true);
		setError(null);
  
		try {
		  const data = await fetchNFTDataFromAPI(contractAddress);
		  console.log(data, 'test')
		  setNFTData(data);
		} catch (err) {
		  console.error('Error fetching NFT data:', err);
		  setError('Error loading gallery');
		} finally {
		  setLoading(false);
		}
	  };
  
	  fetchData();
	}, [contractAddress]);
  
	if (loading) {
	  return <div>Loading...</div>;
	}
  
	if (error) {
	  return <div>Error: {error}</div>;
	}
  
	return (
	  <div>
		<h2>NFT Gallery</h2>
		<div>
		  {nftData && nftData.map((nft, index) => (
			<SimpleNFTComponent key={index} nft={nft} />
		  ))}
		</div>
	  </div>
	);
  };
  
  export { NFTGallery };