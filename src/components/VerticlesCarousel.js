import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import ver1 from "../images/verticals/aviation.jpg"
import ver2 from "../images/verticals/ai.jpg"
import ver3 from "../images/verticals/banking.jpg"
import ver4 from "../images/verticals/blockchain.jpg"
import ver5 from "../images/verticals/bussiness_m.jpg"
import ver6 from "../images/verticals/enviornment.jpg"
import ver7 from "../images/verticals/healthcare.jpg"
import ver8 from "../images/verticals/hrm.jpg"
import ver9 from "../images/verticals/iot.jpg"
import ver10 from "../images/verticals/muni.jpg"
import ver11 from "../images/verticals/transport.jpg"
import ver12 from "../images/verticals/oil_and_gas.jpg"
import ver13 from "../images/verticals/constructioan_and_inf.jpg"
import ver14 from "../images/verticals/renewable_energy.jpg"
import ver15 from "../images/verticals/robotics.jpg"
// Styled components for the carousel

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const EmblaContainer = styled.div`
  overflow: hidden;
`;

const EmblaSlides = styled.div`
  display: flex;
`;

const EmblaSlide = styled.div`
  position: relative;
  min-width: 24.5%;
  margin: 0vw 0.5%;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  & .slide-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    background:linear-gradient(transparent,#000000);
  }

  & .ver-des{
    position: absolute;
    color: white;
    font-family: "sdel";
    text-align: center;
    bottom: 1vw;
    font-size: 1.1vw;
    letter-spacing: 0.05vw;
    z-index: 2;
  }

  @media screen and (max-width: 768px){
    min-width: 50%;
    height: 55vw;

    .ver-des{
      font-size: 3vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    min-width: 50%;
    height: 55vw;

    .ver-des{
      font-size: 2.5vw;
    }
  }
  
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(45deg,#2f9cda,#014f7c) ;
  border: none;
  box-shadow: 2px 2px 10px #2f9cda60;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
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
const VerticalsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align : 'start' });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);
  
    // Autoplay functionality
    useEffect(() => {
      const autoplay = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext(); // Auto-scroll to next slide every 3 seconds
        }
      }, 3000);
  
      return () => clearInterval(autoplay); // Clean up on unmount
    }, [emblaApi]);
  
    useEffect(() => {
      if (!emblaApi) return;
      emblaApi.on("select", onSelect);
      onSelect();
    }, [emblaApi, onSelect]);
  return (
    <CarouselWrapper>
      <EmblaContainer ref={emblaRef}>
        <EmblaSlides>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver1} alt="Aviation" />
            <h3 className="ver-des">
            Aviation
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver2} alt="Artificial Intelligence" />
            <h3 className="ver-des">
            Artificial Intelligence
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver3} alt="Banking" />
            <h3 className="ver-des">
            Banking
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver4} alt="Blockchain" />
            <h3 className="ver-des">
            Blockchain
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver5} alt="Business Management" />
            <h3 className="ver-des">
            Business Management
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver6} alt="Environment" />
            <h3 className="ver-des">
            Environment
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver7} alt="Healthcare & Pharma" />
            <h3 className="ver-des">
            Healthcare & Pharma
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver8} alt="Human Resource" />
            <h3 className="ver-des">
            Human Resource
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver9} alt="Internet of Things" />
            <h3 className="ver-des">
            Internet of Things
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver10} alt="Municipality" />
            <h3 className="ver-des">
            Municipality
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver11} alt="Transportation & Logistics" />
            <h3 className="ver-des">
            Transportation & Logistics
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver12} alt="Oil & Gas" />
            <h3 className="ver-des">
            Oil & Gas
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver13} alt="Construction & Infrastructure" />
            <h3 className="ver-des">
            Construction & Infrastructure
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver14} alt="Renewable Energy" />
            <h3 className="ver-des">
            Renewable Energy
            </h3>
            </EmblaSlide>
          <EmblaSlide>
            <div className="slide-overlay">
            </div>
            <img src={ver15} alt="Robotics" />
            <h3 className="ver-des">
            Robotics
            </h3>
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

export default VerticalsCarousel;
