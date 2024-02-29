const projectInfo = {
  name: "CryptoSlices",
  bio: "How much ETH / Satoshi did a slice of pizza cost you?",
  address: "0xE66400BBD0bD5c300aA129C64B929A0872dEDE90",
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