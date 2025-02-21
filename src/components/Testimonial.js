import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { Autoplay } from 'swiper/modules';
import timg1 from "../images/testimonial/molt.jpg"
import timg2 from "../images/testimonial/paolo.png"
import timg3 from "../images/testimonial/dansi.jpg"
import timg4 from "../images/testimonial/ali.jpg"
import timg5 from "../images/testimonial/narayanan.jpg"
import timg6 from "../images/testimonial/berger.jpg"
import timg7 from "../images/testimonial/fawaz.jpg"
import timg8 from "../images/testimonial/prem.jpg"
import timg9 from "../images/testimonial/mallick.jpg"
import timg10 from "../images/testimonial/almeer.jpg"
import timg11 from "../images/testimonial/exelen.png"

import 'swiper/css';

// Styled components for the carousel and boxes
const CarouselWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2vw;
  position: relative;
  z-index: 2;

  & .swiper .swiper-wrapper .swiper-slide-active {
    box-shadow: none;
  }

  & .swiper .swiper-wrapper .swiper-slide-prev,&  .swiper .swiper-wrapper .swiper-slide-next{
    box-shadow: none;
  }
  & .swiper .swiper-wrapper .swiper-slide-prev .test-img-box,&  .swiper .swiper-wrapper .swiper-slide-next .test-img-box{
    opacity: 0.5;
  }

 & .swiper .swiper-wrapper .swiper-slide-active .testbox{
  transform: scale(1.8);
  z-index: 10;

}
& .swiper .swiper-wrapper .swiper-slide-active .testbox .test-img-box{
  opacity: 1;
}
& .swiper .swiper-wrapper .swiper-slide-active .test-name{
  height: auto;
  opacity: 1;
}
& .swiper .swiper-wrapper .swiper-slide-active .test-designation{
  height: auto;
  opacity: 1;
}
& .swiper .swiper-wrapper .swiper-slide-prev .testbox,&  .swiper .swiper-wrapper .swiper-slide-next .testbox{
    transform: scale(1.4); /* Slightly larger adjacent boxes */
    box-shadow: none;
  
   
  }

  & .testbox{
  height: 14vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  transition: all 0.5s ease;
  width: 110%;
  margin-left: 5%;
}



& .test-img-box{
  width: 3vw;
  height: 3vw;
  background-color: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0.3;
} 

& .test-img{
  width: 100%;
}
& .test-name{
  font-size: 0.55vw;
  font-family: "Source Sans 3";
  text-transform: uppercase;
  font-weight: 600;
height: 0;
opacity: 0;
transition: all 0.5s ease;
  text-align: center;
  margin-top: 0.3vw;
}
& .test-designation{
  font-family: "Source Sans 3";
  font-size: 0.55vw;
  text-align: center;
  transition: all 0.5s ease;
  font-weight: 400;
  height: 0;
  opacity: 0;
}
`;



const ContentBox = styled.div`
  height: 10vw;
  margin-top: 1vw;
  width: 100%;
  font-family: "Poppins";
  font-size: 1vw;
  text-align: center;
  font-weight: 400;
  transition: all 0.5s ease;
  display: flex;
  opacity: 0.9;
  justify-content: center;
  line-height: 1.7;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  z-index: 10;
  border: 0.1vw solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: -10vw;
`;

const NextButton = styled(NavigationButton)`
  right: -10vw;
