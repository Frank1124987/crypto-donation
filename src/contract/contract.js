import Web3 from 'web3/dist/web3.min.js'
import ABI from './contractABITestnet.js'

// Initialize web3 provider

// develop version

// product version
// if ( typeof ethereum !== 'undefined'){
    //     web3 = new Web3(Web3.givenProvider)
    // }else {
        //     alert('require Metamask')
        // }


// const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"))
// const contract = new web3.eth.Contract(ABI, '0xD2d46ac0319bfb98369A8FD96604D016f080f401')

// ethereum.request({ method: 'eth_accounts' }).then(console.log)
const web3 = new Web3(Web3.givenProvider)
const contract = new web3.eth.Contract(ABI, '0x6E5ae30aA5fC9B6cF297c6b3B170DaFE1A3a290a')
// web3.eth.net.getNetworkType(console.log)
export {web3, contract}