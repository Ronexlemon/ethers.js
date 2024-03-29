const {ethers} = require("ethers")

const network = "homestead";

const providerApi = new ethers.getDefaultProvider(network, {
    etherscan: "YOUR_ETHERSCAN_API_KEY",
    infura: "YOUR_INFURA_PROJECT_ID",
    // Or if using a project secret:
    // infura: {
    //   projectId: YOUR_INFURA_PROJECT_ID,
    //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
    // },
    alchemy: "YOUR_ALCHEMY_API_KEY",
    pocket: "YOUR_POCKET_APPLICATION_KEY"
    // Or if using an application secret key:
    // pocket: {
    //   applicationId: ,
    //   applicationSecretKey:
    // },
   
});