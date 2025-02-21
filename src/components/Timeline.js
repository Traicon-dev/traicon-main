import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../images/timeline/img1.JPG';
import img2 from '../images/timeline/img2.JPG';
import img3 from '../images/timeline/img3.jpg';
import img4 from '../images/timeline/img4.JPG';
import img5 from '../images/timeline/img5.JPG';
import img6 from '../images/timeline/img6.JPG';
import img7 from '../images/timeline/img7.jpg';
import img8 from '../images/timeline/img8.jpg';
import img9 from '../images/timeline/img9.JPG';
import img10 from '../images/timeline/img10.JPG';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  position: relative;
  background: linear-gradient(to right, #000000c4, #111111db, #000000ad, #2f9cda4f);
`;

const TimelineContentBox = styled.div`
  width: 50vw;
  min-height: 22vw;
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 14%;
  left: 30%;
  transform: translateY(-50%);
  /* background-color: #0000008f; */
`;

const ImageContentBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  top: 13%;
  left: 0;
  transform: translateY(-50%);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transform-origin: center; 
    object-fit: cover;
  }
`;

const TimelineYears = styled.div`
  width: 20%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .year-box {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    color: white;
    font-family: "cdm";
 position: relative;
    transition: all 0.3s ease;

    &::after{
      content: "";
      width: 1px;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: white;
      z-index: 2;
    }

    &::before{
      content: "";
      width: 0.8vw;
      height: 0.8vw;
      position: absolute;
      background-color: #2f9cda;
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      right: -0.4vw;
      z-index: 0;
      background-color: grey;
      transition: all 0.3s ease;
    }

  

    &.active {
      font-size: 4vw;
     color: #2f9cda;
     font-family: cdb;
    }

    &.active::before{
      width: 1vw;
      height: 1vw;
      right: -0.5vw;
      background-color: #2f9cda;
      z-index: 5;
    }

 

  }

  & .year{
      position: absolute;
      right: 1vw;
    }
`;

const YearContentBox = styled.div`
  min-height: 25vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  color: white;
  font-size: 1.2vw;
  font-family: "Source Sans 3";
  line-height: 1.7;
  font-weight: 300;
  letter-spacing: 0.05vw;
padding: 2vw;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  position: relative;
  z-index: 2;

  
`;

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(2020); // Default year
  const timelineRef = useRef();
  const contentBoxRef = useRef();
  const imageBoxRef = useRef();

  const years = [
    { year: "", content: "", image: img1 },
    { year: 2020, content: <ul><li>- The Global COVID-19 Pandemic showed us a new path to venture virtual events</li><li>- Added a new Vertical “Traicon Media & Publications”</li></ul>, image: img1 },
    { year: 2019, content: <p>In 2019 we TraiCon continue to conceptualize, market and host B2B Summits, Conferences, Forums, Symposiums, Exhibitions & B2B Buyer & Seller Meets across Asia, Middle East & Africa. We believe that keeping our clients in front of mind is key and we continue to help grow their businesses globally, foster business relationships and expand their brand awareness globally in new and emerging markets. We have also ingrained our resolve and drive towards Carbon Negative Initiatives as a part of our CSR strategy </p>, image: img2 },
    { year: 2018, content: <><p>TraiCon continues to grow rapidly with an employee strength of 55 went on to host a series of CSR Activities & established a new business vertical that would conceptualize, market and host B2B Buyer & Supplier Meets across Asia, Middle East & Africa.</p></>, image: img3 },
    { year: 2017, content: <><p>Moved into a larger office space and Institutionalized another additional new business vertical which would conceptualize, market and host Exhibitions.</p></>, image: img4 },
    { year: 2016, content: <><p>Augmented a new business vertical that would conceptualize, market and host Summits, Conferences & Forums with a further addition in our workforce by 26 employees.</p></>, image: img5 },
    { year: 2015, content: <><p>In the year of 2015 TraiCon goes global and successfully delivers in new international markets like CIS & Africa.</p></>, image: img6 },
    { year: 2014, content: <><p>Two years later we further strengthened our employee base by adding another 18 spirited talents with an aspiration to make a difference driven by a shared ideology.</p></>, image: img7 },
    { year: 2013, content: <><p>After a year of working hard and smart we relocated into an office space and added a Researcher, Sales Lead, Audience Development Lead and a Marketing Lead to the team of Traitans which is what we call ourselves.</p></>, image: img8 },
    { year: 2012, content: <><p>We at TraiCon embarked on our business with a humble beginning. We commenced our operations with a 3 member team, a Visionary, a Thought Leader, & an Industrial Insider who set up business and worked out of a small residential property </p></>, image: img9 },
    { year: 2011, content: <><h2>2011: Building the Future</h2><p>Launched new initiatives and programs.</p></>, image: img10 },
    { year: "", content: "", image: "" },
  ];

  useEffect(() => {
    const yearBoxes = Array.from(timelineRef.current.querySelectorAll('.year-box'));

    // Create ScrollTriggers for year boxes
    yearBoxes.forEach((yearBox, index) => {
      ScrollTrigger.create({
        trigger: yearBox,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: yearBox, className: 'active' },
        onEnter: () => {
          setActiveYear(years[index].year);
          // Fade and slide content left animation
          gsap.fromTo(contentBoxRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'linear' });
          // Stretching image transition
          gsap.fromTo(imageBoxRef.current.querySelector('img'), { scaleX: 1.1 }, { scaleX: 1, duration: 0.5, ease: 'linear' });
        },
        onEnterBack: () => setActiveYear(years[index].year),
      });
    });

    // Pin the content and image boxes
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: contentBoxRef.current,
      scrub: 8,
    });

    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: imageBoxRef.current,
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const activeContent = years.find((y) => y.year === activeYear)?.content;
  const activeImage = years.find((y) => y.year === activeYear)?.image;

  return (
    <AppContainer>
      <TimelineContainer ref={timelineRef}>
        <TimelineYears>
          {years.map((yearObj) => (
            <div className="year-box" key={yearObj.year}>
              <div className="year">{yearObj.year}</div>
            </div>
          ))}
        </TimelineYears>

        <TimelineContentBox ref={contentBoxRef}>
          <YearContentBox>{activeContent}</YearContentBox>
        </TimelineContentBox>

        <ImageContentBox ref={imageBoxRef}>
          <img src={activeImage} alt={`Content for ${activeYear}`} />
        </ImageContentBox>
      </TimelineContainer>
    </AppContainer>
  );
};

export default Timeline;
