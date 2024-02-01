import React, { useRef, useEffect } from 'react';
import logo from "../image/Group 11 1.svg";
import { Link } from 'react-router-dom';
import mainimg from "../image/logosample.svg";
import bgvideo from "../image/bgg.MP4";
import pdffeatures from "../image/FeaturesofDollarHouse.pdf";

const Dashbord = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay the video
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLitepaperClick = () => {
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = pdffeatures; // Use the imported variable directly
    link.download = 'Litepaper.pdf'; // Set the download filename
  
    // Append the anchor element to the body
    document.body.appendChild(link);
  
    // Programmatically trigger a click event on the anchor element
    link.click();
  
    // Remove the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <div className='dashbord_main' onClick={handleVideoPlay}>
      <div className='video-background'>
        <video ref={videoRef} playsInline loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>
      <div className='container'>
        <div className='navabr_main'>
          <div className='logo'>
            <img src={logo} alt='logo' className='logo_navbar' />
          </div>
          <div className='connect_btn'>
            <button >Connect to Dapp</button>
          </div>
        </div>
        <div className='section1'>
          <div className='dollar_house_left'>
            <h2> <span>Dollar house </span>platform <br></br>
              is launching soon</h2>
            <p>The best & advanced decentralized networking platform
              deployed on Binance smart chain network, with
              superfast transactions & speed. The house of
              investment is coming for you all..</p>
            <div className='joinn_two_btn'>
              <Link to="#" >Join now</Link>
              <Link className='active_link' onClick={handleLitepaperClick}>Litepaper</Link>
            </div>
          </div>
          <div className='dollar_house_main_img_right'>
            <img src={mainimg} className='mainimg' alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
