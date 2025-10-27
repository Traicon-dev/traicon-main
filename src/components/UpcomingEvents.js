import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import anime from "animejs";
import eventBg from "../images/HomeEvents/events-bg2.jpg";
import dcisIndialogo from "../images/HomeEvents/dcis_india.png"
import dcisIndBg from "../images/events/dcis/dcis__ind_bg.jpg"
import ogtsLogo from "../images/HomeEvents/ogts_logo.png"
import ogtsBg from "../images/HomeEvents/ogts_event.JPG"
import frsbhLogo from "../images/HomeEvents/frs_logo-bahrain.svg"
import frsbhBg from "../images/HomeEvents/frs_bh_img.jpg"
import whrphBg from "../images/events/hr/hr_ph_bg.jpg"
import whrphLogo from "../images/events/hr/whr_ph_logo.png"
import crsphLogo from "../images/events/crs/crs_ph-logo.png"
import crsphBg from "../images/events/crs/crs_ph_bg.jpg"
import dcisphBg from "../images/events/dcis/dcis_ph_bg..jpg"
import dcisphLogo from "../images/events/dcis/dcis_ph_logo.png"
import frsphBg from "../images/events/frs/fintech_ph_bg.jpg"
import frsphLogo from "../images/events/frs/frs_ph_logo.svg"
import rmsIndBg from "../images/events/indian/rms_bg.jpg"
import rmsIndLogo from "../images/events/indian/RMS logo 2025.png"
import crsIndBg from "../images/events/indian/cyber_ind_bg.jpg"
import crsIndLogo from "../images/events/indian/cyber_ind_logo.svg"
import frsmlBg from "../images/events/frs/frs_malaysia_bg.jpg"
import frsmlLogo from "../images/events/frs/frs_malaysia_logo.svg"
import frsksaBg from "../images/events/frs/frs_saudi_bg.jpg"
import frsksaLogo from "../images/events/frs/frs_saudi_logo.png"
import crsthaiLogo from "../images/events/crs/thaiCyberX_logo.png"
import crsThaiBg from "../images/events/crs/cyberThaibg.jpg"
import drsbhLogo from "../images/events/drs/drs_bahrain_logo.png"
import drsbhBg from "../images/events/drs/drs_bahrain_bg.jpg"
import frsvnBg from "../images/events/frs/frs_vietnam.jpg"
import frsvnLogo from "../images/events/frs/frs_logo_vietnam.png"
import crskwLogo from "../images/events/crs/cyber_kw.png"
import crskwBg from "../images/events/crs/cyber_kuwait_bg.jpg"
import airphLogo from "../images/events/air/air_ph_logo.png"
import airphbg from "../images/events/air/air_ph_bg.jpg"
import frsuaeBg from "../images/events/frs/frs_abudhabi_bg.jpg"
import frsuaeLogo from "../images/events/frs/fintech_abudhabi_logo.png"
import whrindBg from "../images/events/hr/hr_indonesia_bg.webp"
import whrindLogo from "../images/events/hr/whr_indonesia.svg"
import amsBg from "../images/events/indian/ams_bg.jpg"
import amsLogo from "../images/events/indian/ams_logo.png"
import idcBg from "../images/events/indian/idc_bg.jpg"
import idcLogo from "../images/events/indian/idc_logo.png"



// Styled components for the carousel
const EventContainer = styled.div`
  width: 100%;
  height: 49vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(${eventBg}); */
  background-size: cover;
  position: relative;

  & .event-c-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(black, transparent, black);
  }

  & .event-c-overlay2 {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to right, black, transparent, transparent);
  }


  @media screen and (max-width:767px) {
    height: auto;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
 height: auto;
  }
`;

const EventsContent = styled.div`
  width: 75%;
  height: 45vw;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:768px) {
    height: auto;
    width: 80%;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
      height: auto;
    width: 80%;
  }
`;

