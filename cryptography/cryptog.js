const { keccak256,randomBytes } = require("ethers");

const keccak256Hash =async(value)=>{
    const hash = keccak256(value);
    
    return hash
}
const  randomNumber= async (min,max) =>{
   const num =  randomBytes(32)
   return num   
}
module.exports={
    keccak256Hash,
    randomNumber

}