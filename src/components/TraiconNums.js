import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';
import event from '../images/event.png'
import years from '../images/experience.png'
import partner from '../images/partner.png'
import delegate from '../images/delegate.png'

import './style.css'

const TraiNums = styled.div`
  width:100%;
  height:5vw;
  background:#2f9cda;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:1vw;


  @media screen and (max-width:768px) {
    height: auto;
    padding: 3vw 0vw;
    flex-wrap: wrap;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
        height: auto;
    padding: 3vw 0vw;
    flex-wrap: wrap;
  }
`;

const TnBoxes = styled.div`
  width:20vw;
  height :3vw;
  display:flex;
  gap: 0.5vw;
  align-items:center;
  justify-content:center;
  position: relative;

  
  &:nth-child(4)::after {
    display:none;
  }
  
  &::after {
    content:"";
    width:0.2vw;
    height:2.5vw;
    border-radius:1vw;
    background-color:white;
    position:absolute;
    right:-0.7vw;
    opacity:0.7;
  }

  @media screen and (max-width:768px){
    width: 48vw;
    height: auto;
    padding: 2vw 0vw;
    gap: 2vw;
    align-items: center;


    &:nth-child(2)::after {
    display:none;
  }
  }
  @media screen and (min-width:768px) and (max-width:1023px){
       width: 48vw;
    height: auto;
    padding: 2vw 0vw;
    gap: 2vw;
    align-items: center;


    &:nth-child(2)::after {
    display:none;
  }
  }
`;

const Digdiv = styled.div`
color:white;
font-size:1.2vw;
font-family:"Michroma";
font-weight:900;
display:flex;
align-items:center;
gap:1vw;


@media screen and (max-width:768px){
    font-size: 3vw;
    gap: 0.5vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
       font-size: 2.5vw;
    gap: 0.5vw;
}
`;

const Ico = styled.img`
width:2.5vw;

@media screen and (max-width:768px){
    width: 4vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
    width: 3vw;
}
`;
 const Numh = styled.div`
 color:white;
 font-family:"montserrat";
 font-size : 0.9vw;
 font-weight:500;
 margin-top:0.3vw;

 @media screen and (max-width:768px){
    font-size: 2vw;
}
@media screen and (min-width:768px) and (max-width:1023px){
    font-size: 2vw;
}
 `;

export default function TraiconNums() {
    const [values, setValues] = useState([0, 0, 0, 0]);

    useEffect(() => {
        // Set initial values after a short delay
        const timeoutId = setTimeout(() => setValues([50, 12, 500, 1000]), 50);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <TraiNums>
                <TnBoxes>
                    <Digdiv>
                   <div>
                    <Ico src={event} alt="icon" />
                   </div>
                    <div>
                        <Odometer
                            value={values[0]}
                            format="(,ddd).dd"
                            options={{
                                animation: 'count'
                            }}
                        /> <span>+</span>
                        </div>
                    </Digdiv>
                   <Numh>EVENTS</Numh>
                </TnBoxes>
                <TnBoxes>
                    <Digdiv>
                        <div>
                        <Ico src={years} alt="icon" />
                        </div>
                        <div>
                        <Odometer
                            value={values[1]}
                            format="(,ddd).dd"
                            options={{
                                animation: 'count'
                            }}
                        /> <span>+</span>
                        </div>
                    </Digdiv>
                    <Numh>YEARS OF EXPERIENCE</Numh>
                </TnBoxes>
                <TnBoxes>
                    <Digdiv>
                    <div>
                        <Ico src={partner} alt="icon" />
                        </div>
                    <div>
                        <Odometer
                            value={values[2]}
                            format="(,ddd).dd"
                            options={{
                                animation: 'count'
                            }}
                        /> <span>+</span>
                        </div>
                    </Digdiv>
                    <Numh>PARTNERS</Numh>
                </TnBoxes>
                <TnBoxes>
                    <Digdiv>
                        <div>
                        <Ico src={delegate} alt="icon" />
                        </div>
                    <div>
                        <Odometer
                            value={values[3]}
                            format="(,ddd).dd"
                            options={{
                                animation: 'count'
                            }}
                        /> <span>+</span>
                        </div>
                    </Digdiv>
                    <Numh>EXHIBITORS</Numh>
                </TnBoxes>
            </TraiNums>
        </div>
    );
}
