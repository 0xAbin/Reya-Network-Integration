import { ReyaNetworkIntegration } from './src/utils/ascii';
import { getReyaNetwork } from '@reyaxyz/common';
import { DEVenv } from './src/lib/envConfig';
import { ReyaChainId } from '@reyaxyz/common';
import { TOKEN_INFO } from '@reyaxyz/common';
import { ApiClient } from '@reyaxyz/api-sdk';


console.log(ReyaNetworkIntegration);


console.log("ReyaNetwork Chainid: ", ReyaChainId.reyaNetwork);
console.log("Reya Network id: ", getReyaNetwork(DEVenv));
console.log("Reya Token Info: ", TOKEN_INFO);


console.log("API Client: ");


