import React, { useState, useEffect } from 'react';
import logo from '../images/traicon.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";



// Capitalize the first letter of nav
const Nav = styled.nav`
  height:5vw;
  display:flex;
  align-items : center;
  justify-content: space-between;
  position:fixed;
  width:100%;
  padding-top:1vw;
  transition:all 0.5s ease;
  top:0;
  z-index:100;

  &.navscroll{
    background : black;
    padding-top:0vw;

  }

  @media screen and (max-width:767px) {
    height: 100vh;
    background-color: black;
    justify-content: center;
    padding: 0;
    transform: ${({ active }) => (active ? 'translateX(0vw)' : 'translateX(-100vw)')};;
  }
  @media screen and (min-width:768px) and (max-width:1023px) {
    height: 100vh;
    background-color: black;
    justify-content: center;
    padding: 0;
    transform: ${({ active }) => (active ? 'translateX(0vw)' : 'translateX(-100vw)')};;
  }
`;

const NavImage = styled.img`
  width: 5.5vw;
  margin-left:1vw;

  @media screen and (max-width:768px) {
    display: none;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    display: none;
  }
`;

const Moblogo = styled.img`
  display: none;

  @media screen and (max-width:768px) {
    display: block;
    width: 20vw;
    position: fixed;
    z-index: 100000000;
    top: 6vw;
    left: 4vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
     display: block;
    width: 15vw;
    position: fixed;
    z-index: 100000000;
    top: 6vw;
    left: 4vw;
  }
`;

const MobNav = styled.div`
width: 15vw;
height: 15vw;
z-index: 100000000;
position: fixed;
top: 4vw;
right: 4vw;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: 2vw;

.nav-line{
  width: 70%;
  height: 3px;
  transition: all 0.3s ease;
  background-color: ${({ active }) => (active ? 'red' : 'white')};
  transform: ${({ active }) => (active ? 'rotate(-45deg) translate(-2vw,2vw)' : '')};;
}
.nav-line:nth-child(2){
  width: 50%;
  display: ${({ active }) => (active ? 'none' : 'block')};
}
.nav-line:nth-child(3){
 width: ${({ active }) => (active ? '70%' : '30%')};
  transform: ${({ active }) => (active ? 'rotate(45deg)' : '')};;
}
@media screen and (min-width:768px) and (max-width:1023px){
  width: 12vw;
height: 12vw;
z-index: 100000000;
position: fixed;
top: 2vw;
right: 4vw;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: 2vw;

.nav-line{
  width: 70%;
  height: 3px;
  transition: all 0.3s ease;
  background-color: ${({ active }) => (active ? 'red' : 'white')};
  transform: ${({ active }) => (active ? 'rotate(-45deg) translate(-2vw,2vw)' : '')};;
}
.nav-line:nth-child(2){
  width: 50%;
  display: ${({ active }) => (active ? 'none' : 'block')};
}
.nav-line:nth-child(3){
 width: ${({ active }) => (active ? '70%' : '30%')};
  transform: ${({ active }) => (active ? 'rotate(45deg)' : '')};;
}
}

@media screen and (min-width: 1040px) {
  display: none;
}
`

const NavUl = styled.ul`
  display : flex;
  width : 50%;
  align-items : center;
  justify-content:space-around;
  list-style:none;
  height:auto;

  @media screen and (max-width:768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: fit-content;
    gap: 3vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
        flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: fit-content;
    gap: 2vw;
  }
`;

const Li = styled.li`
  color : white;
  font-size : 0.8vw;
  font-family : "montserrat";
  &:hover{
    cursor:pointer;
    color: #2f9cda;
  }

  a {
    color: white;
    text-decoration: none;
  }
  &:hover a{
    cursor:pointer;
    color:rgb(95, 193, 249);
  }


  @media screen and (max-width:768px){
    font-size: 3.6vw;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    font-size: 2.5vw;
  }
`;

// const Drodiv = styled.div`
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   height:4vw;
//   position:relative;
//   &:hover .de-box{
//     display:flex;
//   }
// `;

// const Dediv = styled.div`
//   color: white;
//   &.de-box{
//     display:none;
//     flex-direction:column;
//     justify-content:center;
//     position:absolute;
//     margin-top:11.5vw;
//     background:#3c3c3c;
//     font-size:0.8vw;
//     margin-left:9vw;
//     width:fit-content;
//     height:fit-content;
//     padding:0.5vw;
//   }
// `;

// const Dede = styled.div`
//   width:12vw;
//   padding:0.2vw;
//   &:hover{
//     background:grey;
//   }
// `;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const handleNavClick = () => {
    setActive((prevActive) => !prevActive); // Toggle active state
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div>
      <Moblogo src={logo} alt="logo" />
      <MobNav active={active} onClick={handleNavClick} className={`${active ? 'navactive' : ''}`}>
        <div className="nav-line"></div>
        <div className="nav-line"></div>
        <div className="nav-line"></div>
      </MobNav>
      <Nav active={active} className={`navbar ${isScrolled ? 'navscroll' : ''}`}>
     <a href="/"> <NavImage src={logo} alt="Logo" /></a> 
        <NavUl>
          <Li> <Link to="/" onClick={handleNavClick}>HOME</Link></Li>
          <Li><Link to="/about" onClick={handleNavClick} >ABOUT</Link></Li>
          {/* <Drodiv className="dropdown">
            <Li>OUR PLATFORMS </Li>
            <Dediv className="de-box">
              <Dede className="de">B2B SUMMITS & FORUMS</Dede>
              <Dede className="de">EXHIBITIONS</Dede>
              <Dede className="de">TRAINING AND WORKSHOPS</Dede>
            </Dediv>
          </Drodiv> */}
             <Li><Link to="/events" onClick={handleNavClick}>EVENTS</Link></Li>
          {/* <Drodiv className="dropdown">
            <Li>EVENTS</Li>
            <Dediv className="de-box">
              <Dede className="de">CYBER REVOLUTION SUMMIT</Dede>
              <Dede className="de">FINTECH REVOLUTION SUMMIT</Dede>
              <Dede className="de">OGTS</Dede>
              <Dede className="de">DCIS</Dede>
              <Dede className="de">AMS</Dede>
              <Dede className="de">RMS</Dede>
            </Dediv>
          </Drodiv> */}
          {/* <Li>TRAINING</Li> */}
          {/* <Li><Link to="/people">PEOPLE</Link></Li> */}
          <Li><Link to="/csr" onClick={handleNavClick}>CSR</Link></Li>
          <Li><Link to="/careers" onClick={handleNavClick}>CAREERS</Link></Li>
          <Li><Link to="/contactus" onClick={handleNavClick}>CONTACT US</Link></Li>
        </NavUl>
      </Nav>
    </div>
  );
}
