require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_URL,
        accounts: [process.env.PRIVATE_KEY]
      }
    }
  }
};