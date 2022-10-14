const API_KEY = "681b01b9e7f50c7849bea5031041a20c43eeaeb8072a0ceca24a111566d4866d";

export const loadTickers = (tickers) => 
   fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(',')}&api_key=${API_KEY}`
    ).then(r => r.json());
    



