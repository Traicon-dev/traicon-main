import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AnimatedText from './AnimatedText'
import gov1 from '../images/clients/gp/g1.png'
import gov2 from '../images/clients/gp/g2.png'
import gov3 from '../images/clients/gp/g3.png'
import gov4 from '../images/clients/gp/g4.png'
import gov5 from '../images/clients/gp/g5.png'
import gov6 from '../images/clients/gp/g6.png'
import gov7 from '../images/clients/gp/g7.png'
import gov8 from '../images/clients/gp/g8.png'
import gov9 from '../images/clients/gp/g9.png'
import gov10 from '../images/clients/gp/g11.png'
import gov11 from '../images/clients/gp/g12.png'
import gov12 from '../images/clients/gp/g13.png'
import gov13 from '../images/clients/gp/g14.png'
import gov14 from '../images/clients/gp/g15.png'
import gov15 from '../images/clients/gp/g19.png'
import as1 from "../images/clients/gp/a5.png"
import as2 from "../images/clients/gp/a6.png"
import as3 from "../images/clients/gp/a7.png"
import as4 from "../images/clients/gp/a8.png"
import as5 from "../images/clients/gp/a1.png"
import as6 from "../images/clients/gp/a2.png"
import as7 from "../images/clients/gp/a3.png"
import as8 from "../images/clients/gp/a4.png"
import as9 from "../images/clients/gp/a9.png"
import as10 from "../images/clients/gp/a10.png"
import as11 from "../images/clients/gp/a11.png"
import as12 from "../images/clients/gp/a12.png"
import as13 from "../images/clients/gp/a13.png"
import spon1 from "../images/clients/new/1.jpg"
import spon2 from "../images/clients/new/2.jpg"
import spon3 from "../images/clients/new/3.jpg"
import spon4 from "../images/clients/new/4.jpg"
import spon5 from "../images/clients/new/5.jpg"
import spon6 from "../images/clients/new/6.jpg"
import spon7 from "../images/clients/new/7.jpg"
import spon8 from "../images/clients/new/8.jpg"
import spon9 from "../images/clients/new/9.jpg"
import spon10 from "../images/clients/new/10.jpg"
import spon11 from "../images/clients/new/11.jpg"
import spon12 from "../images/clients/new/12.jpg"
import spon13 from "../images/clients/new/13.jpg"
import spon14 from "../images/clients/ap/c1.png"
import spon15 from "../images/clients/ap/c2.png"
import spon16 from "../images/clients/ap/c3.png"
import spon17 from "../images/clients/ap/c4.png"
import spon18 from "../images/clients/ap/c5.png"
import spon19 from "../images/clients/ap/c6.png"
import spon20 from "../images/clients/ap/c7.png"
import spon21 from "../images/clients/ap/c8.png"
import spon22 from "../images/clients/ap/c9.png"
import spon23 from "../images/clients/ap/c10.png"
import spon24 from "../images/clients/21.png"
import spon25 from "../images/clients/8.png"
import spon26 from "../images/clients/14.png"
import spon27 from "../images/clients/5.png"
import spon28 from "../images/clients/10.png"
import spon29 from "../images/clients/22.png"
import spon30 from "../images/clients/13.png"
import sponl1 from "../images/clients/new/14.jpg"
import sponl2 from "../images/clients/new/15.jpg"
import sponl3 from "../images/clients/new/16.jpg"
import sponl4 from "../images/clients/new/17.jpg"
import sponl5 from "../images/clients/new/18.jpg"
import sponl6 from "../images/clients/new/19.jpg"
import sponl7 from "../images/clients/new/20.jpg"
import sponl8 from "../images/clients/new/21.jpg"
import sponl9 from "../images/clients/new/22.jpg"
import sponl10 from "../images/clients/new/23.jpg"
import sponl11 from "../images/clients/new/24.jpg"
import sponl12 from "../images/clients/new/25.jpg"
import sponl13 from "../images/clients/new/26.jpg"
import sponl14 from "../images/clients/ap/c11.png"
import sponl15 from "../images/clients/ap/c12.png"
import sponl16 from "../images/clients/ap/c13.png"
import sponl17 from "../images/clients/ap/c14.png"
import sponl18 from "../images/clients/ap/c15.png"
import sponl19 from "../images/clients/ap/c16.png"
import sponl20 from "../images/clients/ap/c17.png"
import sponl21 from "../images/clients/ap/c18.png"
import sponl22 from "../images/clients/ap/c19.png"
import sponl23 from "../images/clients/ap/c20.png"
import sponl24 from "../images/clients/1.png"
import sponl25 from "../images/clients/11.png"
import sponl26 from "../images/clients/17.png"
import sponl27 from "../images/clients/18.png"
import sponl28 from "../images/clients/19.png"
import sponl29 from "../images/clients/20.png"
import sponl30 from "../images/clients/23.png"
import sponl01 from "../images/clients/new/27.jpg"
import sponl02 from "../images/clients/new/28.jpg"
import sponl03 from "../images/clients/new/29.jpg"
import sponl04 from "../images/clients/new/30.jpg"
import sponl05 from "../images/clients/new/31.jpg"
import sponl06 from "../images/clients/new/32.jpg"
import sponl07 from "../images/clients/new/33.jpg"
import sponl08 from "../images/clients/new/34.jpg"
import sponl09 from "../images/clients/new/35.jpg"
import sponl010 from "../images/clients/new/36.jpg"
import sponl011 from "../images/clients/new/37.jpg"
import sponl012 from "../images/clients/new/38.jpg"
import sponl013 from "../images/clients/new/39.jpg"
import sponl014 from "../images/clients/ap/c21.png"
import sponl015 from "../images/clients/ap/c22.png"
import sponl016 from "../images/clients/ap/c23.png"
import sponl017 from "../images/clients/ap/c24.png"
import sponl018 from "../images/clients/ap/c25.png"
import sponl019 from "../images/clients/ap/c26.png"
import sponl020 from "../images/clients/ap/c27.png"
import sponl021 from "../images/clients/ap/c28.png"
import sponl022 from "../images/clients/ap/c29.png"
import sponl023 from "../images/clients/ap/c30.png"
import sponl024 from "../images/clients/24.png"
import sponl025 from "../images/clients/25.png"
import sponl026 from "../images/clients/26.png"
import sponl027 from "../images/clients/27.png"
import sponl028 from "../images/clients/29.png"
import sponl029 from "../images/clients/30.png"