const EventForm = styled.div`
width: fit-content;
height: auto;
position: absolute;
right: 0;
z-index: 2;
top: 0.5vw;
display: none;

Select{
  width: 12vw;
  height: 2.5vw;
  border-radius: 3vw;
  background: none;
  border: 2px solid #2f9cda;
  color: white;
  padding: 0 0.5vw;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 0.9vw;
}
Option{
  color: black;
  background: none;
  font-size: 0.9vw;
  font-family: "Montserrat";
}

@media screen and (max-width:767px) {
  right: auto;
  left: 0;
  top: 15vw;

Select{
  width: 35vw;
  height: 7.5vw;
  font-size: 3vw;
  border-radius: 10vw;
}
Option{
  font-size: 3vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
    right: auto;
  left: 0;
  top: 15vw;

Select{
  width: 35vw;
  height: 7.5vw;
  font-size: 3vw;
  border-radius: 10vw;
}
Option{
  font-size: 3vw;
}
}
`;

const EventH = styled.h2`
  font-size: 4vw;
  color: white;
  font-family: "sdel";
  letter-spacing: 0.05vw;
  width: fit-content;

  @media screen and (max-width:767px) {
    font-size: 8vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    font-size: 6vw;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 125%;
  margin: 0 auto;
  margin-top: 2vw;

  & .eventslide {
    height: 27vw;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
  }
  & .event-slide-name{
    color: white;
    font-family: "figtree";
    font-size: 1.7vw;
    max-width: 90%;
    font-weight: 500;
    margin-top: 1vw;
    transition: all 0.3s ease;
  }
  & .active .event-slide-name{
    font-size: 2vw;
  }

  & .eventdate-place{
    font-size: 1vw;
    font-family: "figtree";
    font-weight: 300;
    color: lightgray;
    transition: all 0.3s ease;
  }

  & .active .eventdate-place{
    font-size: 1.2vw;
  }

  & .event-slide-box{
    width: 100%;
    height: 19vw;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  & .event-slide-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: black;
    transition: all 0.3s ease;
    opacity: 0.6;
  }
  
  & .event-slide-overlay2{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
 background: linear-gradient(to right,transparent,black);
    transition: all 0.3s ease;
    opacity: 0;
  }

  & .active .event-slide-overlay2{
    opacity: 0.5;
  }
  
  
  & .event-slide-box img{
    width: 100%;

  }
  & .event-slide-patch{
    position: absolute;
    z-index: 2;
    border-radius: 2vw;
    opacity: 0;
    transition: all 0.3s ease;
   display: flex;
   align-items: center;
   justify-content: center;
  }
  & .event-slide-patch svg{
    width: 25vw;
    left: -10vw;
    position: absolute;
    top: -4vw;
    transform: rotate(-90deg);
  }
  & .event-slide-box .event-logo{
    position: absolute;
    width: 11vw;
   right: 1vw;
   top: 1vw;
   z-index: 2;
  }
  & .event-slide-box .el2{
    width: 8vw;
  }
  & .eweb-link{
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    padding: 0.8vw 1.7vw;
    background-color: #2f9cda;
    border-radius: 1vw 0 0 0;
    display: none;
  }
  .concluded-box{
    position: absolute;
    font-family: "concluded";
    z-index: 5;
    right: 1vw;
    top: 5vw;
    font-size: 1.5vw;
    border: 1px solid red;
    color: red;
    padding: 0.3vw 1vw;
    padding-top: 0.5vw;
    border-radius: 1vw;
  }
  
  & .active .eweb-link{
    display: block;
  }

  & .eweb-link a{
    color: black;
    text-decoration: none;
    font-family: "bebas neue";
    font-size: 1.2vw;
    font-weight: 300;
  }
  & .active .event-slide-box .event-slide-overlay{
   opacity: 0;
  }

  & .active .event-slide-box .event-slide-patch{
   opacity: 1;
  }

  & .carousel-button {
    position: absolute;
   bottom: -5.5vw;

    color: white;
   display: flex;
   align-items: center;
   justify-content: center;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-size: 2vw;
    line-height: 0.5vw;
    z-index: 10;
    border-radius: 50%;
    border: 0.2vw solid #2f9cda;
    background: none;
    width: 3vw;
    height: 3vw;
  }
  & .carousel-button div{
    transform: translateY(-0.2vw);
  }
  & .prev {
    left: 0;
  }

  & .next {
    left: 4vw;
  }
  & .next div{
    transform:translateY(-0.2vw) translateX(0.1vw);
  }

  @media screen and (max-width:768px) {
    width: 100%;

    .eventslide{
      height: 80vw;
      margin-top: 20vw;
    }
    .event-slide-box{
      height: 45vw;
    }
    .active .event-slide-name{
      font-size: 5vw;
    }
    .active .eventdate-place{
      font-size: 3vw;
      margin-top: 2vw;
    }
    & .event-slide-box .event-logo{
    position: absolute;
    right: 4vw;
    top: 4vw;
  width: 24vw;
   z-index: 2;
  }
    .eweb-link{
    padding: 2vw 3vw;
  }
  .eweb-link a{
    font-size: 4vw;
  }
  .carousel-button{
    bottom: 3.5vw;
    width: 8vw;
    height: 8vw;
    font-size: 5vw;
  }
  .next {
    left: 10vw;
}
.concluded-box {
    right: 2vw;
    top: 12vw;
    font-size: 4vw;
    padding: 0.3vw 1vw;
    padding-top: 1.5vw;
    border-radius: 1vw;
}
    }
    @media screen and (min-width:768px) and (max-width:1023px){
        width: 100%;
        & .event-slide-box .event-logo{
    position: absolute;
    right: 4vw;
    top: 4vw;
  width: 24vw;
   z-index: 2;
  }
  .concluded-box {
    right: 2vw;
    top: 12vw;
    font-size: 4vw;
    padding: 0.3vw 1vw;
    padding-top: 1.5vw;
    border-radius: 1vw;
}
    .eventslide{
      height: 80vw;
      margin-top: 10vw;
    }
    .event-slide-box{
      height: 45vw;
    }
    .active .event-slide-name{
      font-size: 4vw;
    }
    .active .eventdate-place{
      font-size: 2.5vw;
      margin-top: 2vw;
    }
    .eweb-link{
    padding: 2vw 3vw;
  }
  .eweb-link a{
    font-size: 3vw;
  }
  .carousel-button{
    bottom: 3.5vw;
    width: 5vw;
    height: 5vw;
    font-size: 3vw;
  }
  .next {
    left: 7vw;
}
    }
 
`;
const EventLine = styled.div`
width: 70%;
height: 2px;
background: linear-gradient(to right,#2f9cda,#2f9cda,transparent);
position: absolute;
bottom: 6.2vw;
margin-left: 10%;

@media screen and (max-width:768px){
  width: 50%;
  margin-left: 25%;
}
@media screen and (min-width:768px) and (max-width:1023px){
    width: 50%;
  margin-left: 25%;
}
`;

