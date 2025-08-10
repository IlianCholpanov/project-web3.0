require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/4xs1l11Vh1y-QoVvaEf4Q",
      accounts: [
        "9c4a7740a3bff4415f8d4fbc7d42b5e5bc58d34dda2c81ee8b1a6e98d91a7d5c",
      ],
    },
  },
};

// https://eth-mainnet.g.alchemy.com/v2/4xs1l11Vh1y-QoVvaEf4Q