const MainContainer = styled.div`
width: 100%;
height: auto;
min-height: 100vh;
padding-bottom: 8vw;
`;

const Clients = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2{
   font-family:"sdel";
   color: white;
   font-size: 3vw;
   margin-top: 4vw;
   text-transform: uppercase;
}

@media screen and (max-width:768px) {
    h2{
        font-size: 5.8vw;
        text-align: center;
        width: 77%;
    }
}
@media screen and (min-width:768px) and (max-width:1023px){
        h2{
        font-size: 3.5vw;
        text-align: center;
        width: 80%;
    }
}
`;

const ClientsBoxes = styled.div`
width: 80%;
height: auto;
min-height: 30vh;
margin-top: 2vw;
display: flex;
align-items: center;
justify-content: center;
gap: 1vw;
flex-wrap: wrap;

@media screen and (max-width:768px) {
    gap: 2vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
    gap: 1vw;
    height: auto;
    min-height: 10vh;
}
`;

const ClientBox = styled.div`
width: 14vw;
height: 8vw;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 70%;
}

@media screen and (max-width:768px) {
    width: 35vw;
    height: 20vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
      width: 25vw;
    height: 16vw;
}
`;

const SwiperBox = styled.div`
width: 75%;
height: auto;
margin-top:1vw;

@media screen and (max-width:768px) {
    margin-top: 2vw;
}

`;

const SwiperLogoBox = styled.div`
  width:100%;
  height: 8vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 70%;
  }
  @media screen and (max-width:768px) {
    height: 20vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
    height: 16vw;
}
`;
  


export default function HomeClients({id}) {
  return (
    <div>
      <MainContainer id={id}>
      <Clients>
        <h2><AnimatedText lines={['Government Authorities Worked With']} /></h2>
        <ClientsBoxes>
        <ClientBox>
   <img src={gov1} alt="client" />
        </ClientBox>
        <ClientBox>
        <img src={gov2} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov3} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov4} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov5} alt="client" style={{width:'60%'}} />
</ClientBox>
<ClientBox>
<img src={gov6} alt="client" style={{width:'60%'}}/>
</ClientBox>
<ClientBox>
<img src={gov7} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov8} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov9} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov10} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov11} alt="client" style={{width:'60%'}}/>
</ClientBox>
<ClientBox>
<img src={gov12} alt="client" style={{width:'60%'}}/>
</ClientBox>
<ClientBox>
<img src={gov13} alt="client" />
</ClientBox>
<ClientBox>
<img src={gov14} alt="client" style={{width:'60%'}}/>
</ClientBox>
<ClientBox>
<img src={gov15} alt="client" />
</ClientBox>
        </ClientsBoxes>
      </Clients>
      <Clients>
        <h2><AnimatedText lines={['Association Partners Worked With']} /></h2>
        <ClientsBoxes>
        <ClientBox>
   <img src={as1} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as2} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as3} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as4} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as5} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as6} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as7} alt="client" style={{width:'60%'}} />
        </ClientBox>
        <ClientBox>
   <img src={as8} alt="client" style={{width:'60%'}}/>
        </ClientBox>
        <ClientBox>
   <img src={as9} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as10} alt="client" style={{width:'60%'}}/>
        </ClientBox>
        <ClientBox>
   <img src={as11} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as12} alt="client" />
        </ClientBox>
        <ClientBox>
   <img src={as13} alt="client" style={{width:'60%'}} />
        </ClientBox>
       
        </ClientsBoxes>
      </Clients>
    <Clients>
    <h2><AnimatedText lines={['Our Clients']} /></h2>
        <SwiperBox>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      speed={1000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon1} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon2} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon3} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon4} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon5} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon6} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon7} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon8} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon9} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon10} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon11} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon12} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon13} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon14} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon15} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon16} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon17} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon18} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon19} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon20} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon21} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon22} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon23} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon24} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon25} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon26} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon27} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon28} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon29} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={spon30} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    </Swiper>
        </SwiperBox>
        <SwiperBox>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      dir="rtl"
      speed={1000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1023: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl1} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl2} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl3} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl4} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl5} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl6} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl7} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl8} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl9} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl10} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl11} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl12} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl13} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl14} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl15} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl16} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl17} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl18} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl19} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl20} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl21} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl22} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl23} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl24} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl25} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl26} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl27} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl28} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl29} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl30} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    </Swiper>
        </SwiperBox>
        <SwiperBox>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      speed={1000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl01} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl02} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl03} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl04} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl05} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl06} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl07} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl08} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl09} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl010} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl011} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl012} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl013} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl014} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl015} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl016} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl017} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl018} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl019} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl020} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl021} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl022} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl023} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl024} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl025} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl026} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl027} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl028} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    <SwiperSlide>
        <SwiperLogoBox>
       <img src={sponl029} alt="clientlogo" />
        </SwiperLogoBox>
    </SwiperSlide>
    </Swiper>
        </SwiperBox>
    </Clients>
      </MainContainer>
    </div>
  )
}
