import React from "react";

const Footer = () => {
  return (
    <div className="text-[14px]">
      <a
        href="#scrollToTopBtn" 
        id="scrollToTopBtnmain"
        className="bg-[#224BC1] fixed bottom-20 py-5 hover:bg-blue-700 text-white font-semibold px-4 rounded"
      >
        <img src="./scrollup.svg" />
      </a>
      <div className="flex space-x-3">
        <a>Privacy </a>
         <span>|</span>
        <a>Terms</a>
      </div>
      <footer className=" md:bg-[#000000] pt-8 pb-10">
      <p className="text-gray-500">© All Rights Reserved. dollarhouse.co</p>
      
       <p>Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. Before deciding to trade cryptocurrency, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with cryptocurrency trading, and seek advice from an independent financial advisor. Any opinions, news, research, analyses, prices, or other information contained on this website is provided as general market commentary, and does not constitute investment advice. The CUNetwork will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. All opinions expressed on this site are owned by the respective writer and should never be considered as advice in any form. The CUNetwork makes no representation or warranties as to the accuracy and or timelines of the information contained herein. A qualified professional should be consulted before making any financial decisions.</p>
      </footer>
    </div>
  );
};

export default Footer;
