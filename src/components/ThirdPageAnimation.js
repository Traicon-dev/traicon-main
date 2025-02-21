import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import pl1 from '../images/pl-img1.JPG';
import pl2 from '../images/pl2.JPG';
import pl3 from '../images/pl3.JPG';

gsap.registerPlugin(ScrollTrigger);


const PlatHead = styled.div`
font-size: 2vw;
font-family: "cdr";
font-size: 1.5vw;
background-color: black;
position: absolute;
font-weight: 500;
color: white;
padding: 1vw 2vw;
position: absolute;
top: 6vw;
left: 0%;
display: flex;
align-items: center;
justify-content: center;
`;

const PlatCir = styled.div`
width: 34vw;
height: 34vw;
border-radius: 50%;
position: absolute;
border: 3vw solid black;
opacity: 0.2;
left: -17vw;
bottom: -17vw;
`;

const Container = styled.div`
  height: ${({ sections }) => sections * 100}vh;
  height: 380vh;
  position: relative;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => props.opacity};
  background-color: #2f9cda;
`;

const AnimationWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vw;
  justify-content: center;
  margin-bottom: 20px;
`;

const Dot = styled.div`
  width: 1.2vw;
  height: 1.2vw;
  background-color: ${(props) => (props.active ? 'black' : '')};
  border-radius: 50%;
  margin: 0 10px;
  transition: background-color 0.3s ease-in-out;
  border: 2px solid black;
  box-shadow: 2px 2px 5px rgb(24, 24, 24, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    height: 4.2vw;
    width: 2px;
    position: absolute;
    background-color: black;
    margin-top: 5.4vw;
  }

  &:nth-child(3)::after {
    display: none;
  }
`;

const Box = styled.div`
  width: 35vw;
  height: 55vh;
  margin: 0 20px;
  transition: all 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`;

const LeftBox = styled(Box)`
  background-color: transparent;
`;

const RightBox = styled(Box)`
  background-color: transparent;
  position: relative;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vw;
`;

const ContentBox = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition: opacity 1s ease-in-out;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: cdb;
  text-transform: uppercase;
  color: rgb(24, 24, 24);
`;

const Paragraph = styled.p`
  margin: 10px 0 0;
  font-size: 1.1vw;
  font-weight: 400;
  color: rgb(24, 24, 24);
  font-family: source sans 3;
`;

const Image = styled.img`
  position: absolute;
  width: 90%;
  height: 90%;
  object-fit: cover;
  opacity: ${(props) => props.opacity};
  transition: opacity 1s ease-in-out;
  border-radius: 1vw;
  transform: rotate(7deg);
`;

const ImageBg = styled.div`
  width: 90%;
  height: 90%;
background: black;
border-radius: 1vw;
`;

const PlatBtn = styled.button`
width: 9vw;
height: 3vw;
color: black;
margin-top: 2vw;
border: none;
background: none;
background-color: #00000026;
line-height: auto;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 2;
border-radius: 3vw;
font-size: 1vw;
font-family: "cdb";

& p{
  position: relative;
  z-index: 2;
  padding: 0;
  margin: 0;
}

&::before{
  content: "";
  width: 90%;
  height: 75%;
  position: absolute;
border: 2px solid black;
  border-radius: 3vw;
}
`;

const ThirdPageAnimation = () => {
  const containerRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const imageBgRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [textOpacity, setTextOpacity] = useState(1);
  const [currentImage, setCurrentImage] = useState(pl1);
  const [currentContent, setCurrentContent] = useState({
    heading: "B2B Summits & Forums",
    paragraph: "Events such as conferences, summits and forums have a reinforcing reward with multiple benefits such as increased sales reach, business leads, data repository of relevant end customers..."
  });

  const contentArray = [
    { heading: "B2B Summits & Forums", paragraph: "Events such as conferences, summits and forums have a reinforcing reward with multiple benefits such as increased sales reach, business leads, data repository of relevant end customers..." },
    { heading: "B2C EXHIBITIONS", paragraph: "B2C exhibitions largely lead to increased brand awareness, meet up with the customer, augmenting real time knowledge on competitor strategy, avenues to launch new products and lead generation through mass attendance." },
    { heading: "B2B Summits & Forums", paragraph: "Events such as conferences, summits and forums have a reinforcing reward with multiple benefits such as increased sales reach, business leads, data repository of relevant end customers..." }
  ];

  const imageArray = [
    pl1,
    pl2,
    pl3
  ];

  useEffect(() => {
    // Set the initial rotation to 0 when the component mounts
    gsap.set(imageBgRef.current, { rotate: -7 });
  
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 60%',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
  
        setOpacity(progress > 0.05 ? 1 : 0);
  
        if (progress < 0.33) {
          setActiveDot(0);
        } else if (progress < 0.66) {
          setActiveDot(1);
        } else {
          setActiveDot(2);
        }
  
        if (progress < 0.33) {
          gsap.to(leftBoxRef.current, { x: '0%', opacity: 1, duration: 0.3, ease: 'linear' });
          gsap.to(rightBoxRef.current, { x: '0%', opacity: 1, duration: 0.3, ease: 'linear' });
        } else if (progress < 0.66) {
          gsap.to(leftBoxRef.current, { x: '108%', opacity: 1, duration: 0.3, ease: 'linear' });
          gsap.to(rightBoxRef.current, { x: '-108%', opacity: 1, duration: 0.3, ease: 'linear' });
        } else {
          gsap.to(leftBoxRef.current, { x: '0%', opacity: 1, duration: 0.3, ease: 'linear' });
          gsap.to(rightBoxRef.current, { x: '0%', opacity: 1, duration: 0.3, ease: 'linear' });
        }
      },
    });
  
    return () => {
      trigger.kill();
    };
  }, []);
  
  useEffect(() => {
    setTextOpacity(0);
    setImageOpacity(0);
    
    const timer = setTimeout(() => {
      setCurrentContent(contentArray[activeDot]);
      setCurrentImage(imageArray[activeDot]);
      setTextOpacity(1);
      setImageOpacity(1);
    }, 800); 
  
    // Rotate ImageBg by 90 degrees for each dot change, ensuring consistent rotation
    gsap.to(imageBgRef.current, { rotate: -7 + activeDot * 180, duration: 1, ease: 'linear' });
  
    return () => clearTimeout(timer);
  }, [activeDot]);
  

  return (
    <Container ref={containerRef} opacity={opacity} sections={contentArray.length}>
    
      <AnimationWrapper>
      <PlatHead>OUR PLATFORMS</PlatHead>
      <PlatCir></PlatCir>
        <Dots>
          {contentArray.map((_, index) => (
            <Dot key={index} active={activeDot === index} />
          ))}
        </Dots>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LeftBox ref={leftBoxRef}>
            <ContentBox opacity={textOpacity}>
              <Heading>{currentContent.heading}</Heading>
              <Paragraph>{currentContent.paragraph}</Paragraph>
              <PlatBtn><p>KNOW MORE</p> </PlatBtn>
            </ContentBox>
          </LeftBox>
          <RightBox ref={rightBoxRef}>
            <ImageBg ref={imageBgRef}></ImageBg>
            <Image src={currentImage} alt={`Image ${activeDot + 1}`} opacity={imageOpacity} />
          </RightBox>
        </div>
      </AnimationWrapper>
    </Container>
  );
};

export default ThirdPageAnimation;
