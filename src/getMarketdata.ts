import { ApiClient, GetMarketParams, MarketEntity } from "@reyaxyz/api-sdk";





ApiClient.configure('production');


// this get the all the market data required for the front end

export const MarketData = async () => {

    const allMarkets: MarketEntity[] = await ApiClient.markets.getMarkets();
    // console.log('List of markets: ------------------>');
    // console.log(allMarkets)

    const marketParams: GetMarketParams = {
        id: 1
    }
    
    const market: MarketEntity = await ApiClient.markets.getMarket(marketParams);
    console.log(`market for id --------->  ${marketParams.id} details `,);
    console.log( market);

}



