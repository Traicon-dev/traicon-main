import React from 'react'
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import csr1 from '../images/csr/csr1.jpg'
import csr2 from '../images/csr/csr2.jpg'
import topic1 from '../images/csr/education.png'
import topic2 from '../images/csr/healthcare.png'
import topic3 from '../images/csr/enviornment.png'
import topic4 from '../images/csr/livelihood.png'
import journyBg from '../images/csr/csr3.jpg'
import krf1 from '../images/csr/csr-box.jpg'
import krf2 from '../images/csr/csr-work.jpg'
import krf3 from '../images/csr/csr-bun.jpg'
import krf4 from '../images/csr/csr-biscuit.jpg'
import TraiconNums from './TraiconNums';
import { Helmet } from "react-helmet";


const CsrContainer = styled.div`
width: 100%;
height: auto;
padding-bottom: 8vw;
`;

const TopHeader = styled.div`
width: 100%;
height: 20vw;  
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width:767px) {
  height: 50vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  height: 40vw;
}
`

const TopHeaderCont = styled.div`
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
    margin-top: 2.5vw;
}
}
`

const CsrMain = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
`
const CsrMainContent = styled.div`
width: 80%;
height: auto;
min-height: 35vw;
margin-top: 5vw;
display: flex;
align-items: center;
justify-content: center;
background-color:rgb(10, 20, 24);
border-radius: 0.5vw;

@media screen and (max-width:767px){
 flex-direction :column-reverse ;
}
@media screen and (min-width: 768px) and (max-width:1024px){
   flex-direction :column-reverse ;
}
`
const CsrMainCont = styled.div`
width: 60%;
height: auto;

p{
    color: white;
    padding: 0 2vw;
    font-family: "figtree";
    font-size: 1vw;
    line-height: 1.6;
   font-weight: 100;
}
@media screen and (max-width:767px){
  width: 90%;

  p{
    font-size: 4vw;
    text-align: justify;
  }
}
@media screen and (min-width: 768px) and (max-width:1024px){
    width: 90%;

  p{
    font-size: 2.5vw;
    text-align: justify;
  }
}
`
const CsrMainImg = styled.div`
width: 40%;
height: auto;
min-height: 32vw;
position: relative;
img{
    width: 100%;
}
.Csr-h{
    height: 6vw;
    padding: 1vw 2vw;
    border-radius: 1vw;
    background-color: white;
    width: fit-content;
    z-index: 5;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 3vw;
    font-family: "sdb";
    text-transform: uppercase;
    font-size: 1.1vw;
}
.Csr-circle{
    width: 5vw;
    height: 5vw;
    background: #2f9cda;
    border-radius: 50%;
    position: absolute;
    right: 1vw;
    top: 5vw;
    z-index: 1;
}
.csr-img-box1{

    width: 23vw;
    height: 23vw;
    border-radius: 50%;
    position: absolute;
    right: 2vw;
    bottom: 2vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}
