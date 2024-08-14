import { ApiClient, GetMarginAccountParams, GetMarginAccountResult, GetMarginAccountsParams, GetMarginAccountsResult, GetMaxOrderSizeAvailableParams, GetOwnerMetadataParams, GetOwnerMetadataResult } from "@reyaxyz/api-sdk"
import { AccountWalletViem } from "./wallet/wallet"

ApiClient.configure('production');

    export const getAccount = async () => {

    const getOwnerMetadataParams: GetOwnerMetadataParams =  {
        ownerAddress: AccountWalletViem.address
    }
    // console.log("getOwnerMetadataParams", getOwnerMetadataParams)

    const ownerMetadata: GetOwnerMetadataResult = await ApiClient.owner.getOwnerMetadata(getOwnerMetadataParams);
    console.log('ownerMetadata', ownerMetadata)

    const getMarginAccountsParams: GetMarginAccountsParams =  {
        address: AccountWalletViem.address
    }
    console.log("getMarginAccountsParams", getMarginAccountsParams)


    const getMarginAccountsResult: GetMarginAccountsResult = await ApiClient.account.getMarginAccounts(getMarginAccountsParams);
    console.log('getMarginAccountsResult', getMarginAccountsResult);

    const getMarginAccountParams: GetMarginAccountParams =  {
        address: AccountWalletViem.address ,
        marginAccountId: 14
    }

    console.log("getMarginAccountParams", getMarginAccountParams)


    const getMarginAccountResult: GetMarginAccountResult = await ApiClient.account.getMarginAccount(getMarginAccountParams);
    console.log('getMarginAccountResult', getMarginAccountResult);

}