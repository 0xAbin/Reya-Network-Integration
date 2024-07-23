import { ReyaNetworkIntegration } from './src/utils/ascii';
import { getReyaNetwork } from '@reyaxyz/common';
import { DEVenv } from './src/lib/envConfig';
import { ReyaChainId } from '@reyaxyz/common';
import { TOKEN_INFO } from '@reyaxyz/common';
import { ApiClient } from '@reyaxyz/api-sdk';
import { getNativeToken } from '@reyaxyz/common';
import { getTokenInfoByAddress } from '@reyaxyz/common';
import { signGrantPermission } from '@reyaxyz/common';
import { createAccount } from '@reyaxyz/sdk';
import {AccountWalletViem} from "./src/wallet/wallet"




type CustomSignature = {
    r: string;
    s: string;
    v: number;
  };


console.log(ReyaNetworkIntegration);



// const Read = 


// console.log("ReyaNetwork Chainid: ", ReyaChainId.reyaNetwork);
// console.log("Reya Network id: ", getReyaNetwork(DEVenv));
const reyaTokenInfo = TOKEN_INFO[ReyaChainId.reyaNetwork];
reyaTokenInfo.forEach(token => {
    console.log(`Token Name: ${token.name}, Address: ${token.address}`);
  });
// console.log("Native Token Name: ", getNativeToken(ReyaChainId.reyaNetwork));
// console.log("getTokenInfoByAddress: " getTokenInfoByAddress(TOKEN_INFO[1729][Symbol]));


// console.log("Sign": signGrantPermission())



// ------------------------------------------------------

console.log("Account PRIV KEy" , AccountWalletViem)

// const AccountCreate = createAccount(AccountWalletViem.address, );

