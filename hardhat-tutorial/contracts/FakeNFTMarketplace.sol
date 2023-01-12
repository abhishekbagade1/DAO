//SPDX-License-Identifier : MIT

pragma solidity 0.8.17;

contract FakeNFTMarketplace {

    mapping (uint256 => address) public tokens ;
    uint256 nftPrice = 0.1 ether;

    function available(uint256 _tokenId) external view returns (bool){
        if(tokens[_tokenId] == address(0)){
            return true;
        }
        return false;
    }

    function getPrice() external view returns(uint256){
        return nftPrice;
    }

    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPrice, "This NFT costs 0.1 ether");
        tokens[_tokenId] = msg.sender;
    }
}

// FakeNFTMarketplace deployed to:  0x23a4037b27C4dF8ec1E68a2B7B0fEE25970D7AA2