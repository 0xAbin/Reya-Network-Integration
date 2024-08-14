import {ethers, JsonRpcSigner, Signer} from "ethers";
import 'dotenv/config'
import { ApproveTokenParams } from "@reyaxyz/sdk";

const provider = ethers.getDefaultProvider('https://rpc.reya.network');

export const signGrantPermissionWallet = async () => {

    const wallet = new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`, provider);

    // console.log("Wallet--->", wallet)

}