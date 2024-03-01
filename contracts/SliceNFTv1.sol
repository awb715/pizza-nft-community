// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";


contract SliceNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    mapping(string => string) private pizzaTypeToIPFSUrl;
    mapping(uint256 => nftData) public tokenData;


    constructor(address initialOwner)
        ERC721("SliceNFT", "SLICE")
        Ownable(initialOwner)
    {}
    
    struct nftData {
        uint256 place;
        string pizzaType;
        string currency;
        uint256 currentTime;
        uint256 amount;
    }

    function safeMint(
        address recipient,
        uint256 place,
        string memory pizzaType,
        string memory currency,
        uint256 amount

        //going to need to add image data based on
    ) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        
        // Define IPFS URLs for each pizza type
        string memory ipfsUrl;
        if (keccak256(abi.encodePacked(pizzaType)) == keccak256(abi.encodePacked("supreme"))) {
            ipfsUrl = "https://gray-odd-lynx-187.mypinata.cloud/ipfs/QmbMQpNZFrsPQqUwiK1wBUKiJ8Ep7EjF2TwH85ikR16fW5";
        } else if (keccak256(abi.encodePacked(pizzaType)) == keccak256(abi.encodePacked("pepperoni"))) {
            ipfsUrl = "https://gray-odd-lynx-187.mypinata.cloud/ipfs/QmQdEPS2MCKAra8E4nwfs37Kh88wM1cStxUFC7WZm97eyV";
        } else if (keccak256(abi.encodePacked(pizzaType)) == keccak256(abi.encodePacked("mushroom"))) {
            ipfsUrl = "https://gray-odd-lynx-187.mypinata.cloud/ipfs/QmYEqTEx96E9iusMj7WDVjHsmqPBRcsrKamUAuMXBGhpEG";
        } else {
            revert("Invalid pizza type");
        }

        _setTokenURI(tokenId, ipfsUrl); 
        _safeMint(recipient, tokenId);




        nftData memory newData = nftData({
            place: place, 
            pizzaType: pizzaType,
            currency: currency,
            currentTime: block.timestamp,
            amount: amount
        });


        tokenData[tokenId] = newData;
    }

        function getTokenData(uint256 tokenId) public view returns (nftData memory) {
        require(ownerOf(tokenId) != address(0), "Token ID does not exist.");
        return tokenData[tokenId];
    }
}
