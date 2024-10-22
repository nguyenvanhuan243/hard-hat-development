const { ethers } = require("hardhat");

async function main() {
    // Replace with your deployed contract address
    const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    const MessageContract = await ethers.getContractFactory("MessageContract");
    const messageContract = MessageContract.attach(contractAddress);

    // Update the message
    const newMessage = "New Message Here";
    const newMessageTransaction = await messageContract.updateMessage(newMessage);
    await newMessageTransaction.wait(); // Wait for the transaction to be mined
    console.log("Message updated to:", newMessage);

    // Get the current message
    try {
        const currentMessage = await messageContract.getMessage();
        console.log("Current Message:", currentMessage);
    } catch (error) {
        console.error("Error fetching message:", error);
    }

    // Update the message
    const newMessageHuanTransaction = await messageContract.updateMessageHuan("New Message updateMessageHuan");
    await newMessageHuanTransaction.wait(); // Wait for the transaction to be mined
    console.log("Message updated to:", "New Message updateMessageHuan");

    // Get the current message
    try {
        const currentMessage = await messageContract.getMessage();
        console.log("Current Message:", currentMessage);
    } catch (error) {
        console.error("Error fetching message:", error);
    }
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
