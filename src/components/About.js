import React from 'react'
import styled from 'styled-components'
import AnimatedText from './AnimatedText'
import ab1 from '../images/about/about1.jpg'
import ab2 from '../images/about/about2.jpg'
import mission from "../images/about/mission.png"
import vision from "../images/about/binoculars.png"
import belief from "../images/about/belief.png"
import TraiconNums from './TraiconNums'
import { Helmet } from "react-helmet";



const AboutCotainer = styled.div`
width: 100%;
min-height: 100vh;
padding-bottom: 4vw;
`;
const AboutHeader = styled.div`
width: 100%;
height: 20vw;  
display: flex;
align-items: center;
justify-content: center;
position: relative;

& .ab-grid-box{
  position: absolute;
  width: 20vw;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -5vw;
  bottom: -5vw;
  z-index: -1;
}

& .ab-h-grid-box{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

& .ab-h-grid{
  width: 100%;
  height: 1px;
background: linear-gradient(to right, #ffffff00, #ffffff21, #ffffff00);
}

& .ab-v-grid-box{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

& .ab-v-grid{
  width: 1px;
  height: 100%;
background: linear-gradient(#ffffff00, #ffffff21, #ffffff00);
}

@media screen and (max-width:767px) {
  height: 50vw;
}
@media screen and (min-width: 768px) and (max-width:1024px) {
  height: 40vw;
}
`
const AboutGlow = styled.div`
width: 10vw;
height: 10vw;
background-color: #2f9cda;
position: absolute;
border-radius: 50%;
right: -5vw;
filter: blur(70px);

@media screen and (max-width:768px) {
  height: 30vw;
  width: 30vw;
  right: -15vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  height: 20vw;
  width: 20vw;
  right: -10vw;
}
`

const AboutHeaderCont = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;

