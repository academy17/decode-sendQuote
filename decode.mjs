import Web3 from "web3";

// Initialize Web3
const web3 = new Web3();

// ABI of the _call() function:
const _callAbi = [
  {
    name: '_call',
    type: 'function',
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "_callDatas",
        type: "bytes[]",
      },
    ],
  },
];

// ABI of the sendQuote() function
const sendQuoteFunctionAbi = {
  name: 'sendQuote',
  type: 'function',
  inputs: [
    { internalType: "address[]", name: "partyBsWhiteList", type: "address[]" },
    { internalType: "uint256", name: "symbolId", type: "uint256" },
    { internalType: "uint8", name: "positionType", type: "uint8" },
    { internalType: "uint8", name: "orderType", type: "uint8" },
    { internalType: "uint256", name: "price", type: "uint256" },
    { internalType: "uint256", name: "quantity", type: "uint256" },
    { internalType: "uint256", name: "cva", type: "uint256" },
    { internalType: "uint256", name: "lf", type: "uint256" },
    { internalType: "uint256", name: "partyAmm", type: "uint256" },
    { internalType: "uint256", name: "partyBmm", type: "uint256" },
    { internalType: "uint256", name: "maxFundingRate", type: "uint256" },
    { internalType: "uint256", name: "deadline", type: "uint256" },
    {
      components: [
        { internalType: "bytes", name: "reqId", type: "bytes" },
        { internalType: "uint256", name: "timestamp", type: "uint256" },
        { internalType: "int256", name: "upnl", type: "int256" },
        { internalType: "uint256", name: "price", type: "uint256" },
        { internalType: "bytes", name: "gatewaySignature", type: "bytes" },
        {
          components: [
            { internalType: "uint256", name: "signature", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "nonce", type: "address" },
          ],
          internalType: "struct SchnorrSign",
          name: "sigs",
          type: "tuple",
        },
      ],
      internalType: "struct SingleUpnlAndPriceSig",
      name: "upnlSig",
      type: "tuple",
    },
  ],
};

// Create a mock Interface instance for _call
const _callIface = new web3.eth.Contract(_callAbi, '0x0000000000000000000000000000000000000000');

// Replace this with your calldata
const calldata = "YOUR_CALLDATA_HERE";

// Decoding the calldata for _call()
const decodedData = web3.eth.abi.decodeParameters(_callAbi[0].inputs, calldata.slice(10));

// Helper function to filter named outputs
function filterNamedOutputs(decoded) {
  const filtered = {};
  for (const key in decoded) {
    if (isNaN(key)) {
      filtered[key] = decoded[key];
    }
  }
  return filtered;
}

// Decode the calldata with the sendQuote() ABI:
const decodedCallDatas = decodedData._callDatas.map(callData => {
  const decoded = web3.eth.abi.decodeParameters(sendQuoteFunctionAbi.inputs, callData.slice(10));
  return filterNamedOutputs(decoded);
});

console.log("Account:", decodedData.account);
console.log("Decoded _callDatas:", decodedCallDatas);