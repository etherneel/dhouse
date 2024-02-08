
import Header from "./components/Header"
import Footer from "./components/Footer"
import LastCard from './components/LastCard'
import Head from 'next/head'
import GatewayScroll from './components/GatewayScroll/GatewayScroll'
import Card8 from './components/Card8'
import Supercharge from './components/SuperchargeSections/Supercharge'
import BetaAccess from './components/BetaAccess/BetaAccess'
import HeroSection from "./components/HeroSection/HeroSection"
import Interoperability from './components/Interoperability/Interoperability'
import CircutAnimation from './components/CircutAnimation/CircutAnimation'
import GatewayScrollMobile from './components/GatewayScrollMobile/GatewayScroll'
import GovernedCommunity from "./components/GovernedCommunity/GovernedCommunity"
export default function Home() {
  return (
     <div className='bg-[#000000]'>
         <HeroSection/>

        <div className=" px-5 scroll-smooth max-w-screen-xl mx-auto">
      <Head>
        <title>The BEP20 Token govern by the community.!!</title>
        <meta name="description" content="The BEP20 Token govern by the community.!!" />
        <meta property="og:image" content="/dashh.svg" />
      </Head>
        <div className='max-width'>  
         <Header />
         <CircutAnimation/>
         <GovernedCommunity/>
         <Interoperability/>
         <Supercharge/>
         {/* <BetaAccess/> */}
         <Card8/>
         <LastCard/>
        <div className='flex justify-center'><img className='w-[70px]' src='/footer_star.svg'/></div>
        <Footer />
        <GatewayScroll/>
      </div>
    </div>
    </div>
  )
}
