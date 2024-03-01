const projectInfo = {
  name: "CryptoSlices",
  bio: "How much ETH / Satoshi did a slice of pizza cost you?",
  nftAddress: "0xb5954589190E143767120323970e3440A4454918",
  links: [
    {
      name: "Cheese",
      url: "IPFS-Cheese",
    },
    {
      name: "Mushrooms",
      url: "IPFS-Mushroom",
    },
    {
      name: "Pepperoni",
      url: "https://gray-odd-lynx-187.mypinata.cloud/ipfs/QmQdEPS2MCKAra8E4nwfs37Kh88wM1cStxUFC7WZm97eyV"
    }]
}

const linkMap = {};

// projectInfo.links.forEach((link) => {
//   linkMap[link.name] = link;
// });

export {projectInfo,linkMap}