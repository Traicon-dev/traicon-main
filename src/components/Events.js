import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import AnimatedText from './AnimatedText';

import FintechBh from '../images/HomeEvents/frs_logo-bahrain.svg'
import DcisIndLogo from '../images/HomeEvents/dcis_india.png'
import dcisIndBg from '../images/events/dcis/dcis__ind_bg.jpg'
import OgtsSaudi from '../images/HomeEvents/ogts_logo.png'
import frsbh from "../images/HomeEvents/frs_bh.jpg"
import ogts from "../images/HomeEvents/events-bg.jpg"
import frsbhLogo from "../images/HomeEvents/frs_logo-bahrain.svg"
import whrphBg from "../images/events/hr/hr_ph_bg.jpg"
import whrphLogo from "../images/events/hr/whr_ph_logo.png"
import dcisSaLogo from "../images/events/dcis/dcis_southafrica_logo.png"
import dcisSaBg from "../images/events/dcis/dcis_southafrica_bg.jpg"
import crsphLogo from "../images/events/crs/crs_ph-logo.png"
import crsphBg from "../images/events/crs/crs_ph_bg.jpg"
import dcisphBg from "../images/events/dcis/dcis_ph_bg..jpg"
import dcisphLogo from "../images/events/dcis/dcis_ph_logo.png"
import dcisausBg from "../images/events/dcis/dcis_aus_bg.jpg"
import dcisausLogo from "../images/events/dcis/dcis_aus_logo.png"
import frsphBg from "../images/events/frs/fintech_ph_bg.jpg"
import frsphLogo from "../images/events/frs/frs_ph_logo.svg"
import rmsIndBg from "../images/events/indian/rms_bg.jpg"
import rmsIndLogo from "../images/events/indian/RMS logo 2025.png"
import crsIndBg from "../images/events/indian/cyber_ind_bg.jpg"
import crsIndLogo from "../images/events/indian/cyber_ind_logo.svg"
import crsbrBg from "../images/events/crs/cyber_brunei_bg.jpg"
import crsbrLogo from "../images/events/crs/cyber+brunei_logo.png"
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
import { Helmet } from "react-helmet";
import { a } from "@react-spring/web";


const EventContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: auto;
width: 100%;

