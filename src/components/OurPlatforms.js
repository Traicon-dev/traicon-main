import React, { useState } from 'react';
import styled from 'styled-components'
import plat1 from '../images/plat1.JPG'
import plat2 from '../images/plat2.jpg'
import plat3 from '../images/plat3.JPG'


const OurPlatformsContainer = styled.div`
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 8vw;

@media screen and (max-width: 767px) {
  flex-wrap: wrap;
  height: 100vh;
}
@media screen and (min-width:768px) and (max-width:1023px){
    flex-wrap: wrap;
  height: 100vh;
}
`;

const OurLeft = styled.div`
width: ${(props) => (props.isExpanded ? '0' :  '25%')};
height: 90vh;
background-color: #2f9cda;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 0.5s ease;


@media screen and (max-width: 767px) {
  width: 50%;
  height: ${(props) => (props.isExpanded ? '0' :  '50vh')};;
}
@media screen and (min-width:768px) and (max-width:1023px){
    width: 50%;
  height: ${(props) => (props.isExpanded ? '0' :  '50vh')};;
}
`;

const PlatH = styled.h2`
display: ${(props) => (props.isExpanded ? 'none' :  'block')};
font-family: "sdel";
letter-spacing: 0.05vw;
width: 80%;
font-size: 3vw;

@media screen and (max-width: 767px){
  font-size: 7vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
font-size: 4vw;
}
`;

const PlatPara = styled.p`
display: ${(props) => (props.isExpanded ? 'none' :  'block')};
font-size: 1.1vw;
font-family: "figtree";
font-weight: 400;
line-height: 1.7;
width: 20vw;

@media screen and (max-width: 767px){
  width: 40vw;
  font-size:3vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 40vw;
  font-size:2.5vw;
}
`;

// const OurRight = styled.div`
// width: ${(props) => (props.isExpanded ? '100vw' :  '75%')};
// height: 90vh;
// display: flex;
// align-items: center;
// transition: all 0.5s ease;
// `;

