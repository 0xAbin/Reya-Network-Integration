import { ApproveTokenParams, approveTokenSpending } from "@reyaxyz/sdk"
import {ethers, JsonRpcSigner, Signer} from "ethers";
import { AccountWalletViem } from "./wallet/wallet";
import { Address } from "viem";

const provider = ethers.getDefaultProvider('https://rpc.reya.network');
const Arbprovider = ethers.getDefaultProvider('https://arb1.arbitrum.io/rpc');

export const Depoistwallet = new ethers.Wallet( process.env.PRIVATE_KEY!, Arbprovider);



export const depositAccount = async () => {

   const parms = {
        signer: Depoistwallet as Signer ,
        tokenAddress: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8' as Address,
        amount: 10,
        type: 1,
    }

    // approveTokenSpending(parms)

}
