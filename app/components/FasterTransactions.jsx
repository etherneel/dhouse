import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FasterTransactions = () => {
   
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div className="mt-20" data-aos="fade-up">
      <div className="container bg-[#1a1b1c] rounded-[30px] text-white fasterTransaction mx-auto">
        <div className="md:flex justify-between">
          <div className="p-5 md:pl-20 py-5 md:py-16 md:w-[58%]">
            <div className="flex mx-auto md:mx-0 space-x-2 justify-center p-2 md:text-[25px] md:p-1.5 rounded-3xl px-3 bg-[#255EF0AB] max-w-[250px] md:max-w-[410px]">
              <span>
                <img className="md:mt-2" src="./star.svg" />
              </span>
              <span className="hidden md:block">
                Faster transactions on Bep20
              </span>
              <span className="block md:hidden">Faster transactions</span>
            </div>
            <p className=" hidden md:block mt-8 text-[16px] md:text-[23px] text-center md:text-start line-height-custom">
              There are multiple reasons why Avtar coin is deployed on Bep20
              network & few of them are listed below. multiple reasons why Avtar
              coin is deployed on Bep20 network & few of them are listed below.
            </p>

            <p className="mt-5  block md:hidden  text-center md:text-start">
              There are multiple reasons why Avtar coin is deployed on Bep20
              network & few of them are listed below
            </p>

            <div className="bg-[#383838AB] text-center md:text-start mx-auto mt-8 md:mx-0 pl-[28px]  md:pl-[43px]  rounded-2xl p-4 md:p-5  max-w-[410px]">
              <ul className=" md:list-disc text-[15px] md:text-[20px] mx-auto md:mx-0 ">
                <li className="mb-2">Block speed is more on Bep20</li>
                <li className="mb-2"> Gas optimization is better</li>
                <li className="mb-2">Transaction speed is more</li>
              </ul>
            </div>
          </div>
          <div className="md:w-[40%]">
            <img src="./faster-right-image.svg" />
          </div>
        </div>
      </div>

      <div className="mt-10 md:flex justify-between space-y-10 md:space-y-0 md:space-x-20">
        <div className=" rounded-[45px] bg-[#1a1a1c] p-5 md:p-10 text-center lg:pr-20  md:w-1/2 md:text-left">
          <div
            className="w-12 h-12 mx-auto md:mx-0 "
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img className="mx-auto w-7 pt-2.5" src="./icon1.svg" />
          </div>
          <h3 className="text-[20px] mt-3">Govern by the community</h3>
          <p className="text-[14px] p-3 md:p-0 md:text-[16px] text-[#BBB4B4] opportunity_desc">
            Price of the token will be estimated & decided by the community. On
            every transaction LP will contributed with predecided percentage of
            tokens
          </p>
        </div>
        <div className=" rounded-[45px] bg-[#1a1a1c] p-5 md:p-10 text-center lg:pr-20  md:text-left md:w-1/2">
          <div
            className="w-12 h-12 mx-auto md:mx-0"
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img className="mx-auto w-6 pt-2.5" src="./icon2.svg" />
          </div>
          <h3 className="text-[20px] mt-3">Referral rewards</h3>
          <p className="text-[14px] p-3 md:p-0 md:text-[16px] text-[#BBB4B4] opportunity_desc">
            Every purchase & referrer will be rewarded with tokens. Income is
            distributed upto 10 Levels.z
          </p>
        </div>
      </div>
    </div>
  );
};

export default FasterTransactions;
