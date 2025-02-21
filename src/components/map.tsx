import React from "react";
import styled from "styled-components";

const Map = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vw;
margin-bottom: 10vw;
  z-index: 4;
`;
export default function MapComponent() {

  return (
    <Map>
      <div style={{ width: "80%", height: "50vh",background:'#000',borderRadius:"2vw" }}>
        <iframe style={{borderRadius:"1.5vw"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8995145905515!2d77.63132031462692!3d12.978278454937604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a31f60278b%3A0x7378c4bc59787659!2sTraiCon%20Events%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1732620443484!5m2!1sen!2sin" width={"100%"} height={"100%"}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </Map>
  );
}
