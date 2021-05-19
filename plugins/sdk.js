const axios = require('axios');

export const SDK = {
    get : async (symbol)=> {
        let glass = await axios.get(`/depth?symbol=${symbol}`);   // делаем снепшот стакана по символу ${symbol}
        return glass.data;
    },
    subscribe : function(symbol)  {
        // eslint-disable-next-line no-unused-vars
        // const {EventBus} = require('./EventBus');
        // let ws = new WebSocket(`${process.env.VUE_APP_API_BINANCE_WS}${symbol.toLowerCase()}@depth`);
        let ws = new WebSocket(`https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=500`)
        return ws     // возвращаем сокет
    }
};
