const projectInfo = {
  name: "CryptoSlices",
  bio: "How much ETH / Satoshi did a slice of pizza cost you?",
  address: "0xc0163E58648b247c143023CFB26C2BAA42C9d9A9",
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
      url: "IPFS-Pepperoni"
    }]
}

const linkMap = {};

projectInfo.links.forEach((link) => {
  linkMap[link.name] = link;
});

export {projectInfo,linkMap}