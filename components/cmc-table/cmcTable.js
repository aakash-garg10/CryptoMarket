import { useContext, useEffect, useState, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";

const CMCtable = () => {
  // console.log(CoinMarketContext);
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];
      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
        if (element.cmc_rank <= 99) filteredResponse.push(element);
      }
      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getTopTenCoins]);
  // console.log(coinData);

  return (
    <div className="text-white font-bold" style={{ height: "100%" }}>
      {/* <iframe
        src="https://in.widgets.investing.com/top-cryptocurrencies?theme=lightTheme&hideTitle=true&roundedCorners=true"
        width="100%"
        // height="100%"
        frameborder="0"
        allowtransparency="true"
        marginwidth="0"
        marginheight="0"
        style={{ height: "80vh" }}
      ></iframe> */}

      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />

          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCtableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIsIncrement={true}
                  dRateIsIncrement={false}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCtable;
