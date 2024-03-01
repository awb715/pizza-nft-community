import React from 'react';


const SimpleNFTComponent: React.FC<{ nft: any }> = ({ nft }) => {
  return (
    <div>
      <h3>{nft.name}</h3>
      <p>Description: {nft.description}</p>
      <img src={nft.image} alt={`NFT ${nft.name}`} />
      <div>
        <h4>Traits:</h4>
        <ul>
          {nft.attributes.map((trait, index) => (
            <li key={index}>
              <strong>{trait.trait_type}:</strong> {trait.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SimpleNFTComponent };