.csr-img-box2{

width: 12vw;
height: 12vw;
border-radius: 50%;
position: absolute;
left: 0vw;
top: 2vw;
border: 9px solid rgb(10, 20, 24);
overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}
@media screen and (max-width:767px) {
  
    width: 90%;
    min-height: 75vw;
   
    .csr-img-box1 {
    width: 50vw;
    height: 50vw;
    bottom: 4vw;
    }

 .csr-img-box2 {
    width: 30vw;
    height: 30vw;
    top: 4vw;
    }
    .Csr-h {
    height: 20vw;
    padding: 1vw 4vw;
    font-size: 2.6vw;
}
.Csr-circle {
    width: 10vw;
    height: 10vw;
    right: 1vw;
    top: 22vw;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
      width: 90%;
    min-height: 65vw;
   
    .csr-img-box1 {
    width: 40vw;
    height: 40vw;
    bottom: 7vw;
    right: 8vw;
    }

 .csr-img-box2 {
    width: 25vw;
    height: 25vw;
    top: 8vw;
    left: 8vw;
    }
    .Csr-h {
    height: 10vw;
    padding: 1vw 4vw;
    font-size: 2vw;
    bottom: 8vw;
}
.Csr-circle {
    width: 10vw;
    height: 10vw;
    right: 4vw;
    top: 22vw;
}
}
`

const CsrTopics = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;

`

const CsrTopicBoxes = styled.div`
width: 79%;
height: 15vw;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 1vw;

.csr-topic-box{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
}
.csr-img-box{
width: 4vw;
height: 4vw;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(45deg,rgb(30, 93, 129),rgb(47, 155, 218));
box-shadow: 0.2vw 0.2vw 0.8vw rgba(32, 110, 156, 0.62);
border-radius: 0.5vw;
}
.csr-img-box img{
    width:60%;
}
.csr-h{
    color:rgba(255, 255, 255, 0.66);
    font-family: "sdel";
    font-size: 1.1vw;
    letter-spacing: 0.1vw;
}

@media screen and (max-width:767px) {
  flex-wrap: wrap;
  gap: 3vw;
  padding: 7vw 0vw;
  height: auto;
  
  .csr-topic-box{
    gap: 3vw;
    width: 45%;
    justify-content: flex-start;
  }

  .csr-img-box{
    width: 8vw;
    height: 8vw;
  }

  .csr-h{
    font-size: 3vw;
  }
}
@media screen and (min-width: 768px) and (max-width:1024px){
   flex-wrap: wrap;
  gap: 3vw;
  padding: 7vw 0vw;
  height: auto;
  
  .csr-topic-box{
    gap: 3vw;
    width: 45%;
    justify-content: flex-start;
  }

  .csr-img-box{
    width: 6vw;
    height: 6vw;
  }

  .csr-h{
    font-size: 2vw;
  }
}
`
const CsrJourney = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
display: flex;
align-items: center;
justify-content: center;
`
const CsrJourneyCont = styled.div`
width: 80%;
height: 60vw;
background-image: url(${journyBg});
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0.5vw;


@media screen and (max-width:767px) {
height: auto;
padding: 3vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  height: auto;
padding: 3vw;
}
`;
const CsrJourneyDes = styled.div`
width: 95%;
height: 90%;
background-color:rgba(0, 0, 0, 0.75);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 0.5vw;


h2{
    color: white;
    font-family: "sdeb";
    text-transform: uppercase;
    font-size: 2vw;
    padding-bottom: 1.5vw;
    
}
p{
    margin: 0.5vw 0;
    padding: 0 4vw;
    text-align: center;
    color: white;
    font-weight: 300;
    line-height: 1.6;
    font-size: 1vw;
}

@media screen and (max-width:767px) {
width: 100%;
height: auto;
padding: 3vw;


h2{
  font-size: 5vw;
  text-align: center;
  font-family: "sdm";
}
p{
  font-size: 3.5vw;
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
  width: 100%;
height: auto;
padding: 3vw;


h2{
  font-size: 2.8vw;
  text-align: center;
  font-family: "sdm";
}
p{
  font-size: 2.5vw;
}
}
`
const KrfContainer = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vw;

@media screen and (max-width:768px) {
  overflow-x: hidden;
}
@media screen and (min-width: 768px) and (max-width:1024px){
    overflow-x: hidden;
}
`;
const KrfGlow = styled.div`
width: 20vw;
height: 20vw;
position: absolute;
background-color: #2f9cda;
border-radius: 50%;
filter: blur(100px);
right: -10vw;


@media screen and (max-width:767px){
  filter: blur(50px);
  right: 0;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  filter: blur(70px);
  right: 0;
}
`
const KrfContentBox = styled.div`
width: 80%;
height: 38vw;
display: flex;
align-items: center;
gap: 3%;

@media screen and (max-width:767px){
  flex-direction: column;
  height: auto;
}
@media screen and (min-width: 768px) and (max-width:1024px){
    flex-direction: column;
  height: auto;
}
`;

const KrfImageContainer = styled.div`
width: 45%;
height: 38vw;
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

.krf-images{
    display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 80%;
gap: 1vw;
}

.krf-img{
    width: 12vw;
    height: 12vw;
    overflow: hidden;
    background-image: url(${krf1});
    background-size: cover;
    background-position: center;
    z-index: 5;
    border: 3px solid #2f9cda;
    border-radius: 0.5vw;
}
.krf-img:nth-child(2){
    background-image: url(${krf2});
}
.krf-img:nth-child(3){
    background-image: url(${krf3});
}
.krf-img:nth-child(4){
    background-image: url(${krf4});
}
@media screen and (max-width:767px){
  width: 100%;
  height: auto;

  .krf-img{
    width: 30vw;
    height: 30vw;

  }
}
@media screen and (min-width: 768px) and (max-width:1024px){
   width: 100%;
  height: auto;

  .krf-img{
    width: 30vw;
    height: 30vw;

  }
}
`
const KrfDesBox = styled.div`
width: 50%;
height: auto;

h2{
    color: white;
    margin: 0;
    padding: 0;
    font-family: "sdel";
    font-size: 4vw;
    line-height: 3.4vw;
}
p{
    color: white;
    font-family: "sdl";
    line-height: 1.6;
    font-size: 1vw;
    width: 70%;
}
@media screen and (max-width:767px){
  width: 75%;
  padding: 5vw 0vw;

  h2{
    font-size: 6vw;
    line-height: 5.5vw;
  }
  p{
    font-size: 3vw;
    width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width:1024px){
  width: 75%;
  padding: 5vw 0vw;

  h2{
    font-size: 5vw;
    line-height: 5vw;
  }
  p{
    font-size: 2.5vw;
    width: 100%;
  }
}
`


export default function Csr() {
  return (
    <>
      <Helmet>
      <title>Corporate Social Responsibility | TRAICON </title>
      <meta name="description" content="TraiCon Follows CSR at its Core, driven by heart and mind, giving back to society and supporting the communities where we work and live." />
    </Helmet>
      <CsrContainer>
       <TopHeader>
        <TopHeaderCont>
    <h2><AnimatedText lines={['CSR']} /></h2>
     <p>Driving Positive Change Through Corporate Social Responsibility Initiatives.</p>
     <p className='element'>Home &gt; <span>CSR</span></p>
        </TopHeaderCont>
       </TopHeader>
       <CsrMain>
<CsrMainContent>
<CsrMainCont>
<p>
Corporate Social Responsibility (CSR) stands for a larger purpose and truly signifies the value an organization creates beyond its balance sheets and profit loss statements. CSR is not a compliance but a deeply etched innate voice signifying an imperative.
</p>
<p>
    
A voice that guides individuals in an organization to sync in and stand for a common purpose way larger than its core business. We at TraiCon truly believe that business should plough back what we reap from mother earth’s resources naturally.
					
</p>
<p>
 
If CSR is philosophy to gauge an organization’s commitment to society, TraiCon carries this in the fulcrum of its business practices that demonstrates a deep sense of giving back and being sensitive to the community we do businesses and live our lives. TraiCon marches ahead with CSR as our faith dictated by our heart and directed by our intellect.
					   
</p>
<p>
Over the years, TraiCon initiatives have continued to evolve, while remaining responsive to the ever-changing needs of society. The Foundation is currently focusing on creating change in areas of Environment, Health, Education, Slum Development, Disaster Response and Old Age Home Support.  
</p>
</CsrMainCont>
<CsrMainImg>
    <div className="Csr-h">
        <h2>TraiCon <br /> Foundation</h2>
    </div>
<div className="csr-img-box1">
<img src={csr1} alt="child with a lady" />
</div>
<div className="csr-img-box2">
<img src={csr2} alt="a group of children" />
</div>
<div className="Csr-circle">

</div>
</CsrMainImg>
</CsrMainContent>
       </CsrMain>
       <CsrTopics>
       <CsrTopicBoxes>
    <div className="csr-topic-box">
  <div className="csr-img-box">
<img src={topic1} alt="EDUCATION" />
  </div>
   <h3 className="csr-h">
EDUCATION
   </h3>
    </div>
    <div className="csr-topic-box">
  <div className="csr-img-box">
<img src={topic2} alt="HEALTH" />
  </div>
   <h3 className="csr-h">
HEALTH
   </h3>
    </div>
    <div className="csr-topic-box">
  <div className="csr-img-box">
<img src={topic3} alt="ENVIRONMENT" />
  </div>
   <h3 className="csr-h">
ENVIRONMENT
   </h3>
    </div>
    <div className="csr-topic-box">
  <div className="csr-img-box">
<img src={topic4} alt="LIVELIHOOD" />
  </div>
   <h3 className="csr-h">
LIVELIHOOD
   </h3>
    </div>

       </CsrTopicBoxes>
       </CsrTopics>
       <CsrJourney>
<CsrJourneyCont>
<CsrJourneyDes>
<h2><AnimatedText lines={['Our CSR journey thus far & way forward']} /></h2>
<p>
Natural calamity needs extensive human efforts in rebuilding losses that cause substantial impact on economic and social growth. One such disaster was the recent Kerala floods which was the highest in almost 94 years history.  We did extensive work for the flood victim’s rehabilitation through relief funds, assistance through offering food to Orphanages & Old Age Homes.  
</p>
<p>
As per the latest ASER (Annual status of Education Report), 2018, almost 17% of children in the state lack access to library books and necessary study aids required for basic education.  One of our priority areas in CSR is to provide infrastructure/ amenities to schools through support such as Books, Bags, and Shoes etc. to the needy children.   
</p>
<p>
One another extensive area in our CSR radar is to drive a Carbon Negative initiatives. Carbon negativity implies being ‘Climate Positive’. TraiCon by focusing on Climate positive goes beyond achieving net zero carbon emissions to actually creating environmental benefit initiatives. At TraiCon we invest in the environment by planting trees in and around the communities we exist and also drive the significance of green cover in all the ecological support that we render.   
</p>
<p>
Additionally, the world sees an average of 335 million tonnes plastic every year with 13 million tonnes of plastic entering the ocean every year. A massive 50% of plastic we use is single use, hence making slightest of changes could drastically reduce the amount of plastic pollution globally. We at TraiCon have embraced this global agenda of avoiding plastic usage and will increasingly drive this positive change in near future, around the ecosystem that we operate in. We at TraiCon firmly believe in sustainable and green energy. In line with this, we are working towards providing electricity to schools in need through eco-friendly avenues like Solar Panels.     
</p>
<p>
In the event of medical emergency, lack of funds prevents timely care even in cases where there are high chances of survival and cure TraiCon reaches out for supporting medical emergency for children through mediums such as crowdfunding. We do extensive digital crowdfunding to access noble minded individuals to contribute for underprivileged children’s chronic illness and also in exceptional cases of trauma. At TraiCon we closely watch for social media campaigns seeking medical aid and put our best foot forward in bringing life back to those little ones who are in desperate need of medical care and treatment.  
</p>
<p>
Organizations are powerful drivers of society and the most leading, respected, and sought after ones exist to do far more than churning profits; they exist to use the power of business by itself to solve social and environmental problems. TraiCon embodies this spirit of leading social changes which are sustainable and value adding to the communities and people being part of it.   
</p>
<p>
TraiCon’s CSR fundamentals is way beyond statutes. Ethical Corporate Citizenship is at the heart of our governance and our CSR originates right from this ideology. We at TraiCon truly believe in making an impact on lives otherwise deprived and underserved and at the same time creating a sustainable tomorrow for generations to come.  
</p>
</CsrJourneyDes>
</CsrJourneyCont>
       </CsrJourney>
       <KrfContainer>
        <KrfGlow>

        </KrfGlow>
        <KrfContentBox>
        <KrfImageContainer>
            <div className="krf-images">
            <div className="krf-img">

</div>
<div className="krf-img">

</div>
<div className="krf-img">

</div>
<div className="krf-img">

</div>
            </div>

        </KrfImageContainer>
        <KrfDesBox>
            <h2><AnimatedText lines={['Kerala Relief Fund']} /></h2>
            <h2><AnimatedText lines={['August 2018']} /></h2>
            <p>
										   TraiCon is committed to providing support in every possible way for Children’s Education, Healthcare & Environment, Creating Awareness on Carbon Neutral & Negative, Skill Training & Livelihood for Youth around the globe. Moving well beyond its business activities, TraiCon contributes to a positive societal impact through diverse community engagement initiatives. Yes, we do care for our world and the people around us.
									    </p>
        </KrfDesBox>
        </KrfContentBox>
      
       </KrfContainer>
       <TraiconNums />
      </CsrContainer>
    </>
  )
}
