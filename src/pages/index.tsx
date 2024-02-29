import React from "react";

import Wrapper from "@/components/Wrapper";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { useNFTCollectibles } from "@/lib/hooks/useNFTCollectibles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectInfo,linkMap} from "@/data/project-summary";
import { ConnectKitButton } from "connectkit";
import { SendTransaction } from "@/components/SendTransaction";
import {MyForm} from "@/components/nftForm";
import { Button } from "@/components/ui/button";
import { useAccount } from 'wagmi';



//use to determine if NFT holder
const Page: React.FC = () => {

  const {
    loading: nftLoading,
    error: nftError,
    data: nfts,
  } = useNFTCollectibles(projectInfo.address);


  const account = useAccount();
  console.log(account.address)
  //gets NFTs from address 
  const processAllNfts = () => {
    let nftData: any = [];
    if (!nfts[0]) return [];
    if (nfts[0]?.maticNfts?.ownedNfts)
      nftData = [...nftData, ...nfts[0].maticNfts.ownedNfts];
    if (nfts[0]?.mainnetNfts?.ownedNfts)
      nftData = [...nftData, ...nfts[0].mainnetNfts.ownedNfts];
    if (nfts[0]?.optimismNfts?.ownedNfts)
      nftData = [...nftData, ...nfts[0].optimismNfts.ownedNfts];
    return nftData;
  };
  const allNfts = processAllNfts().filter(
    (nft: any) => nft.tokenType !== "ERC1155"
  );
  // Render the profile information

  return (
    <main>
      <div className="fixed top-3 right-3 z-10">
        <ConnectKitButton />
      </div>
      <Wrapper>
        <FadeIn>
          <div className="flex items-center flex-col mx-auto w-full mt-16 md:mt-32 justify-center px-2 md:px-8">
            <h1 className="font-bold mt-4 text-2xl text-white">
            🍕🍕
              {projectInfo?.name ?? ""}🍕🍕
           
            </h1>
            <p className="text-white text-center text-base my-8">
            Share your pizza cost in ETH, BTC, or USDC and earn an NFT! <br></br><br></br> After that, discover what others paid for a slice!
</p>       
            <Tabs defaultValue="links" className="w-full">
              <TabsList className="flex items-center justify-center">
                <TabsTrigger value="form">Share your Pizza Price!</TabsTrigger>
                <TabsTrigger value="nfts">Your "Slices" </TabsTrigger>
                <TabsTrigger value="random">Hungry For Some Pizza?</TabsTrigger>
                <TabsTrigger value="data">Other People's slices. </TabsTrigger>
              </TabsList>
              <TabsContent
                value="form"
                className="w-full mt-8 flex flex-col items-center justify-center"
              >
 <MyForm></MyForm>
              </TabsContent>
              <TabsContent value="nfts" className="grid md:grid-cols-3 grid-cols-2 gap-3 max-w-96 place-self-center mx-auto"
              >
                {nftLoading && <p>Loading...</p>}
                {allNfts.map((nft: any) => {
                  const imageUri = nft.image.cachedUrl;

                  return (
                    <Image
                      key={imageUri}
                      src={imageUri}
                      alt="nft-item"
                      className="h-auto w-full max-w-full rounded-md min-h-32"
                      width={128}
                      height={128}
                    />
                  )
                })}
              </TabsContent>
              <TabsContent value="random" className="w-full mt-8 flex flex-col items-center justify-center">
                Click the button below and we'll randomly select pizza place for you to try!
                <br></br><br></br>
                <Button>Let's eat!</Button>
              </TabsContent>
              <TabsContent value="send">
                <SendTransaction />
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
      </Wrapper>
    </main>
  );
};

export default Page;

