import Web3 from 'web3/dist/web3.min.js'
import ABI from './contractABI.js'

// Initialize web3 provider

// develop version
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"))

// product version
// if ( typeof ethereum !== 'undefined'){
//     web3 = new Web3(ethereum)
// }else {
//     alert('require Metamask')
// }

const contract = new web3.eth.Contract(ABI, '0x007415EC08bfB8e880d1B166d0a03F145b0fd887')

export {contract}