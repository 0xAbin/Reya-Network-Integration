import { ApiClient, GetMaxOrderSizeAvailableParams, SimulateTradeEntity, TradeSimulationLoadDataParams, TradeSimulationSimulateParams } from "@reyaxyz/api-sdk"

ApiClient.configure('production');

export const openTrade = async () => {

    const tradeSimulationLoadDataParam: TradeSimulationLoadDataParams =  {
        marketId: 1,
        marginAccountId: 14,
    }

    console.log("tradeSimulationLoadDataParam", tradeSimulationLoadDataParam)

    await ApiClient.tradeSimulation.arm(tradeSimulationLoadDataParam);

    const tradeSimulationSimulateParams: TradeSimulationSimulateParams =  {
        amount: 100
    }

    console.log("tradeSimulationSimulateParams", tradeSimulationSimulateParams)


    const simulateEntity: SimulateTradeEntity = ApiClient.tradeSimulation.simulate(tradeSimulationSimulateParams)
    console.log('simulateEntity', simulateEntity);

    const getMaxOrderSizeAvailableParams: GetMaxOrderSizeAvailableParams = {
        marketId: 1,
        marginAccountId: 14,
        direction: 'long' 
    }

    console.log("getMaxOrderSizeAvailableParams", getMaxOrderSizeAvailableParams)


}