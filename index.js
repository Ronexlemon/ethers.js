const {ethers} = require("ethers")

const provider = new ethers.JsonRpcProvider(); // connect to port 8545 localhoast 


//get balance
const getAccountBalance= async (account) =>{
    return await provider.getBalance(account);
};
//get address

const getAddress = async ()=>{
    return (await provider.getSigner()).address;
}

(async function  connect(){
    console.log(await provider.getBlock())// get blocknumber
    console.log("signer is ",await provider.getSigner())  // get signer
    console.log("block number",await provider.getBlockNumber()) // block number
    console.log("account address",await getAddress())
    console.log("account balance",await getAccountBalance(await getAddress())) // account balance

})()