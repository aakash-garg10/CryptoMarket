import ExchangeHeader from "../components/ExchangeHeader";
// import Footer from "../components/Footer";
import SwapComponent from "../components/SwapComponent";


const exchangeCoin = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#2D242F]">
      <ExchangeHeader />
      <SwapComponent />
      {/* <Footer /> */}
    </div>
  );
};

export default exchangeCoin;
