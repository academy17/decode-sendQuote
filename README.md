# decode-sendQuote
This repository contains a script to decode calldata for a sendQuote using SYMMIO's contracts, specifically designed to extract and display the input parameters from a transaction's calldata. 

## Dependencies 
web3.js: A JavaScript library to interact with the Ethereum blockchain.
## Installation
To use this script, you need to install web3.js. You can install it using npm:
```bash
npm install web3
```

## Script Overview
The script decodes the calldata of a transaction to reveal the input parameters of a sendQuote() call. In this example, it decodes the _call function's calldata, and further decodes the sendQuote function's data within _callDatas.

## How It Works
**Initialize Web3:** Creates a new instance of Web3.
**Define ABI:** Specifies the ABIs for both the _call and sendQuote functions.
**Decode Main Calldata:** Decodes the primary calldata to extract the _callDatas array.
**Decode Nested Calldata:** Decodes each element in the _callDatas array using the sendQuote ABI.
**Filter Named Outputs:** Extracts and prints only the named properties from the decoded data.

## Usage
**Install Dependencies:** Ensure web3.js is installed.
**Replace Calldata:** Replace YOUR_CALLDATA_HERE with the actual calldata in the script.
**Run the Script:** Execute the script using Node.js.

```bash
node decode.mjs
```