`;
const ActiveEventsBox = styled.div`
width: 100%;
height: 35vw;
overflow: hidden;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.active-event-bg{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: all 0.3s ease;
}
.fade-out{
opacity: 0;
}
.fade-in{
  opacity: 1;
}
.active-event-bg img{
  width: 100%;
  object-fit: cover;
  margin-top: 23vw;
}
.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color:rgba(0, 0, 0, 0.76);
}
.top-event-box{
  width: 65%;
  height: 18vw;
  background-color:aliceblue;
  position: relative;
  z-index: 3;
  margin-top: 1vw;
  display: flex;
  align-items: center;
  box-shadow: 1vw 1vw 1vw rgba(0, 0, 0, 0.66);
  border-radius: 0.5vw;
}
.toph{
  position: relative;
  z-index: 3;
  color: white;
  margin-top: 5vw;
  font-family: "sdel";
  text-transform: uppercase;
  font-size: 1vw;
  letter-spacing: 0.2vw;
}
.top-event-date{
  color: white;
  position: relative;
  z-index: 3;
  font-family: "sdel";
  font-size: 3vw;
  margin-top: 0.5vw;
  color:rgb(255, 255, 255);
}
.event-details{
  width: 62%;
  height: 100%;
  margin-left: 3%;
}
.event-logo-part{
  width: 35%;
  height: 100%;
}
.event-name{
  font-size: 1.8vw;
  margin-top: 2vw;
  font-family: "sdb";
  text-transform: uppercase;
  width: 80%;
  margin-left: 2vw;
}
.conclude{
  font-family: "concluded";
  margin-left: 2vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  color: red;
  width: fit-content;
}
.event-place{
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  color:rgb(80, 80, 80);
  margin-top: 0.5vw;
  margin-left: 2vw;
}
.event-buttons{
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-left: 2vw;
  position: absolute;
  bottom: 2vw;
}
.visit{
  width: 11vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background:linear-gradient(45deg,rgb(53, 53, 53),rgb(76, 76, 76));
  height: 3vw;
  font-size: 1vw;
  font-family: "sdm";
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
.get{
  font-family: "sdl";
  font-size: 1.1vw;
  color:rgb(72, 72, 72);
}
.event-logo-part{
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.event-logo-box{
  width: 95%;
  height: 15vw;
  background-color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.event-logo-box img{
  width: 60%;
  margin-left:-2vw;
}
.event-logo-box .sq{
width: 40%;
}

.cuts{
  position: absolute;
  left: -0.4vw;
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
}
.cuts-dot{
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  background-color: aliceblue;
}
.ticket-cut{
width: 5vw;
height: 5vw;
background-color: aliceblue;
border-radius: 50%;
right: -2.5vw;
position: absolute;
}
.navigation-buttons{
  position: relative;
  z-index: 10;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-btn{
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  border: none;
  background: black;
  color: white;
  font-family: "poppins";
  font-size: 2vw;
}
.next-button{
  transform: translateX(1vw);
}
.previous-button{
  transform: translateX(-1vw);
}


@media screen and (max-width: 767px) {
  height: 150vw;

.navigation-buttons{
  margin-top: 30vw;
}

.toph {
    font-size: 3vw;
    letter-spacing: 1.2vw;
}
.top-event-date {
    font-size: 8vw;
    margin-top: 1.3vw;
}
.top-event-box{
  height: 75vw;
  flex-direction: column;
}
.event-details{
  width: 97%;
  position: relative;
  height: 70vw;
}
.active-event-bg img{
  margin-top: 0;
  object-fit: cover;
  height: 100%;
}
.event-logo-part {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.event-logo-box{
  height: 35vw;
}
.cuts-dot {
    width: 1.8vw;
    height: 1.8vw;
}
.event-name {
  font-size: 3.5vw;
}
.conclude{
  font-size: 3.5vw;
}
.event-place {
  font-size: 3.1vw;
}

 .visit {
    width: 30vw;
    height: 7vw;
    font-size: 2.7vw;
}
.get {
    font-size: 3.5vw;
}
.cuts{
 left:-1vw;
}
.nav-btn {
    width: 10vw;
    height: 10vw;
    font-size: 5vw;
}
.previous-button {
    transform: translateX(-12vw);
}
.next-button {
    transform: translateX(12vw);
}
}
@media screen and (min-width: 768px) and (max-width:1024px){
   height: 120vw;

.navigation-buttons{
  margin-top: 30vw;
}

.toph {
    font-size: 2.5vw;
    letter-spacing: 1vw;
}
.top-event-date {
    font-size: 6vw;
    margin-top: 1.3vw;
}
.top-event-box{
  height: 65vw;
  flex-direction: column;
}
.event-details{
  width: 97%;
  position: relative;
  height: 60vw;
}
.active-event-bg img{
  margin-top: 0;
  object-fit: cover;
  height: 100%;
}
.event-logo-part {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.event-logo-box{
  height: 30vw;
}
.cuts-dot {
    width: 1.8vw;
    height: 1.8vw;
}
.event-name {
  font-size: 3.5vw;
}
.conclude{
  font-size: 3.2vw;
}
.event-place {
  font-size: 2.6vw;
}

 .visit {
    width: 25vw;
    height: 7vw;
    font-size: 2.5vw;
}
.get {
    font-size: 2.5vw;
}
.cuts{
 left:-1vw;
}
.nav-btn {
    width: 10vw;
    height: 10vw;
    font-size: 5vw;
}
.previous-button {
    transform: translateX(-12vw);
}
.next-button {
    transform: translateX(12vw);
}
}
`
const EventHbox = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

@media screen and (max-width: 767px){
  height: 75vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  height: 65vw;
}
`;
const EventGlow = styled.div`
width: 20vw;
height: 20vw;
background-color: #2f9cda;
border-radius: 50%;
position: absolute;
filter: blur(90px);
left: -9vw;
top: -2vw;
`;
const GenreForm = styled.div`
width: fit-content;
height: auto;
position: absolute;
top: 6vw;
right: 10%;

select{
  padding: 0.7vw;
  background: none;
  color: white;
 border-radius: 2vw;
 appearance: none;
 -webkit-appearance: none;
 -moz-appearance: none; 
 background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23FFFFFF" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 1rem center;
 background-size: 1.4vw;
 padding-right: 3rem;
 padding-left:2rem ;
}
option{
color: white;
background: black;
margin-top: 1vw;
border: none;
}

@media screen and (max-width: 767px){
  top: 60vw;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  top: 50vw;
}
`;
const EventH = styled.h2`
color: white;
margin: 0;
font-family: "Sdel";
font-size: 3vw;
margin-top: 5vw;

@media screen and (max-width: 767px){
  font-size: 7vw;
  width: 80%;
  text-align: center;
}
@media screen and (min-width: 768px) and (max-width:1024px){
    font-size: 5vw;
  width: 80%;
  text-align: center;
}
`;
const EventP = styled.p`

width: 55%;
color: white;
text-align: center;
font-family:"sdl";
line-height: 1.5;
font-size: 1.1vw;

@media screen and (max-width: 767px){
  font-size: 3.5vw;
  width: 80%;
}
@media screen and (min-width: 768px) and (max-width:1024px){
  font-size: 2.5vw;
}
`;
const EventsBoxes = styled.div`
width: 80%;
height: auto;
min-height: 18vw;
background-color: aliceblue;
margin-top: 3vw;
margin-bottom: 7vw;
border-radius: 0.5vw;
position: relative;
z-index: 3;
`;
const EventBox = styled.div`
width: 100%;
height: 20vw;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.13);
position: relative;

.event-date-box{
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.date-container{
  width: 80%;
  height: 12vw;
background-color:rgb(233, 233, 233);
margin-top: 2vw;
}
.month{
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 3vw;
  font-family: "sdl";
  font-size: 1.6vw;
}
.date{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6vw;
}
.date p{
  font-family: "bebas neue";
  font-size: 3vw;
  margin-left: -1vw;
}
.date p sup{
  font-size: 1vw;
  font-family: "sdm";
  position: absolute;
}

.year{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vw;
  font-size: 1.8vw;
  font-family: "sdl";
  background-color: #2f9cda;
}
.event-details{
  width: 50%;
  height: 100%;
}
.event-name{
  font-size: 2vw;
  margin-top: 2vw;
  font-family: "sdb";
  text-transform: uppercase;
  width: 80%;
  margin-left: 2vw;
  color:rgb(46, 46, 46);
}
.event-place{
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  color:rgb(80, 80, 80);
  margin-top: 0.5vw;
  margin-left: 2vw;
}
.event-buttons{
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-left: 2vw;
  position: absolute;
  bottom: 2vw;
}
.visit{
  width: 11vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background:linear-gradient(45deg,rgb(53, 53, 53),rgb(76, 76, 76));
  height: 3vw;
  font-size: 1vw;
  font-family: "sdm";
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
.get{
  font-family: "sdl";
  font-size: 1.1vw;
  color:rgb(72, 72, 72);
}
.event-logo-part{
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.event-logo-box{
  width: 95%;
  height: 15vw;
background: linear-gradient(45deg,rgb(0, 0, 0),#000000);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.event-logo-box img{
  width: 60%;
  margin-left:-2vw;
  position: relative;
}
.event-logo-glow{
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: #2f9cda;
  position: absolute;
  filter: blur(70px);
  top: -2vw;
  right: -2vw;
}
.event-logo-box .sq{
width: 40%;
}
.cuts{
  position: absolute;
  left: -0.4vw;
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
}
.cuts-dot{
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  background-color: aliceblue;
}
.ticket-cut{
width: 5vw;
height: 5vw;
background-color: aliceblue;
border-radius: 50%;
right: -2.5vw;
position: absolute;
}
.conclude{
  font-family: "concluded";
  margin-left: 2vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  color: red;
  width: fit-content;
}

@media screen and (max-width: 767px){
  width: 100%;
  height: 75vw;
  flex-wrap: wrap;

  .event-date-box {
    width: 40%;
    height: auto;
  }
  .event-details {
    width: 60%;
    position: relative;
    height: 35vw;
}
.event-logo-part {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.event-logo-box {
    width: 83%;
    height: 32vw;
}
.date-container {
    height: 23vw;
}
.month {
    height: 6vw;
    font-size: 3.6vw;
}
.date{
  height: 10vw;
}
.date p {
    font-family: "bebas neue";
    font-size: 5vw;
    margin-left: -1vw;
}
.date p sup {
    font-size: 2vw;
}
.year{
  height: 7vw;
  font-size: 3vw;
}
.event-name {
    font-size: 3.4vw;
    margin-top: 2vw;
}
.event-place {
  font-size: 3.1vw;
}
.visit {
  width: 27vw;
  height: 6vw;
  font-size: 2.5vw;
}
.get{
  font-size: 3vw;
}
.conclude{
  font-size: 3.5vw;

}
}
@media screen and (min-width: 768px) and (max-width:1024px){
    width: 100%;
  height: 65vw;
  flex-wrap: wrap;

  .event-date-box {
    width: 40%;
    height: auto;
  }
  .event-details {
    width: 60%;
    position: relative;
    height: 30vw;
}
.event-logo-part {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.event-logo-box {
    width: 83%;
    height: 27vw;
}
.date-container {
    height: 20vw;
}
.month {
    height: 5vw;
    font-size: 2.6vw;
}
.date{
  height: 8vw;
}
.date p {
    font-family: "bebas neue";
    font-size: 5vw;
    margin-left: -1vw;
}
.date p sup {
    font-size: 2vw;
}
.year{
  height: 7vw;
  font-size: 2.5vw;
}
.event-name {
    font-size: 3vw;
    margin-top: 2vw;
}
.event-place {
  font-size: 2.2vw;
}
.visit {
  width: 25vw;
  height: 6vw;
  font-size: 2.2vw;
}
.get{
  font-size: 2.5vw;
}
.conclude{
  font-size: 3.5vw;
}
}
`

const eventsData = [
  {
    id: 1,
    date: "25 - 26 FEBRUARY",
    name: "FINTECH REVOLUTION SUMMIT",
    place: "HOTEL CROWNE PLAZA MANAMA, BAHRAIN",
    conc: "concluded",
    websiteLink: "https://fintech.traiconevents.com/bh/",
    ticketsLink: "#",
    backgroundImage: frsbh,
    logo: FintechBh,
  },
  {
    id: 2,
    date: "12 MARCH",
    name: "DATACENTRE AND CLOUD INNOVATION SERIES",
    conc: "concluded",
    place: "Philippines",
    websiteLink: "https://dcis.traiconevents.com/philippines/",
    ticketsLink: "https://dcis.traiconevents.com/philippines/delegateregistration/",
    backgroundImage: dcisphBg,
    logo: dcisphLogo,
  },
  {
    id: 3,
    date: "30 APRIL",
    name: "FINTECH REVOLUTION SUMMIT",
    conc: "concluded",
    place: "MANILA, PHILIPPINES",
    websiteLink: "https://fintech.traiconevents.com/ph/",
    ticketsLink: "https://hr.traiconevents.com/ph/delegateregistration",
    backgroundImage: frsphBg,
    logo: frsphLogo,
  },
  // {
  //   id: 4,
  //   date: "9 MAY",
  //   name: "FINTECH REVOLUTION SUMMIT",
  //   conc:"",
  //   place: "CAMBODIA",
  //   websiteLink: "https://fintech.traiconevents.com/cambodia",
  //   ticketsLink: "#",
  //   backgroundImage: frscomBg, 
  //   logo: frscomLogo,
  // },
  {
    id: 4,
    date: "23 MAY",
    name: "World HR Summit",
    conc: "concluded",
    place: "MANILA, PHILIPPINES",
    websiteLink: "https://hr.traiconevents.com/ph/",
    ticketsLink: "https://hr.traiconevents.com/ph/delegateregistration",
    backgroundImage: whrphBg,
    logo: whrphLogo,
  },
  {
    id: 5,
    date: "12 JUNE",
    name: "Rail Modernization summit 2025",
    conc: "conlcuded",
    place: "India",
    websiteLink: "https://rail.traiconevents.com/",
    ticketsLink: "#",
    backgroundImage: rmsIndBg,
    logo: rmsIndLogo,
  },
  {
    id: 6,
    date: "27 JUNE",
    name: "CYBER REVOLUTION SUMMIT",
    conc: "Concluded",
    place: "MANILA, PHILIPPINES",
    websiteLink: "https://cyber.traiconevents.com/philippines",
    ticketsLink: "https://cyber.traiconevents.com/philippines/delegateregistration",
    backgroundImage: crsphBg,
    logo: crsphLogo,
  },
  {
    id: 7,
    date: "23 JULY",
    name: "FINTECH REVOLUTION SUMMIT",
    conc: "Concluded",
    place: "MALAYSIA",
    websiteLink: "https://fintech.traiconevents.com/malaysia/",
    ticketsLink: "https://fintech.traiconevents.com/malaysia/delegateregistration",
    backgroundImage: frsmlBg,
    logo: frsmlLogo,
  },
  {
    id: 8,
    date: "27 August",
    name: "ThaiCyberX",
    conc: "concluded",
    place: "Thailand",
    websiteLink: "https://cyber.traiconevents.com/thailand/",
    ticketsLink: "https://cyber.traiconevents.com/thailand/delegateregistration",
    backgroundImage: crsThaiBg,
    logo: crsthaiLogo,
  },
  {
    id: 9,
    date: "03 - 04 SEPTEMBER",
    name: "AIRPORT MODERNIzation SUMMIT",
    conc: "concluded",
    place: "NEW DELHI",
    websiteLink: "https://ams.traiconevents.com/",
    ticketsLink: "https://ams.traiconevents.com/",
    backgroundImage: amsBg,
    logo: amsLogo,
  },
  {
    id: 10,
    date: "TO BE ANNOUNCED",
    name: "OIL AND GAS TECHNOLOGY SUMMIT",
    conc: "",
    place: "SAUDI ARABIA",
    websiteLink: "https://ogts.traiconevents.com/",
    ticketsLink: "https://ogts.traiconevents.com/delegateregistration",
    backgroundImage: ogts,
    logo: OgtsSaudi,
  },

  {
    id: 13,
    date: "10 OCTOBER",
    name: "CYBER REVOLUTION SUMMIT",
    conc: "",
    place: "INDIA",
    websiteLink: "https://cyber.traiconevents.com/india/",
    ticketsLink: "https://cyber.traiconevents.com/india/delegateregistration",
    backgroundImage: crsIndBg,
    logo: crsIndLogo,
  },
  {
    id: 14,
    date: "17 OCTOBER",
    name: "AI REVOLUTION SUMMIT",
    conc: "",
    place: "PHILIPPINES",
    websiteLink: "https://air.traiconevents.com/philippines",
    ticketsLink: "https://air.traiconevents.com/philippines",
    backgroundImage: airphbg,
    logo: airphLogo,
  },
  {
    id: 15,
    date: "03 NOVEMBER",
    name: "FINTECH REVOLUTION SUMMIT",
    conc: "",
    place: "SAUDI ARABIA",
    websiteLink: "https://fintech.traiconevents.com/saudi/",
    ticketsLink: "https://fintech.traiconevents.com/saudi/delegateregistration",
    backgroundImage: frsksaBg,
    logo: frsksaLogo,
  },
  {
    id: 16,
    date: "06 NOVEMBER",
    name: "FINTECH REVOLUTION SUMMIT",
    conc: "",
    place: "ABUDHABI",
    websiteLink: "https://fintech.traiconevents.com/abudhabi/",
    ticketsLink: "https://fintech.traiconevents.com/abudhabi/",
    backgroundImage: frsuaeBg,
    logo: frsuaeLogo,
  },
  {
    id: 18,
    date: "20 NOVEMBER",
    name: "CYBER REVOLUTION SUMMIT",
    conc: "",
    place: "KUWAIT",
    websiteLink: "https://cyber.traiconevents.com/kuwait",
    ticketsLink: "https://cyber.traiconevents.com/kuwait",
    backgroundImage: crskwBg,
    logo: crskwLogo,
  },
  {
    id: 18,
    date: "20 - 21 NOVEMBER",
    name: "INDIAN DEFENCE ENCLAVE",
    conc: "",
    place: "INDIA",
    websiteLink: "https://idc.traiconevents.com",
    ticketsLink: "https://idc.traiconevents.com",
    backgroundImage: idcBg,
    logo: idcLogo,
  },
  {
    id: 17,
    date: "26 NOVEMBER",
    name: "WORLD HR SUMMIT",
    conc: "",
    place: "INDONESIA",
    websiteLink: "https://whrsummit.com/jakarta/",
    ticketsLink: "https://whrsummit.com/jakarta/",
    backgroundImage: whrindBg,
    logo: whrindLogo,
  },
  // {
  //   id: 11,
  //   date: "27 NOVEMBER",
  //   name: "DIGITAL REVOLUTION SUMMIT",
  //   conc: "",
  //   place: "BAHRAIN",
  //   websiteLink: "https://digital.traiconevents.com/",
  //   ticketsLink: "https://digital.traiconevents.com/",
  //   backgroundImage: drsbhBg,
  //   logo: drsbhLogo,
  // },
  {
    id: 12,
    date: "10 DECEMBER",
    name: "DATACENTRE INNOVATION SERIES",
    conc: "",
    place: "INDIA",
    websiteLink: "https://datacenterinnovationseries.com/india/",
    ticketsLink: "https://datacenterinnovationseries.com/india/",
    backgroundImage: dcisIndBg,
    logo: DcisIndLogo,
  },
  {
    id: 13,
    date: "29 MAY",
    name: "FINTECH REVOLUTION SUMMIT",
    conc: "",
    place: "VIETNAM",
    websiteLink: "https://fintechrevolutionseries.com/vietnam/",
    ticketsLink: "https://fintechrevolutionseries.com/vietnam/",
    backgroundImage: crsIndBg,
    logo: DcisIndLogo,
  },
  // {
  //   id: 12,
  //   date: "16 - 17 JULY",
  //   name: "AIRPORT MODERNIZATION SUMMIT",
  //   place: "NEW DELHI,INDIA",
  //   websiteLink: "https://ams.traiconevents.com/",
  //   ticketsLink: "#",
  //   backgroundImage: amsIndBg, 
  //   logo: amsIndLogo,
  // },
  // {
  //   id: 13,
  //   date: "28 AUGUST",
  //   name: "DATACENTRE AND CLOUD INNOVATION SERIES",
  //   place: "HYDERABAD, INDIA",
  //   websiteLink: "https://dcis.traiconevents.com/india/",
  //   ticketsLink: "#",
  //   backgroundImage: dcisindBg, 
  //   logo: dcisindLogo,
  // },
  // {
  //   id: 14,
  //   date: "10 - 11 DECEMBER",
  //   name: "INDIAN DEFENCE CONCLAVE",
  //   place: "NEW DELHI, INDIA",
  //   websiteLink: "https://idc.traiconevents.com/",
  //   ticketsLink: "#",
  //   backgroundImage: idcIndBg, 
  //   logo: idcIndLogo,
  // },





];

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("ALL GENRES");

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 300);
  };

  const handlePrevious = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? eventsData.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 300);
  };

  const handleEventBoxClick = (value) => {
    setCurrentIndex(value);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [eventsData.length]);

  const currentEvent = eventsData[currentIndex];

  const handleGenreChange = (e) => {
    setCurrentGenre(e.target.value)
    console.log(currentGenre)
  }

  return (
    <>
      <Helmet>
        <title>TRAICON | Upcoming Events</title>
        <meta name="description" content="Discover Upcoming Tech, Fintech, and Business Events by Traicon to Learn, Network, and Grow Across Industries." />
      </Helmet>
      <EventContainer>
        <ActiveEventsBox>
          <div className="overlay">

          </div>
          <div className={`active-event-bg ${transitioning ? "fade-out" : "fade-in"
            }`}>
            <img src={currentEvent.backgroundImage} alt="event background" />
          </div>
          <h5 className="toph">Upcoming events</h5>
          <h2 className="top-event-date">{currentEvent.date}</h2>
          <div className="top-event-box">
            <div className="event-details">
              <div className="event-name">{currentEvent.name}</div>
              <div className="event-place">{currentEvent.place}</div>
              <div className="conclude">{currentEvent.conc}</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href={currentEvent.websiteLink} className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href={currentEvent.ticketsLink} className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="cuts">
                  {Array(24)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className="cuts-dot"></div>
                    ))}
                </div>
                <div className="ticket-cut">

                </div>
                <img src={currentEvent.logo} alt="event logo" />
              </div>
            </div>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} className="previous-button nav-btn">
                &lt;
              </button>
              <button onClick={handleNext} className="next-button nav-btn">
                &gt;
              </button>
            </div>
          </div>

        </ActiveEventsBox>
        <EventHbox>
          <EventGlow>

          </EventGlow>
          <EventH>
            <AnimatedText lines={['FEATURED UPCOMING EVENTS']} />
          </EventH>
          <EventP>
            Featured upcoming events are highlighted activities or occasions promoted for their popularity or importance. They attract attention to generate excitement and anticipation.
          </EventP>
          <GenreForm>
            <form action="">
              <select name="" id="" onChange={handleGenreChange}>
                <option value="ALL GENRES">ALL GENRES</option>
                <option value="INDIA">INDIA</option>
                <option value="INTERNATIONAL">INTERNATIONAL</option>
              </select>
            </form>
          </GenreForm>
        </EventHbox>
        <EventsBoxes>
          <EventBox onClick={() => handleEventBoxClick(0)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  FEBRUARY
                </div>
                <div className="date">
                  <p>25<sup>th</sup> - 26<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">HOTEL CROWNE PLAZA MANAMA, BAHRAIN</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/bh/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/bh/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsbhLogo} alt="fintech bahrain logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(1)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  MARCH
                </div>
                <div className="date">
                  <p>12<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">DATACENTRE AND CLOUD INNOVATION SERIES</div>
              <div className="event-place">MANILA, PHILIPPINES</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://dcis.traiconevents.com/philippines/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://dcis.traiconevents.com/philippines/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={dcisphLogo} alt="dcis philippines logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(2)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  APRIL
                </div>
                <div className="date">
                  <p>30<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">PHILIPPINES</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/ph/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/ph/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsphLogo} alt="fintech revolution summiy philippines logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(3)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  MAY
                </div>
                <div className="date">
                  <p>23<sup>rd</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">WORLD HR SUMMIT</div>
              <div className="event-place">MANILA, PHILIPPINES</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://hr.traiconevents.com/ph/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hr.traiconevents.com/ph/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={whrphLogo} alt="world hr summit logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(4)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  JUNE
                </div>
                <div className="date">
                  <p>12<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">RAIL MODERNIZATION SUMMIT</div>
              <div className="event-place">NEW DELHI, INDIA</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://rail.traiconevents.com" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://rail.traiconevents.com" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={rmsIndLogo} alt="rail modernization summit 2025 logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(5)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  JUNE
                </div>
                <div className="date">
                  <p>27<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">CYBER REVOLUTION SUMMIT</div>
              <div className="event-place">MANILA, PHILIPPINES</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/philippines/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/philippines/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={crsphLogo} alt="cyber philippines logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(6)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  JULY
                </div>
                <div className="date">
                  <p>23<sup>rd</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">MALAYSIA</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/malaysia/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/malaysia/" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsmlLogo} alt="fintech revolution summit logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(7)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  AUGUST
                </div>
                <div className="date">
                  <p>27<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">ThaiCyberX</div>
              <div className="event-place">Thailand</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/thailand/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/thailand/" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={crsthaiLogo} alt="ThaiCyberX logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(8)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INDIAN" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  SEPTEMBER
                </div>
                <div className="date">
                  <p>03<sup>rd</sup> -  04<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">AIRPORT MODERNIZATION SUMMIT</div>
              <div className="event-place">NEW DELHI</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://ams.traiconevents.com" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://ams.traiconevents.com" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={amsLogo} alt="AMS logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(9)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  SEPTEMBER
                </div>
                <div className="date">
                  <p>TBA</p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">OIL AND GAS TECHNOLOGY SUMMIT</div>
              <div className="event-place">SAUDI ARABIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://ogts.traiconevents.com/saudi/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://ogts.traiconevents.com/saudi/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={OgtsSaudi} alt="oil and gas tech summit saudi logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(10)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  OCTOBER
                </div>
                <div className="date">
                  <p>10<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">CYBER REVOLUTION SUMMIT</div>
              <div className="event-place">NEW DELHI, INDIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/india/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="#" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={crsIndLogo} alt="cyber revolution summit india logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(11)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  OCTOBER
                </div>
                <div className="date">
                  <p>17<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">AI REVOLUTION SUMMIT</div>
              <div className="event-place">PHILIPPINES</div>
              <div className="conclude">CONCLUDED</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://air.traiconevents.com/philippines" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://air.traiconevents.com/philippines" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={airphLogo} alt="ai revolution summit philippines logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(12)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  NOVEMBER
                </div>
                <div className="date">
                  <p>03<sup>rd</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">RIYADH, SAUDI ARABIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/saudi/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/saudi/delegateregistration" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsksaLogo} alt="fintech revolution summit saudi logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(13)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  NOVEMBER
                </div>
                <div className="date">
                  <p>06<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">ABUDHABI</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/abudhabi/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/abudhabi" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsuaeLogo} alt="fintech revolution summit uae logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(14)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  NOVEMBER
                </div>
                <div className="date">
                  <p>20<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">CYBER REVOLUTION SUMMIT</div>
              <div className="event-place">KUWAIT</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/kuwait" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://cyber.traiconevents.com/kuwait" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={crskwLogo} alt="cyber revolution kuwait 2025 logo" />
              </div>
            </div>
          </EventBox>
           <EventBox onClick={() => handleEventBoxClick(15)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  NOVEMBER
                </div>
                <div className="date">
                  <p>20<sup>th</sup> - 21<sup>st</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">INDIAN DEFENCE CONCLAVE</div>
              <div className="event-place">INDIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://idc.traiconevents.com" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://idc.traiconevents.com" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={idcLogo} alt="IDC india 2025 logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(16)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  NOVEMBER
                </div>
                <div className="date">
                  <p>26<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">WORLD HR SUMMIT</div>
              <div className="event-place">INDONESIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://whrsummit.com/jakarta/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://whrsummit.com/jakarta/" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={whrindLogo} alt="WHR  summit indonesia logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(17)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  DECEMBER
                </div>
                <div className="date">
                  <p>10<sup>th</sup></p>
                </div>
                <div className="year">
                  2025
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">DATACENTRE INNOVATION SERIES</div>
              <div className="event-place">INDIA</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://datacenterinnovationseries.com/india/" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://datacenterinnovationseries.com/india/" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={DcisIndLogo} alt="data center and cloud india logo" />
              </div>
            </div>
          </EventBox>
          <EventBox onClick={() => handleEventBoxClick(18)}
            style={{ display: currentGenre === "ALL GENRES" || currentGenre === "INTERNATIONAL" ? "flex" : "none" }}>
            <div className="event-date-box">
              <div className="date-container">
                <div className="month">
                  MAY
                </div>
                <div className="date">
                  <p>29<sup>th</sup></p>
                </div>
                <div className="year">
                  2026
                </div>
              </div>
            </div>
            <div className="event-details">
              <div className="event-name">FINTECH REVOLUTION SUMMIT</div>
              <div className="event-place">VIETNAM</div>
              <div className="event-buttons">
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/vietnam" className="visit">Visit website</a>
                <a target="_blank" rel="noopener noreferrer" href="https://fintech.traiconevents.com/vietnam" className="get">get tickets</a>
              </div>
            </div>
            <div className="event-logo-part">
              <div className="event-logo-box">
                <div className="event-logo-glow">

                </div>
                <div className="cuts">
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                  <div className="cuts-dot"></div>
                </div>
                <div className="ticket-cut">

                </div>
                <img src={frsvnLogo} alt="fintech vietnam logo" />
              </div>
            </div>
          </EventBox>
          {/* <EventBox   onClick={() => handleEventBoxClick(11)}
       style={{display:currentGenre==="ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none"}}>
       <div className="event-date-box">
     <div className="date-container">
    <div className="month">
JULY
    </div>
    <div className="date">
     <p>16<sup>th</sup> - 17<sup>th</sup></p> 
    </div>
    <div className="year">
      2025
    </div>
     </div>
       </div>
       <div className="event-details">
  <div className="event-name">AIRPORT MODERNIZATION SUMMIT</div>
  <div className="event-place">NEW DELHI, INDIA</div>
  <div className="event-buttons">
    <a target="_blank" rel="noopener noreferrer" href="https://ams.traiconevents.com/" className="visit">Visit website</a>
    <a target="_blank" rel="noopener noreferrer" href="#" className="get">get tickets</a>
  </div>
       </div>
       <div className="event-logo-part">
         <div className="event-logo-box">
          <div className="event-logo-glow">

          </div>
     <div className="cuts">
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
     </div>
     <div className="ticket-cut">

     </div>
     <img src={amsIndLogo} alt="" />
         </div>
       </div>
      </EventBox>
      <EventBox   onClick={() => handleEventBoxClick(12)}
       style={{display:currentGenre==="ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none"}}>
       <div className="event-date-box">
     <div className="date-container">
    <div className="month">
AUGUST
    </div>
    <div className="date">
     <p>28<sup>th</sup></p> 
    </div>
    <div className="year">
      2025
    </div>
     </div>
       </div>
       <div className="event-details">
  <div className="event-name">DATACENTRE AND CLOUD INNOVATION SERIES</div>
  <div className="event-place">HYDERABAD, INDIA</div>
  <div className="event-buttons">
    <a target="_blank" rel="noopener noreferrer" href="https://dcis.traiconevents.com/india/" className="visit">Visit website</a>
    <a target="_blank" rel="noopener noreferrer" href="#" className="get">get tickets</a>
  </div>
       </div>
       <div className="event-logo-part">
         <div className="event-logo-box">
          <div className="event-logo-glow">

          </div>
     <div className="cuts">
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
     </div>
     <div className="ticket-cut">

     </div>
     <img src={dcisindLogo} alt="" />
         </div>
       </div>
      </EventBox>
      <EventBox   onClick={() => handleEventBoxClick(13)}
       style={{display:currentGenre==="ALL GENRES" || currentGenre === "INDIA" ? "flex" : "none"}}>
       <div className="event-date-box">
     <div className="date-container">
    <div className="month">
NOVEMBER
    </div>
    <div className="date">
     <p>17<sup>th</sup> - 18<sup>th</sup></p> 
    </div>
    <div className="year">
      2025
    </div>
     </div>
       </div>
       <div className="event-details">
  <div className="event-name">INDIAN DEFENCE CONCLAVE</div>
  <div className="event-place">NEW DELHI, INDIA</div>
  <div className="event-buttons">
    <a target="_blank" rel="noopener noreferrer" href="https://idc.traiconevents.com/" className="visit">Visit website</a>
    <a target="_blank" rel="noopener noreferrer" href="#" className="get">get tickets</a>
  </div>
       </div>
       <div className="event-logo-part">
         <div className="event-logo-box">
          <div className="event-logo-glow">

          </div>
     <div className="cuts">
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
      <div className="cuts-dot"></div>
     </div>
     <div className="ticket-cut">

     </div>
     <img src={idcIndLogo} alt="" />
         </div>
       </div>
      </EventBox> */}


        </EventsBoxes>
      </EventContainer>

    </>
  )
}
