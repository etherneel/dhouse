"use client"
import React, {useEffect} from "react";
import "./Interoperability.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Interoperability = () => {
   
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div>
    <div className="container" data-aos="fade-up">
      <div class="blocks-layout align-center mt-12">
        <div class="h2-headline-layout">
          <div
            data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe5b"
            style={{
              opacity: 1,
              transform:
                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            class="badge-item"
          >
            <div class="badge-bg">
              <div class="badge-content">
                <div >Ecosystem</div>
              </div>
            </div>
          </div>
          <div class="h2-headline">
            <h2
              data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe62"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* One Wallet. Full&nbsp;Interoperability. */}
              Create your network seamlessly
            </h2>
            <p
              data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe64"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
             You can invite your friends and colleagues to grow your network & level income
            </p>
          </div>
        </div>
        <div class="block-item is-icns p-0 df-item_newtop">
          <div class="bi-content is-icns df-item_newtop">
            
            <div
            
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item md:flex justify-around df-item_new"
          >
            <div className="md:w-1/2 ">
              <h3 className="text-3xl font-bold mt-5 md:mt-0 "> <span className="text-[#f3ba2f]">Binance </span>Smart Chain</h3>
              <p className="text-white mt-3 max-w-[350px]">
              The robust & secure blockchain on which the dollar house platform is deployed. Dollar house uses BSC network because
               </p>
              <ul className="mt-5 dashboard_ul">
                <li>
                Robust & reliable 
                </li>
                <li>100% Secure & decentralized</li>
                <li>
                Faster transactions                
                </li>
                <li>
                Minimal gas fees
                </li>
              </ul>
            </div>
            <div className="max-w-[200px] mt-4  md:mt-0 mx-auto md:mx-0">
              <img src="/binance.png" />
            </div>
          </div>
           </div>
           <div class="bi-background">
            <img
              src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f2f628327ae95ef7a63caf_icns-shape-illustration-sq.svg"
              loading="lazy"
              alt=""
              class="icns-image"
            />
            <div class="icns-img_line"></div>
            <div class="icns-img_line btm"></div>
            <div class="block-fade"></div>
            <div class="gradient-bg w-embed isLoaded">
              <canvas
                class="canvas-item-2 isLoaded"
                id="dg-gradient-canvas-2"
                width={1366}
                height={600}
              ></canvas>
            </div>
          </div>
          <div class="bi-background is-devs"><div class="grid-css"></div><div id="stars-devs" class="stars"><canvas class="particles-js-canvas-el" width="894" height="424" ></canvas></div></div>
        </div>
        {/* <div data-aos="fade-up" class="blocks-layout-2items">
          <div class="block-item is-small sec">
            <div class="bi-content_small">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f4b04c2ff7a74f76d2d468_Security-img.svg"
                loading="lazy"
                alt="Multiple Login Options"
                class="secure-image"
              />
              <div class="bi-content_text">
                <h3>
                  Multiple Login Options
                  <br />
                </h3>
                <p class="is-secure-txt">
                  Log in with Google account, scan QR code to sign in to any
                  DApps, or connect your hardware wallets. Keplr supports a
                  variety of login options to extend its connectivity to other
                  wallets and networks.
                </p>
              </div>
              <div class="hero-features-checks is-secure">
                <div class="secure-features">
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f422514744d5e6e15cfe62_k-icon-keys.svg"
                      loading="lazy"
                      alt="Self Custodial"
                      class="icon-medium"
                    />
                    <div>Self Custodial</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b0342ad2dc8c27351008_k-icon-shield.svg"
                      loading="lazy"
                      alt="Keplr Non-Custodial Wallet"
                      class="icon-medium"
                    />
                    <div>Secure</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b034e2860cd37047e62d_k-icon-wallet.svg"
                      loading="lazy"
                      alt="Keplr Hardware wallet support
                           "
                      class="icon-medium"
                    />
                    <div>Flexible</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-sec-bg">
              <div id="stars-icns" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
          <div class="block-item is-small mt-5 md:mt-0">
            <div class="bi-content_small is-skiff">
              <div class="bi-content_subhead">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef3377854a63c6593922bb_logo-partners-skiff.svg"
                  loading="lazy"
                  alt="Keplr and Skiff partnership"
                  class="keplr-logo-partners"
                />
              </div>
              <div class="bi-content_text">
                <h3>
                  End-to-End Encrypted Productivity&nbsp;Tools
                  <br />
                </h3>
                <p class="is-skiff-txt">
                  Evolve your work environment into a Web3&nbsp;productivity
                  powerhouse.
                  <br />
                </p>
              </div>
              <div class="bi-content_buttons is--skiff-btns">
                <a
                  href="https://skiff.com/"
                  target="_blank"
                  class="button hero no-glow w-inline-block flex"
                >
                  <div class="btn-text-small">Get Skiff Free</div>
                  <div class="btn-arrow-item">
                    <div class="icon-small w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8512 8.11253L8.5179 13.4459L7.5679 12.5125L11.3012 8.77919L3.18457 8.7792L3.18457 7.44586L11.3012 7.44586L7.5679 3.71253L8.5179 2.7792L13.8512 8.11253Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="skiff-features">
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e854a6331ca394115_k-icon-calendar-white.svg"
                        loading="lazy"
                        alt="Skiff Calendar"
                        class="icon-medium"
                      />
                      <div>Calendar</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e550ec9f77fc4227f_k-icon-storage-white.svg"
                        loading="lazy"
                        alt="Skiff Storage
                              "
                        class="icon-medium"
                      />
                      <div>Storage</div>
                    </div>
                  </div>
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e7895ffd0be0879f8_k-icon-mail-white.svg"
                        loading="lazy"
                        alt="Skiff Mail
                              "
                        class="icon-medium"
                      />
                      <div>Mail</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350ea31e9882f2a1c2e1_k-icon-white.svg"
                        loading="lazy"
                        alt="Skiff Pages"
                        class="icon-medium"
                      />
                      <div>Pages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-skiff-bg">
              <div class="bg-image-skiff">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063854239603c9bdb7fe_skiff-mail.svg"
                  loading="lazy"
                  alt="Skiff mail"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f306380314aa822049f88f_skiff-cal.svg"
                  loading="lazy"
                  alt="Skiff Calendar"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063849b46c62dbca6796_skiff-pages.svg"
                  loading="lazy"
                  alt="Skiff Pages"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f30639950c48c14bfadee5_skiff-storage.svg"
                  loading="lazy"
                  alt="Skiff Storage"
                  class="skiff-image_icon"
                />
              </div>
              <div id="stars-skiff" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="container" data-aos="fade-up">
      <div class="blocks-layout align-center mt-12">
        <div class="block-item is-icns p-0 df-item_newtop">
          <div  class="bi-content is-icns df-item_newtop">
              <h4 className="text-center text-2xl mx-auto text-[#F3BA2F] font-semibold">Club A </h4>
            <div
            
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item md:flex justify-around df-item_new"
          >
            <div className="max-w-[250px] relative mt-4  md:mt-0 mx-auto md:mx-0">
              <img className="my-auto mt-5 md:mb-5 mb-[40px] md:mt-[35%]" src="/binance1.png" />
               <p className="text-center absolute left-[30%] bottom-0 text-white font-semibold">House 1</p>
            </div>
            <div className="max-w-[300px] relative mt-4  md:mt-0 mx-auto md:mx-0">
              <img className="md:mt-[35%] md:mb-5 mb-[40px] mt-5" src="/binance2.png" />
              <p className="text-center absolute left-[30%] bottom-0 text-white font-semibold">House 5</p>

            </div>
            <div className="max-w-[200px] relative mt-4  md:mt-0 mx-auto md:mx-0">
              <img className="my-5 md:mb-5 mb-[40px]" src="/binance3.png" />
              <p className=" text-center absolute left-[20%] bottom-0 text-white font-semibold">House 15</p>

            </div>
          </div>
           </div>
           <div class="bi-background">
            <img
              src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f2f628327ae95ef7a63caf_icns-shape-illustration-sq.svg"
              loading="lazy"
              alt=""
              class="icns-image"
            />
            <div class="icns-img_line"></div>
            <div class="icns-img_line btm"></div>
            <div class="block-fade"></div>
            <div class="gradient-bg w-embed isLoaded">
              <canvas
                class="canvas-item-2 isLoaded"
                id="dg-gradient-canvas-2"
                width={1366}
                height={600}
              ></canvas>
            </div>
          </div>
          <div class="bi-background is-devs"><div class="grid-css"></div><div id="stars-devs" class="stars"><canvas class="particles-js-canvas-el" width="894" height="424" ></canvas></div></div>
        </div>
        {/* <div data-aos="fade-up" class="blocks-layout-2items">
          <div class="block-item is-small sec">
            <div class="bi-content_small">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f4b04c2ff7a74f76d2d468_Security-img.svg"
                loading="lazy"
                alt="Multiple Login Options"
                class="secure-image"
              />
              <div class="bi-content_text">
                <h3>
                  Multiple Login Options
                  <br />
                </h3>
                <p class="is-secure-txt">
                  Log in with Google account, scan QR code to sign in to any
                  DApps, or connect your hardware wallets. Keplr supports a
                  variety of login options to extend its connectivity to other
                  wallets and networks.
                </p>
              </div>
              <div class="hero-features-checks is-secure">
                <div class="secure-features">
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f422514744d5e6e15cfe62_k-icon-keys.svg"
                      loading="lazy"
                      alt="Self Custodial"
                      class="icon-medium"
                    />
                    <div>Self Custodial</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b0342ad2dc8c27351008_k-icon-shield.svg"
                      loading="lazy"
                      alt="Keplr Non-Custodial Wallet"
                      class="icon-medium"
                    />
                    <div>Secure</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b034e2860cd37047e62d_k-icon-wallet.svg"
                      loading="lazy"
                      alt="Keplr Hardware wallet support
                           "
                      class="icon-medium"
                    />
                    <div>Flexible</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-sec-bg">
              <div id="stars-icns" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
          <div class="block-item is-small mt-5 md:mt-0">
            <div class="bi-content_small is-skiff">
              <div class="bi-content_subhead">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef3377854a63c6593922bb_logo-partners-skiff.svg"
                  loading="lazy"
                  alt="Keplr and Skiff partnership"
                  class="keplr-logo-partners"
                />
              </div>
              <div class="bi-content_text">
                <h3>
                  End-to-End Encrypted Productivity&nbsp;Tools
                  <br />
                </h3>
                <p class="is-skiff-txt">
                  Evolve your work environment into a Web3&nbsp;productivity
                  powerhouse.
                  <br />
                </p>
              </div>
              <div class="bi-content_buttons is--skiff-btns">
                <a
                  href="https://skiff.com/"
                  target="_blank"
                  class="button hero no-glow w-inline-block flex"
                >
                  <div class="btn-text-small">Get Skiff Free</div>
                  <div class="btn-arrow-item">
                    <div class="icon-small w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8512 8.11253L8.5179 13.4459L7.5679 12.5125L11.3012 8.77919L3.18457 8.7792L3.18457 7.44586L11.3012 7.44586L7.5679 3.71253L8.5179 2.7792L13.8512 8.11253Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="skiff-features">
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e854a6331ca394115_k-icon-calendar-white.svg"
                        loading="lazy"
                        alt="Skiff Calendar"
                        class="icon-medium"
                      />
                      <div>Calendar</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e550ec9f77fc4227f_k-icon-storage-white.svg"
                        loading="lazy"
                        alt="Skiff Storage
                              "
                        class="icon-medium"
                      />
                      <div>Storage</div>
                    </div>
                  </div>
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e7895ffd0be0879f8_k-icon-mail-white.svg"
                        loading="lazy"
                        alt="Skiff Mail
                              "
                        class="icon-medium"
                      />
                      <div>Mail</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350ea31e9882f2a1c2e1_k-icon-white.svg"
                        loading="lazy"
                        alt="Skiff Pages"
                        class="icon-medium"
                      />
                      <div>Pages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-skiff-bg">
              <div class="bg-image-skiff">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063854239603c9bdb7fe_skiff-mail.svg"
                  loading="lazy"
                  alt="Skiff mail"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f306380314aa822049f88f_skiff-cal.svg"
                  loading="lazy"
                  alt="Skiff Calendar"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063849b46c62dbca6796_skiff-pages.svg"
                  loading="lazy"
                  alt="Skiff Pages"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f30639950c48c14bfadee5_skiff-storage.svg"
                  loading="lazy"
                  alt="Skiff Storage"
                  class="skiff-image_icon"
                />
              </div>
              <div id="stars-skiff" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
        </div>   */}
      </div>
    </div>
    </div>
  );
};

export default Interoperability;
