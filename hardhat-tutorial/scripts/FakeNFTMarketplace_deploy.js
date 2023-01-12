const {ethers} = require("hardhat");

async function main() {

    const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
    await fakeNftMarketplace.deployed();

    console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
