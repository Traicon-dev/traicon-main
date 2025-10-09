import React, { useRef, useEffect, useState } from 'react';
import video from '../images/video.mp4'
import aboutImg1 from '../images/over1.jpg'
import aboutImg2 from '../images/over2.JPG'
import styled from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import './style.css'
import TraiconNums from './TraiconNums';
import videobg from '../images/videobg.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BarChart from './BarChart';
import VerticalsCarousel from './VerticlesCarousel';
import UpcomingEvents from './UpcomingEvents';
import OurPlatforms from './OurPlatforms';
import conrd from '../images/contrd.webp'
import ClientTestimonial from './ClientTestimonial';
import CustomCursor from './CustomCursor';
import { Link } from "react-router-dom";
import HomeClients from './HomeClients';
import axios from "axios";
import AnimatedText from './AnimatedText';
import banner from '../images/main_bg.jpg'



gsap.registerPlugin(ScrollTrigger);


const CoverDiv = styled.div`
width : 100%;
height : 100vh;
background: black;
display : flex;
align-items : center;
justify-content: center;


`;
const CoverCont = styled.div`
background-image: url(${videobg});
width:100%;
height : 100vh;
position: relative;
z-index : 2;
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;
`;
const CoverContent = styled.div`
width: 80%;
height: auto;
margin-top: -3vw;
`;
const CoverOverlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color:rgba(0, 0, 0, 0.1);
`;
const MainVideo = styled.video`
position:absolute;
width:100%;
height : 100vh;
object-fit:cover;
`;
const CoverTag = styled.h1`
color:white;
font-size : 2vw;
line-height: 4vw;
font-family : "sdl";
position: relative;

& span{
  font-size : 4.4vw;
  font-family : "sdeb";
}

@media screen and (max-width:768px) {
  font-size: 6vw;
  line-height: 10vw;

  & span{
  font-size : 10vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
  font-size: 5vw;
  line-height: 6vw;

  & span{
  font-size : 7vw;
}
}
`;
const CoverTag2 = styled.h2`
color:#2f9cda;
font-size : 4.5vw;
line-height:4vw;
font-family : "sdeb";
position: relative;
display: flex;

.cut{
  color: white;
  padding-right: 1vw;
}

@media screen and (max-width:768px) {
font-size: 9.5vw;
flex-direction: column;
line-height: 11vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  font-size: 6vw;
}
`;
const CoverBtn = styled.div`
  color: white;
  font-size: 1.2vw;
  padding: 1vw 2vw;
  margin-top: 4vw;
  border-radius: 4vw;
  border: 3px solid #ffffff;
  width: fit-content;
  font-family: "sdb";
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #2f9cda;
    border: 3px solid #2f9cda;
  }

 
  &::before {
    content: "";
    position: absolute;
    top: var(--y);
  left: var(--x);
  width: 3vw; 
  height: 3vw;
  opacity: 0;
   background:rgb(255, 255, 255);
   filter: blur(25px);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    
  }
  &:hover::before{
    opacity: 1;
  }

  @media screen and (max-width:768px) {
    color: white;
    font-size: 3.5vw;
    padding: 2vw 5vw;
    margin-top: 4vw;
    border-radius: 8vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
         color: white;
    font-size: 2.5vw;
    padding: 2vw 5vw;
    margin-top: 4vw;
    border-radius: 8vw;
  }
`;
const About = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;

& .about-glow{
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  position: absolute;
  top: -5vw;
  background-color: #2f9cda;
  filter: blur(100px);
}

& .ab-cir{
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  border: 3vw solid white;
  position: absolute;
  top: -16vw;
  left: 1vw;
  opacity: 0.1;
}
& .ab-grid-box{
  position: absolute;
  width: 20vw;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -5vw;
  top: -5vw;
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


@media screen and (max-width: 768px){
height: auto;
}
@media screen and (min-width:768px) and (max-width:1023px){
  height: auto;
}
`;
const AboutCont = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

