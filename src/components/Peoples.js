import React, {useEffect} from 'react'
import styled from 'styled-components'
import AnimatedText from './AnimatedText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import team1 from '../images/peoples/team1.jpg'
import team2 from '../images/peoples/team2.jpg'
import team3 from '../images/peoples/team3.jpg'
import team4 from '../images/peoples/team4.jpg'
import team5 from '../images/peoples/team5.jpg'
import team6 from '../images/peoples/team6.jpg'
import team7 from '../images/peoples/team7.jpg'
import team8 from '../images/peoples/team8.jpg'
import team9 from '../images/peoples/team9.jpg'

const PeopleContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
`;

const TopHeader = styled.div`
width: 100%;
height: 20vw;  
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width:768px) {
  height: 50vw;
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
`
const PeopleMain = styled.div`
width: 100%;
height: 20vw;
margin-top: 3vw;
display: flex;
align-items: center;
justify-content: center;

.people-main-cont{
    width: 80%;
    height: 19vw;
    background-color:rgb(24, 24, 24);
    border-radius: 1vw;
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.17);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.people-main-glow{
    width: 10vw;
    height: 10vw;
    background-color: #2f9cda;
    border-radius: 50%;
    filter: blur(100px);
    right: -1vw;
    position: absolute;
    top: -1vw;
}
.pmg2{
    right: auto;
    top: auto;
    left: -1vw;
    bottom: 3vw;
}
.people-main-cont h2{
text-align: center;
font-size: 1.3vw;
color:rgb(255, 255, 255);
font-family: "figtree";
font-weight: 900;
width: 70%;
text-transform: uppercase;
}
.people-main-cont p{
    font-family: "figtree";
    color: white;
    width: 70%;
    text-align: center;
    line-height: 1.6;
    font-size: 1vw;
}

@media screen and (max-width:768px) {
  height: auto;
  margin-top: 15vw;

  .people-main-cont {
    height: 90vw;
    border-radius: 4vw;
  }
  .people-main-cont h2 {
    font-size: 3.3vw;
  }
  .people-main-cont p {
 width: 80%;
    font-size: 3.5vw;
}
}

`;

const Occasions = styled.div`
width: 80%;
height: auto;
min-height: 20vw;
margin-top: 3vw;
padding-bottom: 3vw;

.occasion-box{
    width: 100%;
    height: 25vw;
    display: flex;
    align-items: center;
    position: relative;
    border-right: 3px solid #2f9cda;
    margin-top: 6vw;
}
.ob2{
    justify-content: flex-end;
    border: none;
    border-left: 3px solid #2f9cda;
}
.occasion-images{
    width: 55%;
    height: 98%;
background-color:rgb(46, 46, 46);
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 0.5vw;
padding: 0.5vw;
}
.occasion-img-box{
    width: 49%;
    height: 12vw;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
}
.occasion-img-box img{
    width: 100%;
}
.occasion-cont{
    width: 50%;
    height: 90%;
    background-color: black;
    position: absolute;
    right: 1vw;
   
}
.ob2 .occasion-cont{
    right: auto;
    left: 1vw;
}
.occasion-cont h2{
    color: white;
    font-family: "Sdel";
    font-size: 2vw;
    padding: 1vw;
    margin-top: 3vw;
    margin-left: 2vw;
}
.occasion-cont p{
    color: white;
    padding: 0vw 1vw;
    font-family: "figtree";
    width: 70%;
    font-size: 1vw;
    line-height: 1.6;
    margin-left: 2vw;
}
@media screen and (max-width:768px){
  padding-bottom: 10vw;
  .occasion-box {
    width: 100%;
    height: 110vw;
    margin-top: 10vw;
    flex-direction: column;
    align-items: center;
    border: none;
    border-bottom: 3px solid #2f9cda;
  }
  .ob2 {
    justify-content: flex-start;
  }
  .ob2 .occasion-cont {
    right: auto;
    left: auto;
    bottom: 2vw;
}
  .occasion-images {
    width: 100%;
    height: 47%;
  }
  .occasion-cont {
    width: 90%;
    height: 60%;
    right: auto;
    bottom: 2vw;
  }
  .occasion-img-box {
    width: 49%;
    height: 25vw;
  }
  .occasion-cont h2 {
    font-size: 3.5vw;
  }

  .occasion-cont p {
    width: 91%;
    font-size: 3.5vw;
  }
}
`;
export default function Peoples() {
      useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);
  return (
    <div>
      <PeopleContainer>
          <TopHeader>
                <TopHeaderCont>
            <h2><AnimatedText lines={['Peoples']} /></h2>
             <p>Take charge of your own opportunities - no one else will create them for you.</p>
             <p className='element'>Home &gt; <span>Peoples</span></p>
                </TopHeaderCont>
               </TopHeader>
             <PeopleMain>
           <div className="people-main-cont">
            <h2>Imagine going to work each day, <br /> knowing that your efforts contribute to improving businesses.</h2>
            <p>At Traicon, we foster a supportive environment that encourages career growth, promotes a fun work-life balance, and prioritizes inclusion and belonging. Here are the five key pillars that make Tradepass an exceptional workplace.</p>
            <div className="people-main-glow">

            </div>
            <div className="people-main-glow pmg2">

</div>
           </div>
            </PeopleMain>
            <Occasions>
<div className="occasion-box">
<div className="occasion-images">
<div className="occasion-img-box">
    <img src={team1} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team2} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team3} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team4} alt="" />
</div>
</div>
<div className="occasion-cont">
<h2><AnimatedText lines={['Unforgettable Team Escapes']} /></h2>
<p data-aos="fade-up">At Traicon, we believe that a team that enjoys together thrives together. Our team outings feature luxurious trips to stunning destinations, packed with engaging group activities and exciting games, creating the perfect blend of fun and teamwork.</p>
</div>

</div>
<div className="occasion-box ob2">
<div className="occasion-images">
<div className="occasion-img-box">
    <img src={team1} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team5} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team7} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team6} alt="" />
</div>
</div>
<div className="occasion-cont">
<h2><AnimatedText lines={['Transparent Communication Culture']} /></h2>
<p data-aos="fade-up">At Traicon, we embrace an Open-Door policy, ensuring that every employee feels heard and valued. Our team members are always welcome to connect with the management, share their suggestions, express opinions, or voice any concerns about organizational activities at any time</p>
</div>

</div>
<div className="occasion-box">
<div className="occasion-images">
<div className="occasion-img-box">
    <img src={team8} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team9} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team9} alt="" />
</div>
<div className="occasion-img-box">
    <img src={team4} alt="" />
</div>
</div>
<div className="occasion-cont">
<h2><AnimatedText lines={['Embracing Diversity & Inclusion']} /></h2>
<p data-aos="fade-up">At Traicon, diversity and inclusion are at the heart of our culture. Every employee, regardless of their role or designation, is equally valued, supported, and included in all aspects of the workplace. We celebrate and promote individuals from all communities, backgrounds, and ethnicities, fostering an environment of respect and unity.</p>
</div>

</div>
<div className="occasion-box ob2">
<div className="occasion-images">
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
</div>
<div className="occasion-cont">
<h2><AnimatedText lines={['Celebrating Achievements']} /></h2>
<p data-aos="fade-up">At Traicon, we believe that performance and contributions deserve to be recognized. Every employee is appreciated for their hard work through a variety of rewards and incentives, ensuring that their efforts are always acknowledged and valued.</p>
</div>

</div>
<div className="occasion-box">
<div className="occasion-images">
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
<div className="occasion-img-box"></div>
</div>
<div className="occasion-cont">
<h2><AnimatedText lines={['Global Travel Opportunities']} /></h2>
<p data-aos="fade-up">If traveling to international destinations is on your bucket list, Tradepass is the perfect place for you. Our employees have the exciting opportunity to visit various countries while hosting events, expanding both their professional and personal horizons.</p>
</div>

</div>

            </Occasions>
      </PeopleContainer>
    </div>
  )
}
