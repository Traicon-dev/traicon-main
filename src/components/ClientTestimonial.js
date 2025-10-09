import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import timg1 from "../images/testimonial/molt.png"
import timg2 from "../images/testimonial/paolo.png"
import timg3 from "../images/testimonial/dansi.png"
import timg4 from "../images/testimonial/ali.png"
import timg5 from "../images/testimonial/narayanan.png"
import timg6 from "../images/testimonial/berger.png"
import timg7 from "../images/testimonial/fawaz.png"
import timg8 from "../images/testimonial/prem.png"
import timg9 from "../images/testimonial/mallick.png"
import timg10 from "../images/testimonial/almeer.png"
import timg11 from "../images/testimonial/exelen.png"

// Styled components for the carousel

const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  margin-top: 2vw;
`;

const EmblaContainer = styled.div`
  overflow: hidden;
`;

const EmblaSlides = styled.div`
  display: flex;
`;

const EmblaSlide = styled.div`
  position: relative;
  min-width: 33%;
  margin: 0vw;
  height: 25vw;
  border-radius: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .test-box{
    width: 90%;
    height: 90%;
    /* background-color: white; */
    position: relative;
  }
  .test-box:hover .test-bg-top,.test-box:hover .tb-right,.test-box:hover .tpatch{
    background-color: #2f9cda;
  }

  .test-bg-top{
    width: 100%;
    height: 75%;
    border-radius: 1vw 1vw 0vw 1vw;
    background-color: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .test-bg-top p{
    font-family: "figtree";
    font-size: 1vw;
    font-weight: 200;
    width: 80%;
    text-align: justify;
    height: 60%;
    overflow-y: auto;
    padding: 0 0.5vw;
    line-height: 1.4;
  }
  .test-bg-top p::-webkit-scrollbar{
    width: 0.3vw;
    background-color: white;
    border-radius: 1vw;
  }
  .test-bg-top p::-webkit-scrollbar-thumb{
    background-color: gray;
    border-radius: 1vw;
  }
  .test-bg-bottom{
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
  }
  .tb-right{
    width: 35%;
    height: 100%;
    background-color: #212121;
    border-radius: 0 0 1vw 1vw;
  }
 .tb-person{
  width: 65%;
  height: 100%;
  border-radius: 0vw 1vw 0vw 0vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .per-right{
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
 }
 .per-name{
  color: white;
  font-family: Source Sans 3;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1vw;
 }
 .pn2{
  font-size: 0.8vw;
 }
 .per-job{
  color: white;
  font-size: 0.7vw;
  font-style: italic;
 }
 .per-img-box{
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .per-img-cir{
  width: 4.5vw;
  height: 4.5vw;
  border-radius: 50%;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
 }
 .per-img-cir img{
width: 100%;
 }
 
 .tpatch{
  width: 2vw;
  height: 2vw;
  background-color: #212121;
  position: absolute;
  right: 32%;
  bottom: 20%;
  z-index: -1;
 }

 @media screen and (max-width:768px) {
    min-width: 100%;
    height: 70vw;

    .test-bg-top{
      border-radius: 3vw 3vw 0vw 3vw;
    }
    .test-bg-top p{
     font-size: 3vw;
     padding: 3.5vw;
     line-height: 1.6;
    }
    .tb-right{
    border-radius: 0 0 3vw 3vw;
    margin-top: -0.5vw;
  }
  .tb-person{
  border-radius: 0vw 3vw 0vw 0vw;
  }
  .tpatch{
    width: 8vw;
    height: 8vw;
  }
  .per-img-cir{
    width: 11vw;
    height: 11vw;
  }
  .per-name{
    font-size: 3vw;
  }
  .pn2{
    font-size: 2.2vw;
  }
  .per-job{
    font-size: 2.2vw;
  }
  }
  @media screen and (min-width:768px) and (max-width:1023px){
        min-width: 100%;
    height: 70vw;

    .test-bg-top{
      border-radius: 3vw 3vw 0vw 3vw;
    }
    .test-bg-top p{
     font-size: 2.5vw;
     padding: 3.5vw;
     line-height: 1.6;
    }
    .tb-right{
    border-radius: 0 0 3vw 3vw;
    margin-top: -0.5vw;
  }
  .tb-person{
  border-radius: 0vw 3vw 0vw 0vw;
  }
  .tpatch{
    width: 8vw;
    height: 8vw;
  }
  .per-img-cir{
    width: 11vw;
    height: 11vw;
  }
  .per-name{
    font-size: 3vw;
  }
  .pn2{
    font-size: 2.2vw;
  }
  .per-job{
    font-size: 2.2vw;
  }
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
background: none;
  border: 1px solid white;
 border-radius: 50%;
  font-size: 1vw;
  cursor: pointer;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (max-width:768px) {
    display: none;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    display: none;
  }
`;

const PrevButton = styled(Button)`
  left: -5vw;
`;

const NextButton = styled(Button)`
  right: -5vw;
`;

// Carousel Component
const ClientTestimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return; // Stop autoplay when hovered
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext(); // Auto-scroll to next slide every 3 seconds
    }, 3000);

    return () => clearInterval(autoplay); // Clean up on unmount
  }, [emblaApi, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  return (
    <CarouselWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <EmblaContainer ref={emblaRef}>
        <EmblaSlides>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>There are a lot of big conferences out there but this doesn’t mean that quality is the same. Your conference was a good example how to show out Blockchain, Bitcoin and Fintech products in a characteristic from first phase up to real existing projects.</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg1} alt="Joerg Molt" />
</div>
</div>
<div className="per-right">
  <div className="per-name"> Joerg Molt</div>
  <div className="per-job">  Bitcoin Co-Founder & Founder Satoshi School</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“The World Blockchain Congress in Dubai was a real surprise. Great professionalism of the organizers and excellent level of the speakers and the participants. A congress where we talked about real Blockchain projects and concrete imminent developments.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg2} alt="Paolo Letti eri" />
</div>
</div>
<div className="per-right">
  <div className="per-name">  Paolo Letti eri</div>
  <div className="per-job"> Chief Executive Officer</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“An excellent platform to collaborate between the technology enthusiasts and business leaders.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg3} alt="Danish Chotani" />
</div>
</div>
<div className="per-right">
  <div className="per-name">  Danish Chotani</div>
  <div className="per-job">    Chief Executive Officer</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>Pleased to be part of this Congress about the Blockchain and congratulate the organizers for such a successful event.</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg4} alt="His Excellency Mohamed Ali AlQaed" />
</div>
</div>
<div className="per-right">
  <div className="per-name pn2">    His Excellency Mohamed Ali AlQaed </div>
  <div className="per-job">    Chief Executive, Information & eGovernment Authority, Kingdom of Bahrain</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“Thank you for hosting the WBC in Bahrain. I'm sure it was useful to the Community here and I hope that Traicon found it useful too. I personally enjoyed all the sessions as well as the meetings with some of the ICO issuers. The interest in Blockchain and Crypto space is beginning to shape well here in Bahrain (and the GCC in general) and I'm sure similar conferences such as these would help fuel the Blockchain ecosystem in the region.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg5} alt="Narayan Ganapathy" />
</div>
</div>
<div className="per-right">
  <div className="per-name">   Narayan Ganapathy</div>
  <div className="per-job">    CEO Angivest Ventures</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“It’s an amazing platform, the congress met all our expectations.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg6} alt="Wernhard Berger" />
</div>
</div>
<div className="per-right">
  <div className="per-name">    Wernhard Berger</div>
  <div className="per-job">   Co Founder Grapevine World GmbH</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“Great event for an introduction to blockchain and its advantages.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg7} alt="Fawaz Shakralla" />
</div>
</div>
<div className="per-right">
  <div className="per-name">   Fawaz Shakralla</div>
  <div className="per-job">    Managing Director Bahrain Blockchain Group</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“This is one of the first in Kuwait for smart cities and we are very happy to participate in this summit. Since we were expecting some good reach in the market with various ministries like public authority for housing and welfare, ministry of public works, MoC, public authority for roads and transport and we are glad to meet them and we’d like to thank the TraiCon who organized it well. The invitees were to see various presentations and seminars. Thank you TraiCon for this opportunity to meet all our clients under one roof.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg8} alt="PREM KUMAR" />
</div>
</div>
<div className="per-right">
  <div className="per-name">  PREM KUMAR</div>
  <div className="per-job">    Manager- Automation Division Hydrotek Engineering Company</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“This event organized by TraiCon is a huge success, the reason being lot ministries attended and liked the products, ideas and innovative solutions which can be implemented in future for Kuwait smart cities. All the delegates who attended enjoyed the platform as it was the first time in Kuwait to host such an event and we really appreciate TraiCon events who put in some good effort to make this event a success. We are also looking forward to attending similar events in the future.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg9} alt="MOHAMMED MUBIN MALLICK" />
</div>
</div>
<div className="per-right">
  <div className="per-name">     MOHAMMED MUBIN MALLICK</div>
  <div className="per-job">     Vice President Kiran Technical Company - Kuwait</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“The event for us was interesting to meet a lot of interesting people and we had an opportunity to present our company products to a good audience. The event was well organized, the agenda was great and we are very happy to be here.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg10} alt="ALESSIO QUAGLIARIELLO" />
</div>
</div>
<div className="per-right">
  <div className="per-name"> ALESSIO QUAGLIARIELLO</div>
  <div className="per-job">  CEO</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>
          <EmblaSlide>
         <div className="test-box">
         <div className="tpatch"></div>
      <div className="test-bg-top">
     <p>“The summit was a helpful platform to showcase our products and reach out to the audience. This keeps our company moving forward especially the delegates from ministries and the support you are getting from the government and the platform that you provide for interaction between the ministries and leading players from our sector gives an advantage for companies like us for expansion and future business. From Almeer Team we would like to thank the organizers & attendees and hope to get more platforms in the future to showcase our capabilities.”</p> 
      </div>
      <div className="test-bg-bottom">
      <div className="tb-person">
      <div className="per-img-box">
<div className="per-img-cir">
<img src={timg11} alt="SUHAG SYED" />
</div>
</div>
<div className="per-right">
  <div className="per-name">  SUHAG SYED</div>
  <div className="per-job">     Sales & Export Department</div>
</div>

        </div>
        <div className="tb-right">

        </div>
        
      </div>
         </div>
          </EmblaSlide>

        </EmblaSlides>
      </EmblaContainer>
      <PrevButton onClick={scrollPrev} disabled={!prevBtnEnabled}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"/>
  </svg>
      </PrevButton>
      <NextButton onClick={scrollNext} disabled={!nextBtnEnabled}> 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
  </svg>
  </NextButton>
    </CarouselWrapper>
  );
};

export default ClientTestimonial;
