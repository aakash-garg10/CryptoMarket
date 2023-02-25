import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <CoinMarketProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </CoinMarketProvider>
  );
}

export default MyApp;
