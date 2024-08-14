import { withdraw , withdrawMAAndBridge } from "@reyaxyz/sdk"
import { Depoistwallet } from "./depositAccount"
import { Signer } from "ethers"
import { getAccount } from "./getAccount"
import { ApiClient, GetOwnerMetadataParams, GetOwnerMetadataResult } from "@reyaxyz/api-sdk";
import { AccountWalletViem } from "./wallet/wallet";
import { Address } from "viem";
ApiClient.configure('production');






export const withdrawAccount = async () => {

    const getOwnerMetadataParams: GetOwnerMetadataParams =  {
        ownerAddress: AccountWalletViem.address
    }
    
    const ownerMetadata: GetOwnerMetadataResult = await ApiClient.owner.getOwnerMetadata(getOwnerMetadataParams);

    console.log('ownerMetadata', ownerMetadata)

    // const withdrawParams = {
    //     signer: Depoistwallet as Signer ,
    //     moneyInOutChainId: 42161,
    //     owner : ownerMetadata.coreSigNonce,
    //     marginAccountId: 14,
    //     tokenAddress: '0x9de724e7b3facf87ce39465d3d712717182e3e55',
    //     amount: 10,
    //     receiverAddress: AccountWalletViem.address as Address,
    // }
    
    
    
    // withdrawMAAndBridge(withdrawParams)

}