h2{
  color: white;
  font-size: 5vw;
  font-family: "sdel";
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
p{
  color: white;
  font-family: "figtree";
  margin: 0;
  font-size: 1.1vw;
  font-weight: 300;
}
.element{
  font-size: 1vw;
  font-weight: 600;
  margin-top: 1vw;
}
.element span{
  color: #2f9cda;
}

@media screen and (max-width:768px){
 h2{
  font-size: 10vw;
 }
 p{
  font-size: 3.5vw;
 }
  .element {
    font-size: 3vw;
    margin-top: 3vw;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
   h2{
  font-size: 7vw;
 }
 p{
  font-size: 2.5vw;
 }
  .element {
    font-size: 2.2vw;
    margin-top: 2vw;
}
}
`
const AboutMain = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
margin-top: 8vw;
`
const AboutContent = styled.div`
margin-top: 5vw;
width: 80%;
height: 37vw;
background-color:rgb(21, 27, 29);
border-radius: 0.3vw;
display: flex;
align-items: center;

.about-cont-left{
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-cont-right{
  width: 60%;
}
.about-cont-right p{
  color: white;
  font-family: "figtree";
  padding:0vw 2vw;
  padding-right: 4vw;
  font-weight: 300;
  line-height: 1.6;
  font-size: 1vw;
  text-align: justify;
}
.about-images-container{
  width: 90%;
  height: 100%;
  margin-top: -12vw;
  margin-left: 2vw;
  position: relative;
  overflow: hidden;
  border-radius: 0.3vw;
}
.about-images-container:hover .about-img-box1{
  transform: translateX(-70%);
  filter: grayscale();
}
.about-images-container:hover .about-img-box2{
  transform: translateX(0%);
  filter: none;
}

.about-img-box1{
  height: 100%;
  width: 70%;
  position: absolute;
  left: 0;
  background-color: pink;
  z-index: 2;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.about-img-box2{
  height: 100%;
  width: 80%;
  position: absolute;
  right: 0;
  background-color: black;
  overflow: hidden;
  transform: translateX(62%);
  transition: all 0.5s ease;
  filter: grayscale();
}
img{
  width: 140%;
}

@media screen and (max-width:768px) {
  flex-direction: column;
  height: auto;
  border-radius: 2vw;
  width: 90%;

  .about-cont-left{
    width: 100%;
    height: 80vw;
  }
  .about-images-container{
    width: 70%;
    border-radius: 2vw;
    margin-left: -8vw;
  }
 .about-cont-right {
    width: 95%;
    padding-bottom: 4vw;
}
.about-cont-right p{
  font-size: 4vw;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
    flex-direction: column;
  height: auto;
  border-radius: 2vw;
  margin-top: 21vw;
  width: 90%;

  .about-cont-left{
    width: 80%;
    height: 60vw;
  }
  .about-images-container{
    width: 70%;
    border-radius: 2vw;
    margin-left: -8vw;
    margin-top: -35vw;
  }
 .about-cont-right {
    width: 95%;
    padding-bottom: 4vw;
    transform: translateY(-8vw);
}
.about-cont-right p{
  font-size: 2.5vw;
}
}
`

const AboutMV = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
margin-top: 4vw;
justify-content: center;
`
const AboutMVCont = styled.div`
width: 80%;
height: auto;

.mv-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
margin-top: 6vw;
align-items: center;
}
.mv-box:nth-child(2) .mv-left{
text-align: end;
display: flex;
flex-direction: column;
align-items: flex-end;
}
.mv-left{
  width: 50%;
  height: auto;
}
.mv-left h2{
  color: white;
  font-family: "sdl";
  font-size: 7vw;
  margin: 0;
  line-height: 6vw;
  position: relative;
  width: fit-content;
}

.mv-left h2 div:nth-child(2)::after{
content: "";
height: 5px;
width: 20%;
background-color: #2f9cda;
position: absolute;
z-index: 2;
right: 0;
border-radius: 10px;
}
.mv-left p{
  color: white;
  font-family: "sdl";
  font-size: 1vw;
  line-height: 1.6;
}
.mv-right{
  width: 30%;
  height: 22vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.mv-right img{
  width: 30%;
}

@media screen and (max-width:768px){
  .mv-left{
    width: 60%;
  }
   .mv-left h2 {
    font-size: 10vw;
    line-height: 9vw;
}
  .mv-left h2 div:nth-child(2)::after{
content: "";
height: 2px;
width: 50%;
}
.mv-left p {
    font-size: 4vw;
}
.mv-right {
    width: 35%;
    height: 30vw;
}
.mv-right img {
    width: 45%;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
    .mv-left{
    width: 60%;
  }
   .mv-left h2 {
    font-size: 10vw;
    line-height: 9vw;
}
  .mv-left h2 div:nth-child(2)::after{
content: "";
height: 2px;
width: 50%;
}
.mv-left p {
    font-size: 2.5vw;
}
.mv-right {
    width: 35%;
    height: 30vw;
}
.mv-right img {
    width: 45%;
}
}
`
const NumsContainer = styled.div`
width: 100%;
height: auto;
margin-top: 5vw;
`

export default function About() {
  return (
    <div>
      <Helmet>
      <title>TRAICON EVENTS | About US</title>
      <meta name="description" content="Traicon is a Global B2B Event and Conference company driving growth through Corporate Event planning, Tech Conferences & Business Networking platforms." />
    </Helmet>
     <AboutCotainer>
      <AboutHeader>
        <AboutGlow>

        </AboutGlow>
        <div className="ab-grid-box">
      <div className="ab-h-grid-box">
          <div className="ab-h-grid"></div>
        <div className="ab-h-grid"></div>
        <div className="ab-h-grid"></div>
        <div className="ab-h-grid"></div>
        <div className="ab-h-grid"></div>
      </div>
      <div className="ab-v-grid-box">
               <div className="ab-v-grid"></div>
        <div className="ab-v-grid"></div>
        <div className="ab-v-grid"></div>
        <div className="ab-v-grid"></div>
        <div className="ab-v-grid"></div>
        <div className="ab-v-grid"></div>
        
      </div>
 
      </div>
     <AboutHeaderCont>
     <h2><AnimatedText lines={['About Us']} /></h2>
     <p>Connecting people and ideas to create meaningful experiences and inspire a better future.</p>
     <p className='element'>Home &gt; <span>About Us</span></p>
     </AboutHeaderCont>
      </AboutHeader>
      <AboutMain>
      <AboutContent>
<div className="about-cont-left">
<div className="about-images-container">
<div className="about-img-box1">
<img src={ab1} alt="event speaker" />
</div>
<div className="about-img-box2">
  <img src={ab2} alt="conference" />
</div>
</div>
</div>
<div className="about-cont-right">
  <p>
  TraiCon is a frontrunner in the space of global capability building, B2B events and management consulting for diverse spectrum of industries. We partner with organizations that intend to scale up their growth potential and align with the opportunities that can foster results. By connecting our partners with the right people at the right time, we at TraiCon create white spaces in industries to stimulate business growth. To be orchestrating the unique unchartered territories in business, TraiCon maps out new opportunities by looking beyond the traditional competitive business levers and to create alternate ways of value creation for our partners and the end customers.
  </p>
  <p>
  TraiCon offers solutions that embed global delivery practices and the conventional ways of carrying out businesses. We approach innovation in new business opportunities through flipping the conventional paradigm of focusing on competitor to the end customer as the new reference point. With customer experiences taking centre stage as the new differentiator in the current business era, TraiCon builds on enabling our partners carve such niche delivery experiences that are compelling and lasting. By adding unique value propositions in the entire delivery chain of your businesses, TraiCon drives returns on investments for businesses and creates sustainable competitive edge in the market.
  </p>
</div>
      </AboutContent>
      </AboutMain>
      <AboutMV>
      <AboutMVCont>
       <div className="mv-box">
        <div className="mv-left">
        <h2 className="mv-h">
        <AnimatedText lines={['OUR']} />
        <AnimatedText className="an2" lines={['MISSION']} />
        </h2>
        <p>
        We believe, Hence we deliver. Promising the best knowledge and business exchange platforms for clients globally, we strive to make this possible through our commitment, assuring the clients to be delighted with the best of our services
        </p>
        </div>
        <div className="mv-right">
       <img src={mission} alt="" />
        </div>
       </div>
       <div className="mv-box">
    
        <div className="mv-right">
       <img src={vision} alt="" />
        </div>
        <div className="mv-left">
        <h2 className="mv-h">
        <AnimatedText lines={['OUR']} />
        <AnimatedText className="an2" lines={['VISION']} />
        </h2>
        <p>
        We aspire to build our clients brands, nurture business relationships and grow their businesses through our global platforms
        </p>
        </div>
       </div>
       <div className="mv-box">
        <div className="mv-left">
        <h2 className="mv-h">
        <AnimatedText lines={['OUR']} />
        <AnimatedText className="an2" lines={['BELIEF']} />
        </h2>
        <p>
        We believe in making leadership development accessible to talents who are looking to have a better future by bridging traditional management with global values. We believe in creating leaders of tomorrow and making them lead today.
        </p>
        </div>
        <div className="mv-right">
       <img src={belief} alt="" />
        </div>
       </div>
      </AboutMVCont>
      </AboutMV>
      <NumsContainer>
        <TraiconNums />
      </NumsContainer>
      </AboutCotainer>    
    </div>
  )
}
