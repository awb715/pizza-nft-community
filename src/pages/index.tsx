import React from "react";

import Wrapper from "@/components/Wrapper";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { useNFTCollectibles } from "@/lib/hooks/useNFTCollectibles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profile } from "@/data/profile";
import { ConnectKitButton } from "connectkit";
import { SendTransaction } from "@/components/SendTransaction";
import {MyForm} from "@/components/nftForm";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full hover:scale-105 transition-all bg-purple rounded-xl mb-3 max-w-md"
    >
      <div className="flex items-center text-center max-h-12 h-12 w-full">
        <div className="w-4 h-4 ml-6">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={16}
              height={16}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-white -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

const Page: React.FC = () => {
  const {
    loading: nftLoading,
    error: nftError,
    data: nfts,
  } = useNFTCollectibles(profile.address);
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
              {profile?.name ?? ""}🍕🍕
            </h1>
            <p className="text-white text-center text-base my-8">
            Share your pizza cost in ETH or Satoshi and earn an NFT! <br></br>Then, discover what others paid for a slice!
</p>

show  mint (form) or random restaurant (button that updates text) / see data option (button to new page)

then,
        <MyForm></MyForm>
            <Tabs defaultValue="links" className="w-full">
              <TabsList className="flex items-center justify-center">
                <TabsTrigger value="links">Links</TabsTrigger>
                <TabsTrigger value="nfts">NFTs</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="send">Buy an NFT</TabsTrigger>
                <TabsTrigger value="NFT-check"> NFT Check</TabsTrigger>
              </TabsList>
              <TabsContent
                value="links"
                className="w-full mt-8 flex flex-col items-center justify-center"
              >
                {profile.links.map((link: any, index: number) => (
                  <LinkCard
                    key={link.name}
                    href={link.url}
                    title={link.name}
                    image="/LinkDefaultIcon.svg"
                  />
                ))}
              </TabsContent>
              <TabsContent
                value="nfts"
                className="grid md:grid-cols-3 grid-cols-2 gap-3 max-w-96 place-self-center mx-auto"
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
              <TabsContent
                value="projects"
                className="w-full mt-8 flex flex-col items-center justify-center"
              >
                {profile.projects.map((project: any) => (
                  <LinkCard
                    key={project.name}
                    href={project.url}
                    title={project.name}
                    image="/LinkDefaultIcon.svg"
                  />
                ))}
              </TabsContent>
              <TabsContent value="send">
                <SendTransaction />
              </TabsContent>
              <TabsContent value='NFT-check'>
                    MINT NFT Here
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
      </Wrapper>
    </main>
  );
};

export default Page;