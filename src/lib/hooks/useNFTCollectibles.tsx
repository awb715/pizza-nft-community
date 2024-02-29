import { useEffect, useState } from "react";
import { Network } from "alchemy-sdk";
import { AlchemyMultichainClient } from "@/lib/alchemy-multichain-client";

const config = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_BASE,
  network: Network.BASE_SEPOLIA,
};

const overrides = {
  [Network.BASE_SEPOLIA]: {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_BASE_SEPOLIA ,
  }
}

const alchemy = new AlchemyMultichainClient(config, overrides);

type Maybe<T> = T | null;

export const useNFTCollectibles = (
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
        const allData = await fetchAlchemyAllData(owner);
        setData(allData);
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

const fetchAlchemyAllData = async (owner: string): Promise<Array<any>> => {
  return await fetchAlchemyData(owner)
};

const fetchAlchemyData = async (owner: string) => {
  const baseSepoliaNfts = await alchemy
  .forNetwork(Network.BASE_SEPOLIA)
  .nft.getNftsForOwner(owner as string, { pageSize: 5 });

  return [{ baseSepoliaNfts }]
};