const ViewAll = styled.button`
background: none;
border: none;
width: 12vw;
height: 3vw;
border: 2px solid #2f9cda;
border-radius: 2vw;
display: flex;
align-items: center;
color: white;
position: absolute;
right: 0;
bottom: 4.8vw;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
font-family: "figtree";
font-size: 1.1vw;
font-weight: 500;
cursor: pointer;

@media screen and (max-width:768px) {
    width: 20vw;
    height: 6vw;
   font-size: 3vw;
    bottom: 4.7vw;
    border-radius: 7vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
      width: 20vw;
    height: 6vw;
   font-size: 2.5vw;
    bottom: 4vw;
    border-radius: 7vw;
  }
`;


const AnimatedText = ({ lines }) => {
  const textRef = useRef(null);

  // Function to run the animation
  const runAnimation = () => {
    const lines = textRef.current.querySelectorAll(".line");

    lines.forEach((line, index) => {
      const letters = line.querySelectorAll(".letter");

      // Animate each line after the previous one finishes
      anime.timeline({ loop: false })
        .add({
          targets: letters,
          translateY: [100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 20 * i, // Delays each letter within the line
        },); // Delays each line animation by 1 second (adjustable)
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        }
      },
      { threshold: 0.1 } // Adjust this value to determine how much of the component needs to be visible before triggering
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <AnimatedContainer>
      <div ref={textRef}>
        {lines.map((line, index) => (
          <Line className="line" key={index}>
            {line.split("").map((letter, idx) => (
              <Letter className="letter" key={idx}>
                {letter === " " ? "\u00A0\u00A0" : letter}
              </Letter>
            ))}
          </Line>
        ))}
      </div>
    </AnimatedContainer>
  );
};
const AnimatedContainer = styled.div`

  font-weight: bold;
  overflow: hidden;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
`;

const Line = styled.div`
  display: block;
  margin-bottom: 1vw;
  white-space: pre-wrap; /* Ensures that the line breaks are preserved */
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(2vw);
`;


const UpcomingEvents = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
      loop: true,
    },
    breakpoints: {
      '(max-width: 760px)': {
        slides: {
          perView: 1,
        },
      },
      '(max-width: 1023px)': {
        slides: {
          perView: 1,
        },
      },
    },
    onInitialized: (slider) => {
      setActiveIndex(slider.track.details.rel);  // Set initial active index
    },
    onChange: (slider) => {
      const currentSlideIndex = slider.track.details.rel;
      setActiveIndex(currentSlideIndex);
    },
    slideChanged: (slider) => {
      const currentSlideIndex = slider.track.details.rel;
      setActiveIndex(currentSlideIndex);
    },
  });
  // Autoplay functionality
  const autoplayRef = useRef();

  useEffect(() => {
    autoplayRef.current = () => {
      if (instanceRef.current) {
        instanceRef.current.next(); // Go to the next slide
      }
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      autoplayRef.current();
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);
  const [selectedGenre, setSelectedGenre] = useState("ALL GENRES");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  }, [activeIndex]);

  const handleSlideClick = (index) => {
    console.log("Clicked slide index:", index);
    if (instanceRef.current) {
      if (typeof instanceRef.current.moveToIdx === 'function') {
        instanceRef.current.moveToIdx(index);  // Move to the clicked slide
      } else {
        console.error("Error: moveTo method is not available on the slider instance.");
      }
    } else {
      console.error("Error: slider instanceRef is not initialized.");
    }
  };

  const goToPrevSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const goToNextSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  const handleFilterChange = (e) => {
    setSelectedGenre(e.target.value);
    console.log(selectedGenre)
  };
  return (
    <EventContainer>
      <div className="event-c-overlay"></div>
      <div className="event-c-overlay2"></div>
      <EventsContent>
        <EventH><AnimatedText lines={["UPCOMING EVENTS"]} /></EventH>
        <EventForm>
          <form action="#" >
            <select onChange={handleFilterChange}>
              <option value="ALL GENRES">ALL GENRES</option>
              <option value="INDIA">INDIA</option>
              <option value="INTERNATIONAL">INTERNETIONAL</option>
              <option value="FINTECH">FINTECH</option>
              <option value="CYBER">CYBER</option>
              <option value="DATACENTRE AND CLOUD">DATACENTRE AND CLOUD</option>
            </select>
          </form>
        </EventForm>
        <CarouselWrapper>
          <div ref={sliderRef} className="keen-slider">
            <div className={`keen-slider__slide eventslide ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => handleSlideClick(0)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={frsbhLogo} alt="frslogo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/bh/" target="_blank" rel="noopener noreferrer" disabled>VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsbhBg} alt="frs event image" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place">25<sup>th</sup> - 26<sup>th</sup> FEBRUARY 2025, BAHRAIN</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => handleSlideClick(1)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={dcisphLogo} alt="dcis philippines event logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://dcis.traiconevents.com/philippines/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={dcisphBg} alt="dcis philippines" />
              </div>
              <div className="event-slide-name">Datacentre And Cloud Innovation Series </div>
              <div className="eventdate-place">12<sup>th</sup> MARCH 2025, PHILIPPINES</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => handleSlideClick(2)}
            >
              <div className="event-slide-box">
                <div className="event-logo el2">
                  <img src={frsphLogo} alt="frs philippines logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/ph/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsphBg} alt="fintech philippines background" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place"> 30<sup>th</sup> APRIL 2025,PHILIPPINES</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 3 ? 'active' : ''}`}
              onClick={() => handleSlideClick(3)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={whrphLogo} alt="whr philippines logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://hr.traiconevents.com/ph/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={whrphBg} alt="whr philippines background" />
              </div>
              <div className="event-slide-name">World HR Summit</div>
              <div className="eventdate-place">23<sup>rd</sup> May 2025,PHILIPPINES</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 4 ? 'active' : ''}`}
              onClick={() => handleSlideClick(4)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={rmsIndLogo} alt="rail modernization summit 2025" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://rail.traiconevents.com/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={rmsIndBg} alt="rail modernization summit 2025" />
              </div>
              <div className="event-slide-name">Rail Modernization summit 2025</div>
              <div className="eventdate-place">12<sup>th</sup> JUNE 2025, NEW DELHI, INDIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 5 ? 'active' : ''}`}
              onClick={() => handleSlideClick(5)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={crsphLogo} alt="cyber philippines summit logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://cyber.traiconevents.com/philippines/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={crsphBg} alt="cyber philippines summit background" />
              </div>
              <div className="event-slide-name">Cyber Revolution Summit </div>
              <div className="eventdate-place">27<sup>th</sup> JUNE 2025, PHILIPPPINES</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 6 ? 'active' : ''}`}
              onClick={() => handleSlideClick(6)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={frsmlLogo} alt="fintech malaysia logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/malaysia" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsmlBg} alt="fintech malaysia background" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place"> 23<sup>rd</sup> JULY 2025, Malaysia</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 7 ? 'active' : ''}`}
              onClick={() => handleSlideClick(7)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={crsthaiLogo} alt="ThaiCyberX logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://cyber.traiconevents.com/thailand" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={crsThaiBg} alt="ThaiCyberX" />
              </div>
              <div className="event-slide-name">ThaiCyberX</div>
              <div className="eventdate-place"> 27<sup>th</sup> August 2025, Thailand</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 8 ? 'active' : ''}`}
              onClick={() => handleSlideClick(8)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={amsLogo} alt="Ams logo" className="eventLogo" />
                </div>
                <div className="concluded-box">
                  concluded
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://ams.traiconevents.com" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={amsBg} alt="AMS background" />
              </div>
              <div className="event-slide-name">AIRPORT MODERNIZATION SUMMIT</div>
              <div className="eventdate-place"> 03<sup>rd</sup> - 04<sup>th</sup> SEPTEMBER 2025, India</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 9 ? 'active' : ''}`}
              onClick={() => handleSlideClick(9)}
            >
              <div className="event-slide-box">
                <div className="event-logo el2">
                  <img src={ogtsLogo} alt="oil and gas tech summit logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://ogts.traiconevents.com/saudi" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={ogtsBg} alt="oil and gas tech summit" />
              </div>
              <div className="event-slide-name">Oil And Gas Technology Summit</div>
              <div className="eventdate-place">TO BE ANNOUNCED</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 10 ? 'active' : ''}`}
              onClick={() => handleSlideClick(10)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={crsIndLogo} alt="cyber revolution india india logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://cyber.traiconevents.com/india" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={crsIndBg} alt="Ogts" />
              </div>
              <div className="event-slide-name">Cyber Revolution Summit</div>
              <div className="eventdate-place"> 10<sup>th</sup> OCTOBER 2025, INDIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 11 ? 'active' : ''}`}
              onClick={() => handleSlideClick(11)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={airphLogo} alt="ai revolution summit logo philippines" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://air.traiconevents.com/philippines" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={airphbg} alt="ai revolution summit" />
              </div>
              <div className="event-slide-name">AI Revolution Summit</div>
              <div className="eventdate-place"> 17<sup>th</sup> OCTOBER 2025, PHILIPPINES</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 12 ? 'active' : ''}`}
              onClick={() => handleSlideClick(12)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={frsksaLogo} alt="fintech revolution summit saudi" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/saudi" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsksaBg} alt="fintech revolution summit saudi" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place"> 03<sup>rd</sup> NOVEMBER 2025, SAUDI ARABIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 13 ? 'active' : ''}`}
              onClick={() => handleSlideClick(13)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={frsuaeLogo} alt="fintech revolution summit uae logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsuaeBg} alt="fintech revolution summit uae" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place"> 06<sup>th</sup> NOVEMBER 2025, ABUDHABI</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 14 ? 'active' : ''}`}
              onClick={() => handleSlideClick(14)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={crskwLogo} alt="cyber revolution summit kuwait logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://cyber.traiconevents.com/kuwait" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={crskwBg} alt="cyber revolution summit kuwait" />
              </div>
              <div className="event-slide-name">Cyber Revolution Summit</div>
              <div className="eventdate-place"> 20<sup>th</sup> November 2025, KUWAIT</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 15 ? 'active' : ''}`}
              onClick={() => handleSlideClick(15)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={idcLogo} alt="indian defence conclave logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://idc.traiconevents.com" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={idcBg} alt="Indian Defence Conclave kuwait" />
              </div>
              <div className="event-slide-name">Indian Defence Conclave</div>
              <div className="eventdate-place"> 20<sup>th</sup> - 21<sup>st</sup>  November 2025, India</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 16 ? 'active' : ''}`}
              onClick={() => handleSlideClick(16)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={whrindLogo} alt="WHR summit indonesia logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://whrsummit.com/jakarta/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={whrindBg} alt="world hr summit idonesia" />
              </div>
              <div className="event-slide-name">World HR Summit</div>
              <div className="eventdate-place"> 26<sup>th</sup> NOVEMBER 2025, INDONESIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 17 ? 'active' : ''}`}
              onClick={() => handleSlideClick(17)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={dcisIndialogo} alt="Data Centre Innovation Series" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://datacenterinnovationseries.com/india/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={dcisIndBg} alt="DataCentre Innovation Series" />
              </div>
              <div className="event-slide-name">Datacentre Innovation Series</div>
              <div className="eventdate-place"> 10<sup>th</sup> DECEMBER 2025, INDIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 18 ? 'active' : ''}`}
              onClick={() => handleSlideClick(18)}
            >
              <div className="event-slide-box">
                <div className="event-logo">
                  <img src={frsvnLogo} alt="fintech revolution summit vietnam logo" className="eventLogo" />
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

                </div>
                <div className="eweb-link">
                  <a href="https://fintech.traiconevents.com/vietnam" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
                </div>
                <div className="event-slide-patch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
                        fill="url(#gradient1)"
                      />
                    </g>
                  </svg>

                </div>
                <img src={frsvnBg} alt="fintech revolution summit vietnam" />
              </div>
              <div className="event-slide-name">Fintech Revolution Summit</div>
              <div className="eventdate-place"> 04<sup>th</sup> DECEMBER 2025, VIETNAM</div>
            </div>
            {/* <div className={`keen-slider__slide eventslide ${activeIndex === 11 ? 'active' : ''}`}
              onClick={() => handleSlideClick(11)}
            >
                  <div className="event-slide-box">
              <div className="event-logo">
                  <img src={amsIndLogo} alt=""  className="eventLogo"/>
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

</div>
<div className="eweb-link">
  <a href="https://ams.traiconevents.com/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
</div>
              <div className="event-slide-patch">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0"
  y="0"
  viewBox="0 0 512 512"
  style={{ enableBackground: "new 0 0 512 512" }}
  xmlSpace="preserve"
>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
      <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
      <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <g>
    <path
      d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
      fill="url(#gradient1)"
    />
  </g>
</svg>

              </div>
                <img src={amsIndBg} alt="whr" />
              </div>
              <div className="event-slide-name">Airport Modernization Summit </div>
              <div className="eventdate-place">16<sup>th</sup> - 17<sup>th</sup> JULY 2025, INDIA</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 12 ? 'active' : ''}`}
              onClick={() => handleSlideClick(12)}
            >
                  <div className="event-slide-box">
              <div className="event-logo">
                  <img src={dcisindLogo} alt=""  className="eventLogo"/>
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

