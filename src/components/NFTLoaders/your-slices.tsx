import React from 'react';
import { projectInfo } from '@/data/project-summary';
import { NFTGallery } from '.';
import { useFetchNFTData } from '@/lib/hooks/nfttest';

const YourSlices = ({ address }) => {
  const { value, data, error } = useFetchNFTData(address);

  console.log(value,data)

  return (
    <div>
      {value === 0 ? (
        <p>Mint an NFT and it will show up here!</p>
      ) : (
        <div>
          'test'</div>

      )}
    </div>
  );
};

export { YourSlices };