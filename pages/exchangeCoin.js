import ExchangeHeader from "../components/ExchangeHeader";
// import Footer from "../components/Footer";
import SwapComponent from "../components/SwapComponent";
import Header from "../components/Header";


const exchangeCoin = () => {
  return (<>
      <Header/>
    <div className="w-full h-[90%] flex flex-col items-center justify-evenly">
      <ExchangeHeader />
      <SwapComponent />
      {/* <Footer /> */}
    </div>
  </>
  );
};

export default exchangeCoin;
