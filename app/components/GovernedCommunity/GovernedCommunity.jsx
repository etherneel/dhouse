import React from 'react'

const GovernedCommunity = () => {
  return (
<div>
    <div className='GovernedCommunity text-center py-28'>
         <h2 className='text-3xl font-bold'>
          <span className=''>Dollar house </span> is <br/> Governed by the <br/> <span className='text-[#E07E37]'>community</span> 
         
         </h2>
         <p className='mt-5 md:w-1/3 mx-auto mb-5 text-white'>Community drive program. Learning, educate, people with seminars, academy and perform marketing strategies to grow income. This is the motive of dollar house.</p>
        
         <a href='https://t.me/dollerhouse' className='bg-[#E07E37] mt-5 rounded-3xl py-2 px-4'>Join community</a>
    </div>

    
    <div data-aos="fade-up" data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item mt-10 df-item_last  mb-5 md:flex  justify-between background_box"
          >
            <div className="p-8 md:ml-5 md:max-w-[55%]">
              
              <h3 className="text-2xl font-semibold mt-5">Why you should join <span className="text-[#E07E37]">Dollar House?</span></h3>
               <ul className="mt-5">
                  <li className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                       <p className="text-white">Dollar house is completely decentralized & works on smart contract</p> 
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                    <p className="text-white"> There is no owner or admin authority over the contract or assets of the user</p>   
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                    <p className="text-white">  Dollar house only deals with USDT stablecoin, which eliminates the issue of price fluctuation</p> 
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                     <p className="text-white"> Your income is directly credited to your wallet address without any intermediate party.</p> 
                  </li>
               </ul>
            </div>
            <div className="md:max-w-[300px] pb-4 mt-4 md:mt-10 md:mx-0">
              <img src="/token.svg" />
            </div>
          </div>
          </div>
  )
}

export default GovernedCommunity
