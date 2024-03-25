const { keccak256 } = require("ethers");

const keccak256Hash =async(value)=>{
    const hash = keccak256(value);
    return hash
}
module.exports={
    keccak256Hash
}