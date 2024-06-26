const {Wallet, BaseWallet,Mnemonic, isBytesLike, keccak256} = require("ethers")

const CreateNewWallet = async()=>{
    const wallet = Wallet.createRandom();  //Creates a new random()
    const {privateKey,publicKey,mnemonic,address} = wallet;

    return {privateKey,publicKey,mnemonic,address};
}

//encrpt

const encrypt = async()=>{
    // Our wallet object
const wallet = Wallet.createRandom();

// The password to encrypt with
const password = "password123";

// WARNING: Doing this substantially reduces the security
//          of the wallet. This is highly NOT recommended.

// We override the default scrypt.N value, which is used
// to indicate the difficulty to crack this wallet.
const json = wallet.encrypt(password, {
  scrypt: {
    // The number must be a power of 2 (default: 131072)
    N: 64
  }
});
   return json;
}

const encrypt2 = async()=>{
    // Our wallet object
const wallet = Wallet.createRandom();

// The password to encrypt with
const password = "password123";

// WARNING: Doing this substantially reduces the security
//          of the wallet. This is highly NOT recommended.

// We override the default scrypt.N value, which is used
// to indicate the difficulty to crack this wallet.
const json = wallet.encrypt(password, {
  scrypt: {
    // The number must be a power of 2 (default: 131072)
    N: 64
  }
});
   return json;
}

//create wallet from baseWallet

const  createFromMnemonic=async(entropy,password)=>{
  const d = Mnemonic.fromEntropy(entropy,password)
  return d.phrase;
  
}


module.exports={CreateNewWallet,encrypt,
createFromMnemonic};
