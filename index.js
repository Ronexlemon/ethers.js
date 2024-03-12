const {ethers} = require("ethers")

const provider = new ethers.JsonRpcProvider(); // connect to port 8545 localhoast 

const signer = provider.getSigner();
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
(async function  connect(){
    console.log(await provider.getBlock())// get blocknumber
    console.log("signer is ",await provider.getSigner())  // get signer
    console.log("block number",await provider.getBlockNumber()) // block number
    console.log("account address",await getAddress())
    console.log("account balance",await getAccountBalance(await getAddress())) // account balance
    console.log("get list of accounts",await getAccounts())
    sendTransaction(await getAccounts(),"10")

})()