</div>
<div className="eweb-link">
  <a href="https://dcis.traiconevents.com/india/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
</div>
              <div className="event-slide-patch">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0"
  y="0"
  viewBox="0 0 512 512"
  style={{ enableBackground: "new 0 0 512 512" }}
  xmlSpace="preserve"
>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
      <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
      <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <g>
    <path
      d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
      fill="url(#gradient1)"
    />
  </g>
</svg>

              </div>
                <img src={dcisindBg} alt="dcis" />
              </div>
              <div className="event-slide-name">Datacentre and cloud Innovation series </div>
              <div className="eventdate-place">28<sup>th</sup> August 2025, India</div>
            </div>
            <div className={`keen-slider__slide eventslide ${activeIndex === 13 ? 'active' : ''}`}
              onClick={() => handleSlideClick(13)}
            >
                  <div className="event-slide-box">
              <div className="event-logo">
                  <img src={idcIndLogo} alt=""  className="eventLogo"/>
                </div>
                <div className="event-slide-overlay">

                </div>
                <div className="event-slide-overlay2">

</div>
<div className="eweb-link">
  <a href="https://idc.traiconevents.com/" target="_blank" rel="noopener noreferrer">VIEW EVENT</a>
</div>
              <div className="event-slide-patch">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0"
  y="0"
  viewBox="0 0 512 512"
  style={{ enableBackground: "new 0 0 512 512" }}
  xmlSpace="preserve"
