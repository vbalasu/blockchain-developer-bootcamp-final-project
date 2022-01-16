//const { default: Web3 } = require("web3");

var abi = [
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "data",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "approverEmail",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "contents",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "approvalWindowMinutes",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "response",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "approverEmail",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contents",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "approvalWindowMinutes",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "response",
              "type": "string"
            }
          ],
          "internalType": "struct ApprovalRequestData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_approverEmail",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contents",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_approvalWindowMinutes",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_response",
          "type": "string"
        }
      ],
      "name": "setResponse",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "length",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "hasExpired",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
var contractAddress = '0xe944f8789EB6d4F809373Be603a8Fd852D00454d';
var approvalRequest; 

async function submitTransaction(data) {
    await ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    approvalRequest = new web3.eth.Contract(abi, contractAddress);
    console.log(web3.givenProvider.selectedAddress);
    approvalRequest.methods.create(data.approverEmail, data.contents, data.approvalWindowMinutes).send({from: web3.givenProvider.selectedAddress});
}

async function getLength() {
    await ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    approvalRequest = new web3.eth.Contract(abi, contractAddress);
    var length = await approvalRequest.methods.length().call();
    console.log(length);
}

async function getRequest(_id) {
    await ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    approvalRequest = new web3.eth.Contract(abi, contractAddress);
    var data = await approvalRequest.methods.get(_id).call();
    return data;
}

function processForm() {
    var formData = {
        approverEmail: document.querySelector('#approverEmail').value,
        contents: document.querySelector("#contents").value,
        approvalWindowMinutes: document.querySelector('#approvalWindowMinutes').value
    };
    return formData;
}

var form = document.querySelector('#createApprovalRequest');
form.addEventListener('submit', (event) => {
    // if (!form.checkValidity()) {
    //     event.preventDefault()
    //     event.stopPropagation()
    //   }
      var formData = processForm();
      form.classList.add('was-validated');
      event.preventDefault()
      event.stopPropagation()
      console.log(formData);
      submitTransaction(formData);
});

var getForm = document.querySelector('#getApprovalRequest');
getForm.addEventListener('submit', async (event) => {
      var requestId = document.querySelector('#requestId').valueAsNumber;
      getForm.classList.add('was-validated');
      event.preventDefault()
      event.stopPropagation()
      console.log(requestId);
      data = await getRequest(requestId);
      window.output = `Id: ${data.id}<br>
        Request Date: ${new Date(parseInt(data.id)*1000).toISOString()}<br>
        Approver Email: ${data.approverEmail}<br>
        Contents: ${data.contents}<br>
        Approval Window (minutes): ${data.approvalWindowMinutes}<br>
        Response: ${data.response}`;
      data.date = new Date(parseInt(data.id)*1000).toISOString();
      console.log(data);
      document.querySelector('#output').innerHTML = window.output;
      console.log(window.output);
});
