const {ethers} = require("ethers")
const {daiAbi,daiAddress} = require("./Contract/abi/dai")
const {CreateNewWallet} =require("./wallet/wallet")



const provider = new ethers.JsonRpcProvider(); // connect to port 8545 localhoast 

const signer = provider.getSigner();
const daiContract =new ethers.Contract(daiAddress,daiAbi,provider) // readonly
const daiContractWithSigner = daiContract.connect(signer) //write
//get balance

const getAccountBalance= async (account) =>{
    return await provider.getBalance(account);
};
//get address

const getAddress = async ()=>{
    return (await provider.getSigner()).address;
}

//get Accounts
const getAccounts =async()=>{
    const accounts = await  provider.listAccounts();
   return accounts[3].address;
}
//send transaction
const sendTransaction= async(addressTo,value)=>{
    const tx = (await signer).sendTransaction({to:addressTo ,value :value});
     console.log(`Transfering ${        tx.value} wei from ${tx.from } to ${tx.to}` );

}
//getDaiToken Symbol

const getDaiSymbol = async()=>{
    const symbol = await daiContract.name()
    console.log("symbol",symbol)
}

//convert to ether unit
const convertToEther =async(amount)=>{
    return  ethers.parseEther(amount)
}
//convert to specific decimal numbers
const convertToEtherspecificUnit =async(amount)=>{
    return  ethers.parseUnits(amount,10)
}

//signing a message
const signMessage = async (message)=> {  
    let signature = (await signer).signMessage("Yollow the way forward")
return signature}

//create a new wallet
const createWallet=async()=>{
    const { privateKey,publicKey,mnemonic,address} =await  CreateNewWallet();
    console.log("private key:",privateKey)
    console.log("public key:",publicKey)
    console.log("address:",address)
    console.log("mnemonic:",mnemonic)
}
(async function  connect(){
    console.log(await provider.getBlock())// get blocknumber
    console.log("signer is ",await provider.getSigner())  // get signer
    console.log("block number",await provider.getBlockNumber()) // block number
    console.log("account address",await getAddress())
    console.log("account balance",await getAccountBalance(await getAddress())) // account balance
    console.log("get list of accounts",await getAccounts())
    sendTransaction(await getAccounts(),"10")
    // getDaiSymbol()
    console.log("convert to ether",await convertToEther("10"))
    console.log("convert to ether",await convertToEtherspecificUnit("20"))
   // console.log("sign message",await signMessage())
   //new wallet
  createWallet()


})()