>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#2f9cda", stopOpacity: 0.1 }} />
      <stop offset="50%" style={{ stopColor: "#2f9cda", stopOpacity: 0.9 }} />
      <stop offset="100%" style={{ stopColor: "#2f9cda", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <g>
    <path
      d="M485.3 355.5v-199c0-20.4-10.9-39.2-28.5-49.4L284.5 7.6c-17.6-10.2-39.4-10.2-57 0L55.2 107.1c-17.6 10.2-28.5 29-28.5 49.4v199c0 20.4 10.9 39.2 28.5 49.4l172.3 99.5c17.6 10.2 39.4 10.2 57 0l172.3-99.5c17.7-10.2 28.5-29 28.5-49.4z"
      fill="url(#gradient1)"
    />
  </g>
</svg>

              </div>
                <img src={idcIndBg} alt="dcis" />
              </div>
              <div className="event-slide-name">Indian Defence Conclave </div>
              <div className="eventdate-place">17<sup>th</sup> - 18<sup>th</sup> November 2025, India</div>
            </div> */}
          </div>
          {/* Prev and Next buttons */}
          <button className="carousel-button prev" onClick={goToPrevSlide}><div>‹</div></button>
          <button className="carousel-button next" onClick={goToNextSlide}><div>›</div></button>
        </CarouselWrapper>
        <EventLine></EventLine>
        <Link to="/events" style={{ textDecoration: "none", color: 'white' }}>
          <ViewAll>
            View ALL
          </ViewAll>
        </Link>
      </EventsContent>
    </EventContainer>
  );
};

export default UpcomingEvents;
