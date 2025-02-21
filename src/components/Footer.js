import React from 'react'
import styled from 'styled-components'
import tlogo from '../images/Traicon Logo-01.svg'
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
width: 100%;
height: 50vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: black;

@media screen and (max-width: 767px) {
  height: auto;
}
@media screen and (min-width:768px) and (max-width:1023px){
height: auto;
  }
`;

const FooterContent = styled.div`
width: 85%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 767px) {
  flex-direction: column;
  align-items: flex-start;
}
@media screen and (min-width:768px) and (max-width:1023px){
  flex-direction: column;
  align-items: flex-start;
  }
`;

const LogoSocial = styled.div`
width: 20%;
height: 100%;
display: flex;
gap: 1.5vw;
flex-direction: column;
justify-content: center;

.traicon-logo{
  width: 40%;
}

.address{
  color: white;
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  font-weight: 300;
}
.social-boxes{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 1vw;
}

.social-boxes a{
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.1vw;
  position: relative;
  text-decoration: none;
  color: white;
}
.social-boxes a:hover::before{
transform: translate(-1vw,-0.5vw);
}
.social-boxes a:hover{
  color: #2f9cda;
}
.social-boxes a::after{
  content: "";
  width: 2.5vw;
  height: 2.5vw;
  position: absolute;
  background: linear-gradient(45deg, #0068a3, #2f9cda);
  border-radius: 0.3vw;
  backdrop-filter: blur(10px);
  z-index: -1;
  transition: all 0.3s ease;
}
.social-boxes a::before{
  content: "";
  width: 1.5vw;
  height: 1.5vw;
  position: absolute;
  background: #2f9cda;
  border-radius: 0.2vw;
  z-index: -2;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  transition: all 0.3s ease;
}
@media screen and (max-width: 767px) {
  width: 60%;


.traicon-logo{
  width: 50%;
}
.address{
  font-size: 3.5vw;
  margin-top: 3vw;
}
.social-boxes a {
    width: 6.5vw;
    height: 6.5vw;
    font-size: 3vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 50%;


.traicon-logo{
  width: 40%;
}
.address{
  font-size: 2.5vw;
  margin-top: 1vw;
}
.social-boxes a {
    width: 4.5vw;
    height: 4.5vw;
    font-size: 2.5vw;
}
}
`;

const Navigations = styled.div`
width: 60%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

.navigation-box{
  width: 33.33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nav-h{
  font-family: "sdeb";
  letter-spacing: 0.05vw;
  color:white;
  font-size: 1.3vw;
  width: 70%;
  font-weight: 600;
  padding-bottom: 0.8vw;
  margin-top: 5vw;
  
}
.nav-links{
  width: 70%;
  text-decoration: none;
  color: white;
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  padding:0.3vw 0;
  font-weight: 300;

}
@media screen and (max-width: 767px){
  width: 100%;

  .navigation-box{
    align-items: flex-start;
  }
  .nav-h{
    font-size: 3vw;
  }
  .nav-links{
    font-size: 3vw;
    padding-bottom: 1vw;
  }
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 100%;

.navigation-box{
  align-items: flex-start;
}
.nav-h{
  font-size: 2.5vw;
}
.nav-links{
  font-size: 2.5vw;
  padding-bottom: 1vw;
}
}
`;

const Details = styled.div`
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 2vw;

.det-h{
  color: white;
  font-family: "sdeb";
  letter-spacing: 0.05vw;
  font-size: 2vw;
}
.det-h span{
  color: #2f9cda;
  font-size: 3vw;
  line-height: 2.5vw;
}
.det-line{
  padding: 0.5vw 0vw;
  display: flex;
  align-items: center;
  gap: 0.5vw;
}
.det-line a{
  text-decoration: none;
  color: white;
  font-size: 1.2vw;
  font-family: Source Sans 3;
   font-weight: 300;
}
.det-line i{
  color: white;
  font-size: 1.2vw;
}
@media screen and (max-width: 767px){

  width: 60%;

  .det-h{
  color: white;
  font-family: "sdeb";
  letter-spacing: 0.05vw;
  font-size: 4vw;
}
.det-h span{
  color: #2f9cda;
  font-size: 7vw;
  line-height: 6.5vw;
}
.det-line{
  padding: 1vw 0vw;
  gap: 1.5vw;
}
.det-line:nth-child(2){
  margin-top: 3vw;
}
.det-line a{
  text-decoration: none;
  color: white;
  font-size: 3.2vw;
  font-family: Source Sans 3;
   font-weight: 300;
}
.det-line i{
  color: white;
  font-size: 3.2vw;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 60%;

  .det-h{
  color: white;
  font-family: "sdeb";
  letter-spacing: 0.05vw;
  font-size: 3vw;
  
}
.det-h span{
  color: #2f9cda;
  font-size: 5vw;
  line-height: 4.5vw;
}
.det-line{
  padding: 1vw 0vw;
  gap: 1.5vw;
}
.det-line:nth-child(2){
  margin-top: 3vw;
}
.det-line a{
  text-decoration: none;
  color: white;
  font-size: 2.5vw;
  font-family: Source Sans 3;
   font-weight: 300;
}
.det-line i{
  color: white;
  font-size: 2.5vw;
}
}
`;

const FooterLine = styled.p`
color: white;
font-family: "Source Sans 3";
font-size: 1vw;
font-weight: 300;
border-top: 1px solid #ffffff4f;
padding-top: 1vw;
width: 100%;
text-align: center;

a{
  text-decoration: none;
  color: #2f9cda;
  font-weight: 400;
  text-transform: uppercase;
}

@media screen and (max-width: 768px){

font-size: 3vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
  font-size: 2vw;
}
`;

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
            <LogoSocial>
 <a href="/"><img src={tlogo} alt="Traicon Logo" className="traicon-logo" /></a> 
<div className="address">
32, Chinmaya Mission Hospital Rd, 2nd Stage, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
</div>
  <div className="social-boxes">
  <a href="https://www.linkedin.com/company/traiconevents" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
  <a href="https://www.instagram.com/traiconglobal/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://x.com/TraiCon_Events?t=1B_r-wGKa56J13rQGddiIg&s=08" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
  <a href="https://www.facebook.com/traiconevents" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
  </div>

        </LogoSocial>
        <Navigations>
<div className="navigation-box">
<div className="nav-h">COMPANY</div>
<a href="/" className="nav-links">Home</a>
<a href="/about" className="nav-links">About Traicon</a>
{/* <a href="/trtest#homeClients" className="nav-links">Clients & Partners</a> */}
<a href="/events" className="nav-links">Events</a>
{/* <div className="nav-links">Verticals</div> */}
</div>
<div className="navigation-box">
<div className="nav-h">POLICIES</div>
<Link to='/payment' className="nav-links">Payments & Policies</Link>
<Link to='/privacy' className="nav-links">Privacy Policies</Link>
<Link to='terms' className="nav-links">Terms Of Use</Link>
</div>
<div className="navigation-box">
<div className="nav-h">Help</div>
<a href="/contactus" className="nav-links">Contact</a>
{/* <a href="#" className="nav-links">Payments & Policies</a> */}
<a href="/csr" className="nav-links">CSR</a>
<a href="/careers" className="nav-links">Career</a>
{/* <a href="#" className="nav-links">Gallery</a> */}
</div>
        </Navigations>
        <Details>
<div className="det-h">GET IN <br />
<span>TOUCH</span> </div>
<div className="det-line"><i class="fa-solid fa-envelope"></i><a href="mailto:">info@traiconevents.com</a></div>
<div className="det-line"><i class="fa-solid fa-phone"></i><a href="tel:+918971269298">+91 8971269298</a></div>
        </Details>
        </FooterContent>
        <FooterLine>
        Copyright © TraiCon Events 2025. All rights reserved by @ <a href="/">Traicon Events</a>
        </FooterLine>
      </FooterContainer>
    </div>
  )
}
