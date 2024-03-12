const {ethers} = require("ethers")

const provider = new ethers.JsonRpcProvider(); // connect to port 8545 localhoast 

(async function  connect(){
    console.log(await provider.getBlock())// get blocknumber
    console.log("signer is ",await provider.getSigner())  // get signer
})()