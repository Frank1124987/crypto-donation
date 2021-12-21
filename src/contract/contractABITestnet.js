export default
[
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "plan_name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "nft_name",
    "type": "string"
   }
  ],
  "name": "addNFTToPlan",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "goal",
    "type": "uint256"
   }
  ],
  "name": "createPlan",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "account",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
   }
  ],
  "name": "ApprovalForAll",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "donor_id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "department_id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "plan_name",
    "type": "string"
   }
  ],
  "name": "donate",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "components": [
     {
      "internalType": "address",
      "name": "owner",
      "type": "address"
     },
     {
      "internalType": "string",
      "name": "id",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string[]",
      "name": "nft_names",
      "type": "string[]"
     }
    ],
    "indexed": false,
    "internalType": "struct Department",
    "name": "department",
    "type": "tuple"
   }
  ],
  "name": "NewDepartment",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "components": [
     {
      "internalType": "address",
      "name": "owner",
      "type": "address"
     },
     {
      "internalType": "string",
      "name": "id",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string[]",
      "name": "nft_names",
      "type": "string[]"
     }
    ],
    "indexed": false,
    "internalType": "struct Department",
    "name": "department",
    "type": "tuple"
   },
   {
    "components": [
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "description",
      "type": "string"
     },
     {
      "internalType": "uint256",
      "name": "balance",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "accumulate",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "goal",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "status",
      "type": "string"
     },
     {
      "internalType": "uint256[]",
      "name": "token_ids",
      "type": "uint256[]"
     }
    ],
    "indexed": false,
    "internalType": "struct Plan",
    "name": "plan",
    "type": "tuple"
   }
  ],
  "name": "NewPlan",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "department_id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "nft_name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "uri",
    "type": "string"
   }
  ],
  "name": "register_nft",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   }
  ],
  "name": "registerDepartment",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   }
  ],
  "name": "registerDonor",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "add",
    "type": "address"
   }
  ],
  "name": "registerLoginAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "remove",
    "type": "address"
   }
  ],
  "name": "removeLoginAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "from",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "to",
    "type": "address"
   },
   {
    "internalType": "uint256[]",
    "name": "ids",
    "type": "uint256[]"
   },
   {
    "internalType": "uint256[]",
    "name": "amounts",
    "type": "uint256[]"
   },
   {
    "internalType": "bytes",
    "name": "data",
    "type": "bytes"
   }
  ],
  "name": "safeBatchTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "from",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "to",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   },
   {
    "internalType": "bytes",
    "name": "data",
    "type": "bytes"
   }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
   }
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "uint256[]",
    "name": "ids",
    "type": "uint256[]"
   },
   {
    "indexed": false,
    "internalType": "uint256[]",
    "name": "values",
    "type": "uint256[]"
   }
  ],
  "name": "TransferBatch",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
   }
  ],
  "name": "TransferSingle",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "description",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "goal",
    "type": "uint256"
   }
  ],
  "name": "updatePlan",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "string",
    "name": "value",
    "type": "string"
   },
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
   }
  ],
  "name": "URI",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "components": [
     {
      "internalType": "address",
      "name": "owner",
      "type": "address"
     },
     {
      "internalType": "string",
      "name": "id",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string[]",
      "name": "nft_names",
      "type": "string[]"
     }
    ],
    "indexed": false,
    "internalType": "struct Department",
    "name": "department",
    "type": "tuple"
   },
   {
    "components": [
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "description",
      "type": "string"
     },
     {
      "internalType": "uint256",
      "name": "balance",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "accumulate",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "goal",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "status",
      "type": "string"
     },
     {
      "internalType": "uint256[]",
      "name": "token_ids",
      "type": "uint256[]"
     }
    ],
    "indexed": false,
    "internalType": "struct Plan",
    "name": "plan",
    "type": "tuple"
   }
  ],
  "name": "UpdatePlan",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "account",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
   }
  ],
  "name": "balanceOf",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address[]",
    "name": "accounts",
    "type": "address[]"
   },
   {
    "internalType": "uint256[]",
    "name": "ids",
    "type": "uint256[]"
   }
  ],
  "name": "balanceOfBatch",
  "outputs": [
   {
    "internalType": "uint256[]",
    "name": "",
    "type": "uint256[]"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "department_id",
    "type": "string"
   }
  ],
  "name": "get_nftnames",
  "outputs": [
   {
    "internalType": "string[]",
    "name": "",
    "type": "string[]"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getBalance",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   }
  ],
  "name": "getDepartment",
  "outputs": [
   {
    "components": [
     {
      "internalType": "address",
      "name": "owner",
      "type": "address"
     },
     {
      "internalType": "string",
      "name": "id",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string[]",
      "name": "nft_names",
      "type": "string[]"
     }
    ],
    "internalType": "struct Department",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getDepartment_ids",
  "outputs": [
   {
    "internalType": "string[]",
    "name": "",
    "type": "string[]"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   }
  ],
  "name": "getFunds",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "unit",
      "type": "string"
     },
     {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "department_id",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "plan_name",
      "type": "string"
     }
    ],
    "internalType": "struct Fund[]",
    "name": "",
    "type": "tuple[]"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   }
  ],
  "name": "getPlan",
  "outputs": [
   {
    "components": [
     {
      "internalType": "string",
      "name": "name",
      "type": "string"
     },
     {
      "internalType": "string",
      "name": "description",
      "type": "string"
     },
     {
      "internalType": "uint256",
      "name": "balance",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "accumulate",
      "type": "uint256"
     },
     {
      "internalType": "uint256",
      "name": "goal",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "status",
      "type": "string"
     },
     {
      "internalType": "uint256[]",
      "name": "token_ids",
      "type": "uint256[]"
     }
    ],
    "internalType": "struct Plan",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "id",
    "type": "string"
   }
  ],
  "name": "getPlan_names",
  "outputs": [
   {
    "internalType": "string[]",
    "name": "",
    "type": "string[]"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "account",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "operator",
    "type": "address"
   }
  ],
  "name": "isApprovedForAll",
  "outputs": [
   {
    "internalType": "bool",
    "name": "",
    "type": "bool"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
   }
  ],
  "name": "supportsInterface",
  "outputs": [
   {
    "internalType": "bool",
    "name": "",
    "type": "bool"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_tokenID",
    "type": "uint256"
   }
  ],
  "name": "uri",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]
