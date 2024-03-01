import { useEffect, useState } from "react";

interface Image {
  cachedUrl: string;
  thumbnailUrl: string | null;
  pngUrl: string | null;
  contentType: string | null;
  size: number | null;
  originalUrl: string;
}

interface Raw {
  tokenUri: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    properties: {
      number: number;
      name: string;
    };
  };
  error: string | null;
}

interface NFTData {
  image: Image;
  raw: Raw;
}

interface FetchNFTResponse {
  data: NFTData[];
}

type Maybe<T> = T | null;

const useNFTCollectibles = (
  owner: string
): {
  data: any;
  loading: boolean;
  error: Maybe<string>;
} => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Maybe<string>>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchNFTDataFromAPI(owner);
        setData(response);
      } catch (err) {
        console.error("error", error);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    if (owner) {
      load();
    }
  }, [owner]);

  return { data, loading, error };
};

const fetchNFTDataFromAPI = async (contract: string): Promise<NFTCollectible[]> => {
  const response = await fetch(
    `https://base-sepolia.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_BASE}/getNFTsForContract?contractAddress=${contract}&withMetadata=true`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch NFT data: ${response.statusText}`);
  }

  const responseData: FetchNFTResponse = await response.json();

  return responseData.data.map((item) => ({
    image:item.image,
    raw:(item.raw)
  }));
};

export { useNFTCollectibles };

`https://base-sepolia.g.alchemy.com/nft/v3/5r7wAQwo9rHN7uSuNKSVTdvwyn8gLzpp/getNFTsForContract?contractAddress=QmQdEPS2MCKAra8E4nwfs37Kh88wM1cStxUFC7WZm97eyV&withMetadata=true`