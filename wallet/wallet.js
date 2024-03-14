const {Wallet} = require("ethers")

const CreateNewWallet = async()=>{
    const wallet = Wallet.createRandom();  //Creates a new random()
    const {privateKey,publicKey,mnemonic,address} = wallet;

    return {privateKey,publicKey,mnemonic,address};
}

module.exports={CreateNewWallet};