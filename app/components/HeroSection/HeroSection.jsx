import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <section 
        data-w-id="fdc7ae2a-19d6-71bb-fc08-93dd6484428d mt-20"
        class="section hero hero_sectionMain px-4 mt-0"
      >
        <div class="container md:flex  mt-28">
          <div class="hero-layout">
            <div
              id="w-node-_33f1d247-9d2f-d5d7-ee5a-c3a9cd8f1aad-4456c467"
              class="hero-content hero_section_left_text"
            >
              <h1
                data-w-id="1ee56df2-2e2f-961f-7511-d04f91d1b32e"
                style={{
                  opacity: 1,
                  lineHeight: "1.1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                class="hero-display flex text-white"
              >
                The <br/> <span className="text-[#b96c33]">Dollar House </span> platform
              </h1>
              <p
                data-w-id="92d155b7-9470-c5ca-9d45-ab6f46cc5671"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                class="hero-p"
              >
               The best & advanced networking platform
               deployed on Binance smart chain network, with
               superfast transactions & speed. The crypto machine for all crypto enthusiasts</p>
              <div
                id="w-node-_765fdd2c-39bd-d271-2e73-943d66457b51-4456c467"
                class="hero-install-item"
              >
                <div
                  data-w-id="a75c84dd-7eca-02c3-602e-e10285e46647"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  class="hero-btns-layout"
                >
                  <a href="/download" class="button hero flex">
                     
                    <div class="btn-text-small flex">Connect to Dapp</div>
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
                  <div class="users-item"> 
                  <a href="https://t.me/dollerhouse">
                    <img
                      src="/telegram.png"
                      loading="lazy"
                      alt="Keplr Users"
                      class="users-item__pictures"
                    />
                   </a>
                    <img
                       src="/twitter.png"
                       loading="lazy"
                        alt="Keplr Users"
                        class="users-item__pictures"
                    />
                    <img
                       src="/instagram.png"
                       loading="lazy"
                       alt="Keplr Users"
                       class="users-item__pictures"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
                <img src="/line.svg"/>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default HeroSection;
