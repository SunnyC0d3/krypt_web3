# Krypt Web3 Demo Project

A custom built app that uses the Ethereum Blockchain, Solidity and React to demo transferring funds between wallets/accounts. Purpose of this app was to understand how to build a Web3 project.

![Alt text](/screenshots/readme-img-1.png?raw=true "Screenshot 1")
![Alt text](/screenshots/readme-img-2.png?raw=true "Screenshot 2")
![Alt text](/screenshots/readme-img-3.png?raw=true "Screenshot 3")

## Installation

1. Sign up to Meta Mask and make sure it is installed as a browser extension.
2. Sign up to Alchemy API for the Ethereum Ecosystem, and have the HTTP API key added to the **ALCHEMY_API_URL** env variable.
3. On the Meta Mask browser extension, copy the private key and paste it into the **META_MASK_ACCOUNTS** env variable.
4. Once the above steps are complete, make sure to run the following command:

```bash
npx hardhat run scripts/deploy.js --network ropsten
```

5. This command will compile the contract that is built within the **./smart_contract/contracts/** directory.
6. Make sure to copy the address that will be printed on to the terminal into the **./client/.env** file, to the **VITE_CONTRACT_ADDRESS** env variable.
7. Copy everything from the following: **./smart_contract/artifacts/contracts/Transactions.sol/Transactions.json** into **./client/src/utils/Transaction.json**.

## Issues

Current issue is that the API Keys are currently exposed to the browser but this is only for testing purposes, for future improvements a backend system or a serverless system can be considered in order for better protection against exposure to sensitive information.