& .ab-left-img-box{
  position: absolute;
  width: 20vw;
  height: 25vw;
  left: -5vw;
  bottom: 6vw;
  transition: all 1s ease;
}

& .ab-left-img-patch{
  width: 90%;
  height: 90%;
  position: absolute;
  background-color: #313131;
  border-radius: 2vw;
  transform: rotate(-10deg);
}
& .ab-left-img{
  width: 90%;
  height: 90%;
  position: absolute;
  background-color: white;
  border-radius: 2vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(5deg);
}
& .ab-left-img img{
  width: 110%;
}

& .ab-right-img-box{
  position: absolute;
  width: 20vw;
  height: 25vw;
  right: -5vw;
  top: 6vw;
  transition: all 1s ease;
}

& .ab-right-img-patch{
  width: 90%;
  height: 90%;
  position: absolute;
  background-color: #313131;
  border-radius: 2vw;
  transform: rotate(-10deg);
}
& .ab-right-img{
  width: 90%;
  height: 90%;
  position: absolute;
  background-color: white;
  border-radius: 2vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(5deg);
}
& .ab-right-img img{
  width: 110%;
}
& .ab-right-patch{
  width: 7vw;
  height: 7vw;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
border: 2.5vw solid #2f9cda;
  bottom: -10%;
  right: 0;
  transform: rotate(-10deg);



}

@media screen and (max-width: 767px) {
   


    .ab-left-img-box{
      bottom: auto;
      top: 20vw;
      width: 40vw;
      height: 50vw;
    }

    .ab-right-img-box{
  position: absolute;
  width: 40vw;
  height: 50vw;
  right: -5vw;
  top: 6vw;
  transition: all 1s ease;
}
.ab-right-patch{
  width: 15vw;
  height: 15vw;
  border-width: 6vw;
}
  }
  @media screen and (min-width:768px) and (max-width:1023px){
        .ab-left-img-box{
      bottom: auto;
      top: 20vw;
      width: 40vw;
      height: 50vw;
    }

    .ab-right-img-box{
  position: absolute;
  width: 40vw;
  height: 50vw;
  right: -5vw;
  top: 6vw;
  transition: all 1s ease;
}
.ab-right-patch{
  width: 15vw;
  height: 15vw;
  border-width: 6vw;
}
  }
`;
const AboutH = styled.h2`
color:white;
font-size: 3.5vw;
text-transform: uppercase;
margin-top: 2vw;
font-family: "sdel";

@media screen and (max-width: 767px) {
  font-size: 9vw;
  margin-top: 8vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
    font-size: 6vw;
  margin-top: 8vw;
}

`;
const AboutHead = styled.h2`
color:white;
font-weight: 300;
font-size: 1.1vw;
opacity: 0.8;
border: 1px solid #2f9cda;
padding: 1vw;
padding-top: 0.8vw;

@media screen and (max-width: 767px) {
  margin-top: 100vw;
  font-size: 3vw;
  padding: 2vw 4vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  margin-top: 80vw;
  font-size: 2vw;
  padding: 2vw 4vw;
}
`;
const AboutPara = styled.div`
width: 50%;

& p{
  color:white;
  text-align: center;
  font-size: 1.05vw;
  font-family: "Source Sans 3";
  font-weight: 300;
  line-height: 1.7;
}


@media screen and (max-width: 768px) {
  width: 100%;
  p{
    font-size: 4vw;
  }
}
@media screen and (min-width:768px) and (max-width:1023px){
    width: 100%;
  p{
    font-size: 2.5vw;
  }
}
`;
const AboutBtn = styled.button`
width: 14.5vw;
height: 6.5vw;
border-radius: 4vw;
border: none;
background-color: #2f9cda38;
font-size: 1vw;
font-family: "Poppins";
color:white;
margin-top: 1vw;
display: flex;
align-items: center;
justify-content: center;