const PlatBox = styled.div`
width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '25%')};
height: 90vh;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;

&:hover{
  width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '30%')};
}

& .plat-img{
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: absolute;
}

& .plat-content{
  width: 100%;
  height: 90vh;
  position: relative;
  background: ${(props) => (props.isExpanded ? 'linear-gradient(transparent, #0000009e, #000000);' :  'linear-gradient(transparent,#0000008f,#000000eb)')};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
&:nth-child(3) .plat-content{
  background: ${(props) => (props.isExpanded ? 'linear-gradient(transparent, #0000009e, #000000);' :  'linear-gradient(to top,transparent,#0000008f,#000000eb)')};
  justify-content: ${(props) => (props.isExpanded ? 'flex-end' :  'flex-start')};;
}
&:nth-child(3) .plat-content .plat-h{
  margin-top: 3vw;
}
& .plat-cont2{
  width: 90vw;
  position: absolute;
  opacity: ${(props) => (props.isExpanded ? '1' :  '0')};
  bottom: 8vw;
  right: ${(props) => (props.isExpanded ? '2vw' :  '-10vw')};
  transition: all 0.1s ease;
}
& .plat-h{
  color: white;
  font-family: "sdel";
  letter-spacing: 0.05vw;
  text-transform: uppercase;
  width: ${(props) => (props.isExpanded ? '90%' :  '20.5vw')};
  display: ${(props) => (props.isExpanded ? 'none' :  'block')};
  font-size: 1.7vw;
}

& .plat-h2{
  color: white;
  font-family: "sdel";
  letter-spacing: 0.05vw;
  text-transform: uppercase;
  font-size: 3vw;
}

& .plat-para{
  width: 20.5vw;
  color: white;
  font-family: "figtree";
  font-size: 1.1vw;
  display: ${(props) => (props.isExpanded ? 'none' :  'block')};
  font-weight: 200;
  line-height: 1.7;
}

& .plat-para2{
  width: 90%;
  color: white;
  line-height: 1.7;
  font-size: 1.1vw;
  transition: all 0.5s ease;
  overflow-wrap: normal;
  margin-top: 1vw;
  font-weight: 300;
  font-family: "Source Sans 3";
}

& .plat-button{
background: #2f9cda;
width: 10vw;
height: 2.5vw;
font-family: "sdeb";
font-size: 1vw;
letter-spacing: 0.05vw;
border: none;
border-radius: 3vw;
margin-bottom: 3vw;
position: relative;
z-index: 10;
cursor: pointer;
}

@media screen and (max-width: 767px) {
  width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '50%')};
  height: ${(props) => (props.isExpanded ? '100vh' : props.isCollapsed ? '0' : '50vh')};

  .plat-content{
    height: ${(props) => (props.isExpanded ? '100vh' : props.isCollapsed ? '0' : '50vh')};
  }
  .plat-cont2{
    width: 90%;
  }
  .plat-para{
    width: 43vw;
    font-size: 3vw;
  }
  .plat-h{
    font-size: 5vw;
    width: 43vw;
  }
  .plat-button {
    width: 21vw;
    height: 5.5vw;
    font-size: 2vw;
    position: relative;
    z-index: 15;
  }
  &:hover{
  width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '50%')};
}
.plat-h2{
  font-size: 6vw;
}
.plat-para2{
  font-size: 3.5vw;
  padding-bottom: 6vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
    width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '50%')};
  height: ${(props) => (props.isExpanded ? '100vh' : props.isCollapsed ? '0' : '50vh')};

  .plat-content{
    height: ${(props) => (props.isExpanded ? '100vh' : props.isCollapsed ? '0' : '50vh')};
  }
  .plat-cont2{
    width: 90%;
  }
  .plat-para{
    width: 43vw;
    font-size: 2.5vw;
  }
  .plat-h{
    font-size: 4vw;
    width: 43vw;
  }
  .plat-button {
    width: 21vw;
    height: 5.5vw;
    font-size: 2vw;
    position: relative;
    z-index: 15;
  }
  &:hover{
  width: ${(props) => (props.isExpanded ? '100vw' : props.isCollapsed ? '0' : '50%')};
}
.plat-h2{
  font-size: 4vw;
}
.plat-para2{
  font-size: 2.5vw;
  padding-bottom: 6vw;
}
}
`;
export default function OurPlatforms() {
  const [ExpandedSlide, setExpandedSlide] = useState(null);
  const [ButtonText, setButtonText] = useState('KNOW MORE');

  const handleSlideClick = (index) => {
    if (ExpandedSlide === index) {
      setExpandedSlide(null); 
      setButtonText('KNOW MORE')// If the clicked slide is already fullscreen, exit fullscreen
    } else {
      setExpandedSlide(index);
      setButtonText('GO BACK')
    }
  };
  return (
    <div>
     <OurPlatformsContainer>
      <OurLeft isExpanded={ExpandedSlide !== null}>
        <PlatH isExpanded={ExpandedSlide !== null}>
          OUR PLATFORMS
        </PlatH>
        <PlatPara isExpanded={ExpandedSlide !== null}>
        Traicon Events provides innovative platforms for professional development, networking, and business growth across industries. They host conferences, summits, and training programs designed to inspire collaboration, share cutting-edge insights, and unlock new opportunities for businesses worldwide
        </PlatPara>
        </OurLeft>   
    
            <PlatBox isExpanded = {ExpandedSlide === 0} isCollapsed = {ExpandedSlide !== null && ExpandedSlide !== 0}>
            <img src={plat1} alt="B2B summit and forums" className="plat-img" />
              <div className="plat-content">
                <h2 className="plat-h">B2B Summits & Forums</h2>
             <p className="plat-para">
             Events such as conferences, summits and forums have a reinforcing reward with multiple benefits such as increased sales reach, business leads, data repository of relevant end customers...
             </p>
             <div className="plat-cont2">
             <h2 className="plat-h2">B2B Summits & Forums</h2>
             <div className="plat-para2">
             Events such as conferences, summits and forums have a reinforcing reward with multiple benefits such as increased sales reach, business leads, data repository of relevant end customers, organizational branding and enabling thought leadership in nascent industries in specific.
             <br />
             TraiCon spearheads in delivering top notch B2B events across global markets such as India, Malta, Qatar, Dubai, Bahrain, Kuwait, Saudi Arabia, United Arabic Emirates, Johannesburg, Cape Town, Mauritius, Rwanda and Kenya.
            <br />
            With an unflinching fine focus on breaking trends, bringing onboard top industry leaders, TraiCon delivers high stake events and summits with our seasoned professionals at the helm of creating unique business touch points and promising results in the form of returns thereon.
            <br />
            We create business opportunities globally, foster business partnerships and build brands globally so that they stay in front of mind when one is thinking of partnership projects on a global platform. 
             </div>
             </div>
             <p>
              
             </p>
             <button className="plat-button" onClick={() => handleSlideClick(0)}>
            {`${ButtonText}`}
             </button>
              </div>
           
            </PlatBox>
            <PlatBox isExpanded = {ExpandedSlide === 1} isCollapsed = {ExpandedSlide !== null && ExpandedSlide !== 1}>
            <img src={plat2} alt="B2C EXHIBITIONS" className="plat-img" />
              <div className="plat-content">
              <h2 className="plat-h">B2C EXHIBITIONS</h2>
             <p className="plat-para">
             B2C exhibitions largely lead to increased brand awareness, meet up with the customer, augmenting real time knowledge on competitor strategy, avenues to launch new products and lead generation through mass attendance. 
             </p>
             <div className="plat-cont2">
             <h2 className="plat-h2">B2C Exhibitions</h2>
             <div className="plat-para2">
             B2C exhibitions largely lead to increased brand awareness, meet up with the customer, augmenting real time knowledge on competitor strategy, avenues to launch new products and lead generation through mass attendance.
             <br />
             With an impressive track record of delivering top notch B2B exhibitions, we at TraiCon seamlessly anchor B2C exhibitions thereby integrating the knowledgebase of buyers, sellers, suppliers and pave the way for new business potential based on building core competence of the participating stakeholders.
            <br />
            We ensure that the latest technology, solutions and innovations are showcased at our B2C exhibitions in front of project owners who are looking at identifying latest technology and solutions that can be integrated into their upcoming projects globally.
             </div>
             </div>
             <button className="plat-button" onClick={() => handleSlideClick(1)}>
             {`${ButtonText}`}
             </button>
              </div>
         
</PlatBox>
<PlatBox isExpanded = {ExpandedSlide === 2} isCollapsed = {ExpandedSlide !== null && ExpandedSlide !== 2}>
<img src={plat3} alt="TRAININGS & WORKSHOPS" className="plat-img" />
  <div className="plat-content">
  <h2 className="plat-h">TRAININGS & WORKSHOPS</h2>
             <p className="plat-para">
             Capability building is essentially intended to transform an individual employees’ competence into organizational strengths. The competency gaps are either identified for current business strategies or future... 
             </p>
             <div className="plat-cont2">
             <h2 className="plat-h2">TRAININGS & WORKSHOPS</h2>
             <div className="plat-para2">
             Capability building is essentially intended to transform an individual employees’ competence into organizational strengths. The competency gaps are either identified for current business strategies or future product/technology road map that calls for excellence in niche competence as differentiators to the organization’s success.
             <br />
             TraiCon has etched and carved a niche in the area of capability building cutting across industries and functional areas. With a comprehensive and robust spread of offerings through Workshops and sessions, TraiCon turns out to be an ever-reliable knowledge partner creating differentiation through capability interventions and also measuring effectiveness to measure the true business transformation pre and post the entire capability building process.
            <br />
            As the preferred global provider of business trainings and workshops TraiCon strives constantly to understand the organizations global project requirements, expansion plans and tailors cutting edge training courses and workshops to cater to the requirements of global brands to ensure that together we meet our business objectives.
             </div>
             </div>
             <button className="plat-button" onClick={() => handleSlideClick(2)}>
             {`${ButtonText}`}
             </button>
  </div>
</PlatBox>
           
     </OurPlatformsContainer>
    </div>
  )
}
