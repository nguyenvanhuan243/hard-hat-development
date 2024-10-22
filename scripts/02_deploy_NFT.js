const { ethers } = require("hardhat");

async function deployContract() {
    const MessageContract = await ethers.getContractFactory("MessageContract")
    const myContract = await MessageContract.deploy("MessageContract")
    console.log("MessageContract #######################", myContract)
}

deployContract()