& .ab-btn1{
  width: 11vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3vw;
  background-color: #2f9cda;
}
& .ab-btn2{
  width: 13vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f9cda66;
  border-radius: 3vw;
}
a{
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 767px){
    width: 50.5vw;
    height: 15.5vw;
    border-radius: 11vw;
  font-size: 4vw;

  .ab-btn2 {
    width: 45vw;
    height: 11vw;
    border-radius: 9vw;
}
.ab-btn1 {
    width: 38vw;
    height: 6vw;
    border-radius: 6vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
      width: 35vw;
    height: 15.5vw;
    border-radius: 11vw;
  font-size: 2.5vw;

  .ab-btn2 {
    width: 30vw;
    height: 11vw;
    border-radius: 9vw;
}
.ab-btn1 {
    width: 25vw;
    height: 6vw;
    border-radius: 6vw;
}
}
`;
const CovNums = styled.div`
width:100%;
position:absolute;
bottom:0;
`;

const Transforming = styled.div`
width:100%;
  height:49vw;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content : Center;
  position: relative;
  gap: 2vw;

  & .trans-glow{
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background-color: #2f9cda;
    filter: blur(100px);
    position: absolute;
    top: -5vw;
    right: -10vw;
    opacity: 0.7;
  }

  & .bardata{
  display: flex;
color: white;
  gap: 1vw;
  width: 78%;
  margin-left: 1%;
  justify-content: space-between;
  align-items: center;
}
& .bar-des{
  display: flex;
  gap: 1vw;
  padding: 1vw;
  border: 1px solid #ffffff2e;
  width: 33%;
}
& .bar-des:nth-child(2) .bar-des-box{
  background-color: white;
}
& .bar-des:nth-child(3) .bar-des-box{
  background-color: #98c3dc;
}
& .bar-des-box{
  width: 1vw;
  height: 1vw;
  background-color: #2f9cda;
  margin-top: 0.3vw;
}
& .bar-des-cont{
  font-size: 1vw;
  font-family: "Source Sans 3";
}
& .bar-des-cont span{
  font-size: 1vw;
  font-weight: 300;
}

@media screen and (max-width: 767px) {
  height: auto;
padding: 5vw 0vw;

.bardata{
  flex-direction: column;
  gap: 2vw;
}
.bar-des {
    width: 100%;
   gap: 3vw;
   padding: 4vw 0vw;
}
.bar-des-cont {
    font-size: 3.5vw;
    line-height: 3.5vw;
}
.bar-des-box {
    width: 3vw;
    height: 3vw;
    margin-left: 3vw;
}
.bar-des-cont span {
    font-size: 3.5vw;
    font-weight: 300;
}
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  height: auto;
padding: 5vw 0vw;

.bardata{
  flex-direction: column;
  gap: 2vw;
}
.bar-des {
    width: 100%;
   gap: 3vw;
   padding: 4vw 0vw;
}
.bar-des-cont {
    font-size: 2.5vw;
    line-height: 2.5vw;
}
.bar-des-box {
    width: 3vw;
    height: 3vw;
    margin-left: 3vw;
}
.bar-des-cont span {
    font-size: 2.5vw;
    font-weight: 300;
}
}
`;
const TransCont = styled.div`
width:80%;
  height:auto;
  display:flex;
  margin-left: 3%;
  align-items: center;

  @media screen and (max-width: 767px) {
flex-direction: column;
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  flex-direction: column;
}
`;
const TransLeft = styled.div`
width:35%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
background-size: cover;
background-position: center;
background-color: #1b1b1b;
border-radius: 1vw;
position: relative;

& .transl-overlay{
  width: 100%;
  height: 100%;
  background: linear-gradient(to left,#00000000,black);

}
@media screen and (max-width: 767px) {
width: 100%;
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  width: 100%;
}
`;
const TransRight = styled.div`
width:60%;
  height:auto;
  display:flex;
  flex-direction:column;
  padding-left: 2vw;
  justify-content: center;

& .transh1{
  color: white;
  text-align: left;
 width: fit-content;
  font-family: "sdel";
  text-transform: uppercase;
  font-size: 1.7vw;
  line-height: 1.5vw;
}

& .transh2{
  color: white;
  text-align: left;
 width: fit-content;
  font-family: "sdel";
  text-transform: uppercase;
  font-size: 3vw;
  line-height: 2.5vw;
}
& .transh3{
  color: #2f9cda;
  text-align: left;
 width: fit-content;
  font-family: "sdeb";
  text-transform: uppercase;
  font-size: 3vw;
  line-height: 2.5vw;
}


  & h3{
  color:#FFB637;
  font-size:1.2vw;
  font-family:"sdel";
  font-weight: 400;
  }
  & p{
  color:white;
  font-family:Source Sans 3;
  font-size:1.1vw;
 text-align:justify;
    font-weight:300;
    line-height:1.7;
  }

  @media screen and (max-width: 768px) {
  width: 100%;
margin-top: 7vw;

.transh1{
  font-size: 4vw;
  line-height: 4vw;
}
.transh2{
  font-size: 6vw;
  line-height: 6vw;
}
.transh3{
  font-size: 6vw;
  line-height: 6vw;
}
h3{
  font-size: 4vw;
}
p{
  font-size: 4vw;
}
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  width: 100%;
margin-top: 7vw;

.transh1{
  font-size: 3vw;
  line-height: 3vw;
}
.transh2{
  font-size: 5vw;
  line-height: 5vw;
}
.transh3{
  font-size: 5vw;
  line-height: 5vw;
}
h3{
  font-size: 3vw;
}
p{
  font-size: 2.5vw;
}
}
`;

const TransDataBox = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 1vw;
color:white;


`;

const BarBox = styled.div`
width: 23vw;
height: 20vw;
display: flex;
align-items: center;
justify-content: center;
border-radius: 1vw;
position: relative;

@media screen and (max-width: 768px) {
width: 70vw;
height: 65vw;
}
`;

const HomeEvents = styled.div`
width: 100%;
height: 92vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 768px) {
  height: auto;
  padding: 15vw 0vw;
}
`


//  const History = styled.div`
//  width: 100%;
//  height: auto;
//  min-height: 100vh;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
 
//  & h2{
//   font-family: "sdeb";
//   font-size: 3vw;
//   color: white;
//  }
//  `;

 const Verticals = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 overflow: hidden;

 & .ver-glow{
  width: 15vw;
  height: 15vw;
  background: #2f9cda;
  border-radius: 50%;
  position: absolute;
  top: -8vw;
  filter: blur(100px);
 }

 @media screen and (max-width:768px) {

 }
 @media screen and (min-width: 768px) and (max-width: 1024px){
    height: auto;
  padding: 5vw 0vw;
 }
 `;
 const VerCont = styled.div`
 width: 80%;
 height: 80vh;

 & h2{
  color: white;
  font-family: "sdel";
  text-transform: uppercase;
  font-size: 3vw;
  line-height: 3vw;
 }

 & p{
  color: white;
  font-family: "Source Sans 3";
  text-align: center;
  font-size: 1.1vw;
  margin: 0;
  padding: 0;
  margin-top: 1vw;
 font-weight: 300;
 padding-bottom: 2vw;
 }

 @media screen and (max-width:768px) {
  height: auto;
  
  h2{
    font-size: 8vw;
    line-height: 8vw;
    width: 80%;
    margin-left: 10%;
  }
  p{
    line-height: 1.6;
    font-size: 3.5vw;
    padding-bottom: 5vw;
  }
 }
 @media screen and (min-width: 768px) and (max-width: 1024px){
    height: auto;
  
  h2{
    font-size: 5vw;
    line-height: 5vw;
    width: 80%;
    margin-left: 10%;
  }
  p{
    line-height: 1.6;
    font-size: 2.5vw;
    padding-bottom: 5vw;
  }
 }
 `;

 const TestimonialWrapper = styled.div`
 width: 100%;
 height: 100vh;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 overflow: hidden;
 margin-top: 3vw;

 & h2{
  text-transform: uppercase;
  font-family: "sdel";
  font-size: 3vw;
  margin-top: 5vw;
  color: white;
 }

 & p{
  font-size: 1.3vw;
  font-family: "sdl";
  color: black;
  color: white;
 }

 @media screen and (max-width: 767px) {
  height: auto;
  padding: 7vw 0vw;

  h2{
    font-size: 7vw;
  }
  p{
    font-size: 4vw;
    text-align: center;
    width: 80%;
  }
 
 }
 @media screen and (min-width:768px) and (max-width:1023px){
      height: auto;
  padding: 5vw 0vw;

  h2{
    font-size: 5vw;
  }
  p{
    font-size: 2.5vw;
    text-align: center;
    width: 80%;
  }
  }

 `;
const TestimonialGlow = styled.div`
width: 20vw;
height: 20vw;
background-color: #2f9cda;
border-radius: 50%;
position: absolute;
right: -16vw;
top: 7vw;
filter: blur(70px);
`;


const CircularTextWrapper = styled.div`
  position: relative;
  width: 12vw; 
  height: 12vw; 
  display: flex;
  justify-content: center;
  align-items: center;
transform: translate(-2.5vw,-2.5vw);


@media screen and (max-width:767px) {
  width: 20vw;
  height: 20vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 20vw;
  height: 20vw;
}
`;

const CircularText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg);
  white-space: nowrap;
  color: white;
`;

const CircularLetter = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg) translateY(-4.6vw); 
  font-size: 1.2vw;
  text-transform: uppercase;
  color: black;
  font-family: "sdeb";

  @media screen and (max-width:767px) {
font-size: 3vw;

transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg) translateY(-10.6vw); 
}
@media screen and (min-width:768px) and (max-width:1023px){
  font-size: 3vw;

transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg) translateY(-10.6vw); 
}
`;
const ContactContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 49vw;
position: relative;

& .cont-glow1{
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  position: absolute;
  border: 3vw solid #2f9cda;
  left: 3vw;
  top: 0vw;
}

& .cont-lines{
  width: 50vw;
  height: 50vw;
  position: absolute;
  border-radius: 50%;
  border: 1px solid white;
  right: -25vw;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cont-line{
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cl2{
  width: 30vw;
  height: 30vw;
}
.cl3{
  width: 20vw;
  height: 20vw;
}
.cl4{
  width: 10vw;
  height: 10vw;
}
& p{
  width: 60%;
  color: white;
  font-size: 1.1vw;
  font-family: "figtree";
  font-weight: 300;
  text-align: center;
  margin: 0;
  line-height: 1.6;
  padding: 0;
}

@media screen and (max-width:768px) {
 height :auto ;

  p {
    width: 78%;
    font-size: 3.1vw;
 }
}
@media screen and (min-width:768px) and (max-width:1023px){
   height :auto ;

  p {
    width: 78%;
    font-size: 2.5vw;
 }
}
`;

