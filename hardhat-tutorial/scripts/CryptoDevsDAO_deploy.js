const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});
const { FakeNftMarketplace_Address } = require("../constants");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  const fakeNftMarketplace = FakeNftMarketplace_Address;
  console.log("1");
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  console.log("2");

  const cryptoDevsDAO = await CryptoDevsDAO.deploy(fakeNftMarketplace, cryptoDevsNFTContract,
    {
      // This assumes your account has at least 1 ETH in it's account
      // Change this value as you want
      value: ethers.utils.parseEther("0.01"),
    }
  );
  await cryptoDevsDAO.deployed();
  console.log("3");

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });