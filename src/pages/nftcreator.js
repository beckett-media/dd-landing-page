import React from "react";
import { ethers } from 'ethers';
import { NFTStorage } from 'nft.storage'

export default class NFTCreator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      account: null,
      image: null,
      name: null,
      description: null,
      transactions: null,
      grades: null,
    }
  }

  // Check if the user has installed MetaMask
  componentDidMount = () => {
    if (typeof window.ethereum == 'undefined') {
      alert('MetaMask is uninstalled! Please install MetaMask firts!')
    }
    if (!window.ethereum.isMetaMask) {
      alert('Your web browser does not support MetaMask')
    }
    if (window.ethereum.chainId !== '0x4') {
      alert('Please select a Rinkeby test network')
    }
  }

  // MetaMask authorizes login and obtains the account
  connectMetaMask = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(res => {
      this.setState({ account: res[0] })
    }).catch(res => {
      alert(res.message);
    })
  }

  // The request takes a long time, Please be patient
  mintNFT = async () => {
    if (this.state.account) {
      if (this.state.image) {

        // upload image & metadata to IPFS
        let apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVlMkY3RDhCYmI4ODIxYTUxQ0NkQzE3ODVjMzQzNzA0MmExOTlGQjYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzk0MjYyNjYxOCwibmFtZSI6IkR1ZURpbGx5In0.9umw6aD0dXDYpTtsdtXIBZ1avSM6NpGZqQCu0H80ldA'
        let client = new NFTStorage({ token: apiKey })
        let metadata = await client.store({
          image: this.state.image,
          name: this.state.name || '',
          description: this.state.description || '',
          transactions: this.state.transactions || '[]',
          grades: this.state.grades || '[]',
        })
        console.log(metadata)

        // call smart contract
        let provider = new ethers.providers.Web3Provider(window.ethereum)
        let signer = provider.getSigner()
        let contractAddress = "0x675AF7f7390BcC0773dE8666Dff77f71a92f5679";
        let contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mortgagePool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "mortgage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "redemption", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
        let contract = new ethers.Contract(contractAddress, contractABI, signer);
        let transactionInfo = await contract.safeMint(this.state.account, metadata.url)
        console.log(transactionInfo)
        alert(JSON.stringify(transactionInfo))

      } else {
        alert('Please upload image first')
      }
    } else {
      alert('Please connect to metamask first')
    }
  }



  render() {
    return (
      <div>
        <input type='file' onChange={this.storageIPFS} onChange={e => this.setState({ image: e.target.files[0] })} />
        <input type='text' placeholder='NFT name' onChange={e => this.setState({ name: e.target.value })} />
        <textarea placeholder='NFT description' onChange={e => this.setState({ description: e.target.value })} />
        <textarea placeholder='Transaction Data' onChange={e => this.setState({ transactions: e.target.value })} />
        <textarea placeholder='Graded Data' onChange={e => this.setState({ grades: e.target.value })} />
        <button onClick={this.connectMetaMask}>{this.state.account || 'CONNECT'}</button>
        <button onClick={this.mintNFT}>MINT</button>
      </div>
    )
  }

}