`;

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); 

  return (
    <CarouselWrapper >
      <Swiper
       ref={swiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={50}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed = {800}
        modules={[Autoplay]}
      >
        {/* Static HTML Slides */}
        <SwiperSlide>
          <div className="testbox">
            <div className="test-img-box">
          <img src={timg1} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Joerg Molt
            </div>
            <div className="test-designation">
            Bitcoin Co-Founder & Founder Satoshi School
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg2} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Paolo Letti eri
            </div>
            <div className="test-designation">
           Chief Executive Officer
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg3} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Danish Chotani
            </div>
            <div className="test-designation">
            Chief Executive Officer
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg4} alt="" className="test-img" />
            </div>
            <div className="test-name">
            His Excellency Mohamed Ali AlQaed 
            </div>
            <div className="test-designation">
            Chief Executive, Information & eGovernment Authority, Kingdom of Bahrain
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg5} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Narayan Ganapathy
            </div>
            <div className="test-designation">
           CEO Angivest Ventures
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg6} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Wernhard Berger
            </div>
            <div className="test-designation">
            Co Founder Grapevine World GmbH
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg7} alt="" className="test-img" />
            </div>
            <div className="test-name">
            Fawaz Shakralla
            </div>
            <div className="test-designation">
            Managing Director Bahrain Blockchain Group
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg8} alt="" className="test-img" />
            </div>
            <div className="test-name">
            PREM KUMAR
            </div>
            <div className="test-designation">
            Manager- Automation Division Hydrotek Engineering Company
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg9} alt="" className="test-img" />
            </div>
            <div className="test-name">
            MOHAMMED MUBIN MALLICK
            </div>
            <div className="test-designation">
            Vice President Kiran Technical Company - Kuwait
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg10} alt="" className="test-img" />
            </div>
            <div className="test-name">
            ALESSIO QUAGLIARIELLO
            </div>
            <div className="test-designation">
             CEO
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testbox">
            
            <div className="test-img-box">
<img src={timg11} alt="" className="test-img" />
            </div>
            <div className="test-name">
            SUHAG SYED
            </div>
            <div className="test-designation">
           Sales & Export Department
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
      <PrevButton onClick={() => swiperRef.current.swiper.slidePrev()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"/>
  </svg>
      </PrevButton>
      <NextButton onClick={() => swiperRef.current.swiper.slideNext()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
  </svg>
      </NextButton>
      <ContentBox>
        {/* Change content based on activeIndex */}
        {activeIndex === 0 && "“There are a lot of big conferences out there but this doesn’t mean that quality is the same. Your conference was a good example how to show out Blockchain, Bitcoin and Fintech products in a characteristic from first phase up to real existing projects.”"}
  {activeIndex === 1 && "“The World Blockchain Congress in Dubai was a real surprise. Great professionalism of the organizers and excellent level of the speakers and the participants. A congress where we talked about real Blockchain projects and concrete imminent developments.”"}
  {activeIndex === 2 && "“An excellent platform to collaborate between the technology enthusiasts and business leaders.”"}
  {activeIndex === 3 && "“Pleased to be part of this Congress about the Blockchain and congratulate the organizers for such a successful event.”"}
  {activeIndex === 4 && "“Thank you for hosting the WBC in Bahrain. I'm sure it was useful to the Community here and I hope that Traicon found it useful too. I personally enjoyed all the sessions as well as the meetings with some of the ICO issuers. The interest in Blockchain and Crypto space is beginning to shape well here in Bahrain (and the GCC in general) and I'm sure similar conferences such as these would help fuel the Blockchain ecosystem in the region.”"}
  {activeIndex === 5 && "“It’s an amazing platform, the congress met all our expectations.”"}
  {activeIndex === 6 && "“Great event for an introduction to blockchain and its advantages.”"}
  {activeIndex === 7 && "“This is one of the first in Kuwait for smart cities and we are very happy to participate in this summit. Since we were expecting some good reach in the market with various ministries like public authority for housing and welfare, ministry of public works, MoC, public authority for roads and transport and we are glad to meet them and we’d like to thank the TraiCon who organized it well. The invitees were to see various presentations and seminars. Thank you TraiCon for this opportunity to meet all our clients under one roof.”"}
  {activeIndex === 8 && "“This event organized by TraiCon is a huge success, the reason being lot ministries attended and liked the products, ideas and innovative solutions which can be implemented in future for Kuwait smart cities. All the delegates who attended enjoyed the platform as it was the first time in Kuwait to host such an event and we really appreciate TraiCon events who put in some good effort to make this event a success. We are also looking forward to attending similar events in the future.”"}
  {activeIndex === 9 && "“The event for us was interesting to meet a lot of interesting people and we had an opportunity to present our company products to a good audience. The event was well organized, the agenda was great and we are very happy to be here.”"}
  {activeIndex === 10 && "“The summit was a helpful platform to showcase our products and reach out to the audience. This keeps our company moving forward especially the delegates from ministries and the support you are getting from the government and the platform that you provide for interaction between the ministries and leading players from our sector gives an advantage for companies like us for expansion and future business. From Almeer Team we would like to thank the organizers & attendees and hope to get more platforms in the future to showcase our capabilities.”"}
     </ContentBox>
    </CarouselWrapper>
  );
};

export default Testimonial;



