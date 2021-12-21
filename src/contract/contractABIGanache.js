export default 
	[
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
		}
	]
