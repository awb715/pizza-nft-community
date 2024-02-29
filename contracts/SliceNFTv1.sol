// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";


contract SliceNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner)
        ERC721("SliceNFT", "SLICE")
        Ownable(initialOwner)
    {}
    
    mapping(uint256 => nftData) public tokenData;

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

    //     function getTokenData(uint256 tokenId) public view returns (nftData memory) {
    //     require(ownerOf(tokenId) != address(0), "Token ID does not exist.");
    //     return tokenData[tokenId];
    // }
}