const ContactBox = styled.div`
width: 80%;
height: 38vw;
border-radius: 2vw;
background-color: #ffffff24;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
backdrop-filter: blur(30px);
z-index: 2;

& img{
  width: 80%;
  position: absolute;
  bottom: -3vw;
  
}
@media screen and (max-width:768px){
  width: 90%;
    height: 90vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 90%;
  height: 60vw;
}
`;

const ContactH = styled.h2`
color: white;
font-size: 3vw;
text-transform: uppercase;
font-family: "sdel";
margin-top: 3vw;

@media screen and (max-width:768px){
  font-size: 8vw;
  margin-top: 6vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  font-size: 5vw;
  margin-top: 6vw;
}
`;

const ContForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  margin-top: 2vw;

  .label-box {
    position: relative;
    width: 30vw;
  }

  label {
    position: absolute;
    left: 1vw;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1vw;
    font-family: "sdm";
    letter-spacing: 0.05vw;
    color: #222;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  input {
    width: 28vw;
    height: 2.5vw;
    border-radius: 0.5vw;
    border: 2px solid grey;
    padding: 0 1vw;
    font-size: 1vw;
    outline: none;
    transition: all 0.3s ease;
  }

  input:focus + label,
  label.active {
    top: -0.8vw;
    left: 1vw;
    font-size: 0.8vw;
    color: #0068a3;
  }

  button {
    width: 12vw;
    height: 2.5vw;
    border-radius: 0.5vw;
    background: linear-gradient(45deg, #0068a3, #2f9cda);
    font-family: "sdeb";
    font-size: 1vw;
    letter-spacing: 0.05vw;
    border: 2px solid white;
    color: white;
    cursor: pointer;
  }


  @media screen and (max-width:768px) {
    margin-top: 7vw;
    .label-box{
      width: 50vw;
    }
    label{
      font-size: 3vw;
      left: 3vw;
    }
    input{
      width: 45vw;
      height: 6.5vw;
    }
    button {
    width: 26vw;
    height: 7.5vw;
    font-size: 3vw;
    }
    input:focus + label,
  label.active {
    top: -1.5vw;
    left: 1vw;
    font-size: 2vw;
    color: #0068a3;
  }
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    margin-top: 7vw;
    .label-box{
      width: 43vw;
    }
    label{
      font-size: 2.5vw;
      left: 3vw;
    }
    input{
      width: 40vw;
      height: 5vw;
    }
    button {
    width: 22vw;
    height: 5.5vw;
    font-size: 2.5vw;
    }
    input:focus + label,
  label.active {
    top: -1.5vw;
    left: 1vw;
    font-size: 2vw;
    color: #0068a3;
  }
  }
`;
const Loader = styled.div`
  
    color: white;
    animation: rotate 1s infinite linear;
    opacity:${(props) => (props.isActive ? '1' : '0')};
  
  @keyframes rotate {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`;
const CircularTextComponent = () => {
  const [rotation, setRotation] = useState(0);
  const text = " Striving for Perfection".split(''); 

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotation(scrollY * 0.1); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CircularTextWrapper>
      <CircularText rotation={rotation}>
        {text.map((char, index) => {
          // Calculate angle for each letter
          const angle = (360 / text.length) * index;
          return (
            <CircularLetter key={index} angle={angle}>
              {char}
            </CircularLetter>
          );
        })}
      </CircularText>
    </CircularTextWrapper>
  );
};


export default function Home() {

  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const sectionRef = useRef(null); // Create a reference
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollToSection = () => {
    const sectionTop = sectionRef.current.offsetTop;
    const offset = window.innerHeight * 0.1; // Calculate 10vh in pixels
    window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
  };
  
  useEffect(() => {
  const handleScrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.getElementById(hash.slice(1));
    if (element) {
      const elementTop = element.offsetTop;
      const offset = 100; 

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    } else {
      console.log(`Element with id ${hash.slice(1)} not found.`);
    }
  }
};
  
    handleScrollToHash(); // Initial scroll when the component mounts if there's a hash
  
    window.addEventListener('hashchange', handleScrollToHash); // Listen for hash changes
    return () => window.removeEventListener('hashchange', handleScrollToHash); // Clean up the event listener
  }, []); // Empty dependency array ensures it runs once on component mount
  

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const leftImg = leftImgRef.current;
    const rightImg = rightImgRef.current;

    // Adjust animation properties based on screen width
    const isMobile = screenWidth <= 768; // Example for mobile (can adjust value)

    gsap.fromTo(
      leftImg,
      { y: isMobile ? 30 : 50 }, // Adjust initial position for mobile/tablet
      {
        y: isMobile ? -50 : -100,
        scrollTrigger: {
          trigger: leftImg,
          start: "top 91%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      rightImg,
      { y: isMobile ? 30 : 50 }, // Adjust initial position for mobile/tablet
      {
        y: isMobile ? 100 : 150,
        scrollTrigger: {
          trigger: rightImg,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [screenWidth]);

  useEffect(() => {
    AOS.init({
      // Global settings (optional)
      duration: 500, // Animation duration in milliseconds
    });
  }, []);

  const handleMouseMove = (e) => {
    console.log('hey')
    const btn = e.target.getBoundingClientRect();
    const x = e.clientX - btn.left; 
    const y = e.clientY - btn.top; 
  
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };

  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setInputFocused(true);
  const handleBlur = () => setInputFocused(inputValue !== "" ? true : false);

  const handleChange = (e) => setInputValue(e.target.value);

  const [loader,setLoader] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoader(1); // Consistent camelCase
  
    try {
      const response = await axios.post("https://traiconevents.com/connect.php", {
        email: inputValue.trim(), // Trimmed to prevent errors
      });
  
      alert("Thank you for your subscription!");
      setInputValue("");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again later.");
    } finally {
      setLoader(null); // Ensures loader reset even if there's an error
    }
  };
  
  return (
    <div>
   <CoverDiv className="cover">
   <CustomCursor />
   <MainVideo autoPlay muted  playsInline loop preload='auto' poster={banner}>
        <source src={video} type="video/mp4" />
      </MainVideo>
      <CoverCont>
      <CoverOverlay></CoverOverlay>
      <CoverContent>
      <CoverTag>ENABLING GLOBAL <br /> <span> <span style={{ color: '#2f9cda' }}>BUSINESSES</span>  WITH OUR </span>   </CoverTag>
       <CoverTag2>
      <span className='cut'>CUTTING-EDGE</span>
       <TypeAnimation
      sequence={[
        'EVENTS',
        4000,
        '',      
        1000, 
      ]}
      wrapper="span"
      speed={300}
      repeat={Infinity}
    />
       </CoverTag2>
       <CoverBtn onClick={scrollToSection} onMouseMove={handleMouseMove}
  style={{
    "--x": "50%",
    "--y": "50%",
  }}>
     
      UPCOMING EVENTS
        </CoverBtn>
      </CoverContent>
 
       <CovNums>
       <TraiconNums />
       </CovNums>
      </CoverCont>
   </CoverDiv>
    <About>
      <div className="about-glow">

      </div>
      <div className="ab-cir">

      </div>
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
     <AboutCont>
      <div className="ab-left-img-box" ref={leftImgRef}>
        <div className="ab-left-img-patch">

        </div>
        <div className="ab-left-img">
<img src={aboutImg2} alt="networking image" />
        </div>
      </div>
      <div className="ab-right-img-box" ref={rightImgRef}>
        <div className="ab-right-patch">
        <CircularTextComponent />
        </div>
        <div className="ab-right-img-patch">

        </div>
        <div className="ab-right-img">
<img src={aboutImg1} alt="speaker traicon" />
        </div>
      </div>
      <AboutHead data-aos="fade-up">ABOUT US</AboutHead>
      <AboutH>
      <AnimatedText lines={["ABOUT TRAICON"]} />
      </AboutH>
      <AboutPara>
        <p data-aos="fade-up" data-aos-delay="500">
        Traicon is a frontrunner in the space of global capability building, B2B events and management consulting for diverse spectrum of industries. We partner with organizations that intend to scale up their growth potential and align with the opportunities that can foster results.
        </p>
        <p data-aos="fade-up" data-aos-delay="600">
        By connecting our partners with the right people at the right time, we at Traicon create white spaces in industries to stimulate business growth. To be orchestrating the unique unchartered territories in business, 
        </p>
      </AboutPara>
      <AboutBtn data-aos="zoom-in">
     
        <div className="ab-btn2">
        <div className="ab-btn1">
        <Link to="/about">READ MORE</Link>
        </div>
        </div>
     
      </AboutBtn>
     </AboutCont>
    </About>
    <HomeEvents data-aos="fade-up"  ref={sectionRef}>
  <UpcomingEvents />
   </HomeEvents>
    {/* <ThirdPageAnimation /> */}
    <OurPlatforms />
<Transforming>
  <div className="trans-glow">

  </div>
<TransCont>
<TransLeft data-aos="fade-right">
<TransDataBox>
  <BarBox>
  <BarChart />
  </BarBox>

  
  </TransDataBox>
</TransLeft>
<TransRight>
  <h2 className='transh1'><AnimatedText lines={["Transforming"]} /> </h2> 
 <h2 className='transh2'><AnimatedText lines={["The world"]} /></h2>
   <h2 className='transh3'><AnimatedText lines={["with cutting edge"]} /></h2>
  <h3 data-aos="fade-left">B2B PLATFORMS - CONFERENCES - EXPO’S - TRAINING COURSES</h3>
  <p data-aos="fade-left">
  Pride of achievement, a sense of belonging and extensive contribution, these are the core elements in our vision for leadership. Backed by years of experience, our team is full of passionate people who love a challenge and will work towards creating a sustainable impact to deliver cutting-edge solutions and insights for every client we engage with. With various industries roaring back, today’s timelines increasingly trump’s pricing as the most important factor in purchasing. This is where Traicon comes in!
  </p>


</TransRight>
</TransCont>
<div className="bardata" data-aos="fade-left">
    <div className="bar-des">
      <div className="bar-des-box">

      </div>
      <div className="bar-des-cont">
      B2B & EXHIBITIONS <br />
      <span>ASIA-MIDDLE EAST-AFRICA</span> 
      </div>
    </div>
    <div className="bar-des">
      <div className="bar-des-box">

      </div>
      <div className="bar-des-cont">
      CONFERENCES SUMMITS & FORUMS
     <br />
      <span>  ASIA-MIDDLE EAST-AFRICA</span> 
      </div>
    </div>
    <div className="bar-des">
      <div className="bar-des-box">

      </div>
      <div className="bar-des-cont">
      PROFESSIONAL TRAINING
      <br />
      <span> MIDDLE EAST-AFRICA</span> 
      </div>
    </div>
  </div>
</Transforming>
{/* <History>
  <h2><AnimatedText lines={['OUR HISTORY']} /></h2>
<Timeline />
</History> */}
<Verticals>
  <div className="ver-glow">

  </div>
<VerCont>
  <h2><AnimatedText lines={[' Verticals we focus']} /></h2>
  <p data-aos='fade-up'>We have produced trainings and managed events for our partners across industries – including Banking & Finance, Business Management, Oil & Gas, Environment, Construction, Health, Fire and Safety – making us one of the most trusted solution providers in the industry. We have helped our client’s change the way they connect, implement and distribute business to their clients. Our modules will encourage you to take on the biggest challenges and the tenacity to see them through. With various industries roaring back, today’s timelines increasingly trumps pricing as the most important factor in purchasing. This is where Traicon comes in!</p>
  <VerticalsCarousel />
</VerCont>
</Verticals>
<HomeClients id="homeClients" />

<ContactContainer>
<div className="cont-glow1">

</div>
<div className="cont-lines">
<div className="cont-line cl1">
<div className="cont-line cl2">
  <div className="cont-line cl3">
    <div className="cont-line cl4">

    </div>
  </div>
</div>
</div>
</div>
    <ContactBox>
      <ContactH><AnimatedText lines={["Stay Connected"]} /></ContactH>
      <p data-aos="fade-up">"Don't miss out on updates, exclusive content, and special offers! Subscribe now and stay connected with everything we have to offer."</p>
      <ContForm onSubmit={handleSubmit} className="sus-form">
      <div className="label-box">
        <input
          type="email"
          id="mail"
          name="email"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        <label htmlFor="mail" className={inputFocused || inputValue ? "active" : ""}>
          ENTER YOUR EMAIL*
        </label>
      </div>
      <button type="submit">SUBSCRIBE</button>
      <Loader isActive={loader !== null}><i class="fa-solid fa-spinner"></i></Loader>
      </ContForm>
<img src={conrd} alt="people's group" className="cont-box-img" />
    </ContactBox>
</ContactContainer>
<TestimonialWrapper data-aos="fade-up">
  <TestimonialGlow></TestimonialGlow>
  <h2 ><AnimatedText lines={["What our client says ?"]} /></h2>
  <p data-aos="fade-up">Dont only hear us, But also check our client feedback</p>
<ClientTestimonial />
</TestimonialWrapper>
    </div>
  )
}
