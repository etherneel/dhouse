"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
const LastCard = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
    const [tabOpen, setTabOpen] = useState(1)
    
  return (
    <div data-aos="fade-up" className='relative md:flex justify-between  border-color  p-3 rounded-2xl space-x-5'>
        <div className='bi-content is-chains-cont fifty_width'> 
        <div className='my-auto whitespace-nowrap z-20 last_box_right_mobile'>
            <h2 className='text-3xl font-semibold'>Built for Developers</h2>
          <p className='text-[14px] mt-3'> Keplr is open-sourced. Add the seamless <br/> wallet experience easily to your products</p> 
        </div>
            <div className='flex border-color  p-0.5 w-full  rounded-full'>
                <button onClick={()=>{setTabOpen(1)}} className={`${tabOpen == 1 ? "bg-white  py-2 text-black border-none rounded-full" :   "py-2 text-white border-none rounded-full px-6"} font-semibold sm:w-full w-1/2`}>Native</button>
                <button onClick={()=>{setTabOpen(2)}} className={`${tabOpen == 2 ? "bg-white  py-2 text-black border-none rounded-full" :   "py-2 text-white border-none rounded-full "} font-semibold sm:w-full w-1/2`}>Permissionless</button>
            </div>
           {tabOpen == 1? 
           <div className='width_hundred'>
           {/* <div class="grid-css"></div> */}
            <div className='first-tab border-color  bg-[#0f1f25] w-full rounded-2xl p-8 mt-5'>
            <div className='md:flex justify-between my-3 space-x-8'>
                <ul>
                    <li className='pb-5 text-sm flex '><img src='/tick.svg'/>Token Transfers</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Transaction Signing</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Google Login</li>
                </ul>
                <ul className='ml-0-lastcard_left'>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Account Management</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Endpoint Infrastructure</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Staking / Governance</li>
                </ul>
            </div>
            <hr/>
             <div className='md:flex justify-between mt-6'>
                <div className='m-3'> <Link href="#">Get Started</Link></div>
                <div className='h-[40px] bg-[#b96c33] py-2 px-4 rounded-full text-black'>
                     <Link className='' href="#">Learn More</Link>
                </div>
             </div>
            </div> </div> :  tabOpen == 2 ?  <div className=' border-color  bg-[#151827] rounded-2xl p-8 mt-5 width_hundred'>
            <div className='md:flex justify-between my-3 space-x-8'>
                <ul>
                    <li className='pb-5 text-sm flex'> <img src='/tick.svg'/>Token Transfers</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Transaction Signing</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Google Login</li>
                </ul>
                <ul className='ml-0 ul_lower'>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Account Management</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Endpoint Infrastructure</li>
                    <li className='pb-5 text-sm flex'><img src='/tick.svg'/>Staking / Governance</li>
                </ul>
            </div>
            <hr/>
             <div className='md:flex justify-between mt-6 '>
                <div className='m-3'> <Link href="#">Get Started</Link></div>
                <div className='h-[40px] bg-[#b96c33] py-2 px-4 rounded-full text-black'>
                     <Link className='' href="#">See Documentation</Link>
                </div>
             </div>
            </div> : ""
           }
        </div>
        <div className='my-auto mx-5 z-20 last_box_right'>
            <h2 className='text-3xl font-semibold'>Built for Developers</h2>
          <p> Keplr is open-sourced. Add the seamless <br/> wallet experience easily to your products</p> 
        </div>
        <div class="bi-background is-devs"><div class="grid-css"></div><div id="stars-devs" class="stars"><canvas class="particles-js-canvas-el" width="894" height="424" style={{width:100, height:100}}></canvas></div></div>
     </div>
  )
}

export default LastCard
