import React from "react";

const RewardsTransaction = () => {
  return (
    <div className="text-center my-24">
      <div className="flex space-x-2 text-white justify-center max-w-[270px] p-2 mx-auto rounded-3xl bg-[#224BC1] md:w-1/4">
        <span>
          <img src="./star.svg" />
        </span>
        <span className="text-[13px] md:text-[14px]">
          Earn level income upto 10 levels
        </span>
      </div>
      <h2 className="heading text-[33px] font-semibold text-white my-2 text-center">
        Rewards on every transaction
      </h2>
      <p className="md:w-1/3 mt-5 mb-8 mx-auto text-[15px] text-white">
        Whenever the transaction is made, 15% of the amount is distributed as a
        referral program to all the eligible holders
      </p>
      <div>
        <img className="mx-auto hidden md:block my-5" src="/dashh.svg" />
        <img className="mx-auto block md:hidden  my-5" src="/mobdashh.svg" />
      </div>
    </div>
  );
};

export default RewardsTransaction;
