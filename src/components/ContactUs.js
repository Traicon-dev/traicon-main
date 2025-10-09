import React,{useState} from "react";
import styled from "styled-components";
import Intro from "./map.tsx";
import AnimatedText from "./AnimatedText.js";
import axios from "axios";
import { Helmet } from "react-helmet";


const ContactSection = styled.section`
position:relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #040f16;
  overflow: hidden;

`;

const ContactTop = styled.div`
  position: relative;
  width: 100%;
  height: 20vw;
  background-size: cover;
  background-position-y: -13vw;
  display: flex;
align-items: center;
justify-content: center;
position: relative;
  gap: 1vw;

  @media screen and (max-width: 767px){
   position: relative;
   width: 100%;
   height: 50vw;
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  position: relative;
   width: 100%;
   height: 50vw;
}
`;

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

@media screen and (max-width:767px){
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
@media screen and (min-width: 768px) and (max-width: 1024px){
   h2{
  font-size: 7vw;
 }
 p{
  font-size: 2.5vw;
 }
  .element {
    font-size: 2.2vw;
    margin-top: 3vw;
}
}
`
export const ContactPatch = styled.div`
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  box-shadow: inset 1vw 1vw 10vw #2f9cda, 0vw 15vw 50vw #2f9cda;
  position: absolute;
  animation: glow infinite forwards 5s;
  top: -75vw;
  backdrop-filter: blur(2px);
  z-index: 2;
  @keyframes glow {
   0%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0 15vw 60vw #2f9cda;
   }
   50%{
    box-shadow: inset 0vw 0vw 8vw #2f9cda, 0 10vw 50vw #2f9cda;
    
   }
   100%{
    box-shadow: inset 0vw 0vw 5vw #2f9cda, 0 15vw 60vw #2f9cda;
   }
  }
`;


const ContactContainer = styled.div`

  width: 85%;
  height: auto;
  z-index: 4;
  display: flex;
  margin-top: 7vw;
  border-radius: 1vw;
  background-image: url({worldmap});

  @media screen and (max-width:767px){
    width: 100%;
    flex-direction: column;
    gap: 15vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    flex-direction: column;
  }
`;
const ContactLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:1024px){
    width: 100%;
  }
`;
const ContactRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width:1024px){
    width: 100%;
  }
`;
const ContactCont = styled.div`
      width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1vw;

    @media screen and (max-width: 767px){
    gap: 3vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    margin-top: 4vw;
  }
`;
const CsubHead = styled.h2`
  font-size: 3.5vw;
  font-family: "sdel";
  color: #2f9cda;
  margin: 0;

  @media screen and (max-width: 767px){
    font-size: 4.5vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 4vw;
  }
`;
const CsubDes = styled.div`
  font-size: 1.2vw;
  color:#fff;
  font-family: "sdl";

  @media screen and (max-width: 767px){
    font-size: 3.4vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
     font-size: 2.5vw;
  }
`;

// form
const FormContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-top: 2vw;

  @media screen and (max-width: 767px){
    gap: 3vw;
  }
`;

const InputCont = styled.div` 
  position: relative;
  width: 47.5%;
  background-color: #202020;

  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* gap: 1.5vw; */
  row-gap: 2vw;
  margin: 0;

  label{
  position: absolute;
  font-family: 'source sans 3';
  top: 1.2vw;
  left: 1.2vw;
  z-index: 0;
  opacity: .8;
  color: #cdcdcd;
  transition: all ease .5s;
  }
  @media screen and (max-width: 767px){
    row-gap: 6vw;
  }

  .line1 input{ 
    position: relative;
    background-color: #2f9cda15;
  color:#fff;
  padding: 1.2vw 0;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #00000000;
  z-index: 1;  
  border-radius: 0.5vw;
  }
  &:focus {
    outline: none;
    border-color: #00000000;
  }
  .line1{
    border-radius: 0.5vw;
  }
  .line2{
    width: 100%;
    border-radius: 0.5vw;
  }
select{
  padding: 1.2vw 0vw;
}
  .line2 input{
    background-color: #2f9cda15;
    padding: 1.2vw 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #00000000;
  border-radius: 0;
  color: #fff;
  z-index: 1;
  border-radius: 0.5vw;
  }
  &:focus {
    outline: none;
    border-color: 1px solid #00000000;
  }
.active{
  top: -1.3vw;
  left: 0.1vw;
  font-size: 1vw;
}
@media screen and (max-width: 767px){
  row-gap: 6vw;
  label{
    font-size: 4vw;
  }
   .active{
    font-size: 3vw;
    top: -4vw;
   }
  .line2 input,.line1 input{
    padding: 1.5vw 0;
   }
   select{
    padding: 2vw 0;
   }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
      row-gap: 2vw;
  label{
    font-size: 2.5vw;
  }
   .active{
    font-size: 3vw;
    top: -4vw;
   }
  .line2 input,.line1 input{
    padding: 2vw 0;
   }
   select{
    padding: 2vw 0;
   }
  }
`;





const Selection1 = styled.select`
position: relative;
  width: 100%;
  padding: 1.2vw 0;
  border-color: rgb(204, 204, 204);
  color: #454545;
  background-color: #2f9cda15;
  z-index: 1;
  color:#fff;
  border: none;

  option{
    color: #FFF;
   background-color: #040f16;
  }
`;

const Textarea = styled.textarea`
  position: relative;
  padding: 0.5vw 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #00000000;
  resize: none;
  background-color: #2f9cda15;
  color:#fff;
  z-index: 2;

  &:focus {
    outline: none;
    border-color: #2f9cda;
  }
`;

const Button = styled.button`
  padding: 1.2vw 2vw;
  width: 100%;
  font-size: 1.2vw;
  color: #fff;
  background: #2f9cda;
  border: none;
  font-family: "sdeb";
  text-transform: uppercase;
  border-radius: .5vw;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #2489c2;
  }
  @media screen and (max-width: 767px){
    padding: 2vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.5vw;
  }
`;

const ContactBotPatch = styled.div`
  position: absolute;
  width: 70vw;
height: 70vw;
border-radius: 50%;
box-shadow: inset 1vw 1vw 10vw #2f9cda, 0vw -15vw 50vw #2f9cda;
rotate: 180deg;
position: absolute;
animation: glow infinite forwards 5s;
bottom: -75vw;
backdrop-filter: blur(2px);
z-index: 2;
`;

const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vw;

  .connect{
    width: 100%;
    height: 30vw;
    display: flex;
    gap: 1vw;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .connect-box{
    width: 14.5vw;
    height: 15vw;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background: #2f9cda15;
    gap:.5vw;
  }
  .icon{
    width: 4vw;
    height: 4vw;
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon i{
    color: #3da3db;
  }
  .name{
    width: 100%;
    font-family: 'sdel';
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
    color: #fff;
  }
  .des{
    width: 100%;
    font-family: 'sdel';
    text-align: center;
    font-size: 1vw;
    color: #fff;
  }
  .loc{
    width: 100%;

  }
  @media screen and (max-width:767px){
    .connect{
      height: auto;
    }
    .connect-box{
      width: 44.5vw;
      height: 40vw;
      gap: 2vw;
    }
    .icon {
    width: auto;
    height: auto;
    font-size: 8vw;
    }
    .name {
    font-size: 3vw;
    }
    .des {
    font-size: 3.3vw;
    }
    .loc{
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    margin-top: 4vw;  
    
    .connect{
      height: auto;
    }
    .connect-box{
      width: 35vw;
      height: 35vw;
      gap: 2vw;
    }
    .icon {
    width: auto;
    height: auto;
    font-size: 6vw;
    }
    .name {
    font-size: 2.5vw;
    }
    .des {
    font-size: 2.5vw;
    }
    .loc{
      width: 100%;
    }
  }
`;

// ContactUs Component
const ContactUs = () => {
  const [fields, setFields] = useState({
    fullName: "", 
    mobileNumber: "",
    jobTitle: "",
    organization: "",
    emailId: "",
    selectOption:"",
    message:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const isActive = (fieldName) => fields[fieldName].trim().length > 0;

  const handleNumber = (e) => {
  
    const value = e.target.value;

    e.target.value = value.replace(/[^0-9]/g, "");
  };


    const [selectedValue, setSelectedValue] = useState("");
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      setFields({ ...fields, selectOption: event.target.value }); // Update fields state
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Post data to your PHP backend (contact.php)
        const response = await axios.post("https://traiconevents.com/contact.php", fields);
  
        // Handle the response from the PHP backend
        if (response.data.success) {
          alert("Your message has been sent successfully!");
          setFields({
            fullName: "",
            mobileNumber: "",
            jobTitle: "",
            organization: "",
            emailId: "",
            selectOption: "",
            message: "",
          });
        } else {
          console.log(response)
          alert("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred. Please try again later.");
      }
    };
  
  return (
    <>
      <Helmet>
          <title>TRAICON EVENTS | CONTACT US</title>
          <meta name="description" content="GET OUR EXPERT’S ADVICE BEFORE MOVING FORWARD! WE LOVE TO GET FEEDBACK & MEETING NEW CHALLENGES" />
        </Helmet>
    <ContactSection>
      <ContactTop>
        <ContactPatch></ContactPatch>
        {/* <ContactHead>Let's <span>Talk Business.</span> <br /> But You First</ContactHead> */}
          <TopHeaderCont>
            <h2><AnimatedText lines={['CONTACT US']} /></h2>
             <p>GET OUR EXPERT’S ADVICE BEFORE MOVING FORWARD!
             WE LOVE TO GET FEEDBACK & MEETING NEW CHALLENGES </p>
             <p className='element'>Home &gt; <span>Contact Us</span></p>
                </TopHeaderCont>
      </ContactTop>
      <ContactContainer>
        <ContactLeft>
          <ContactCont>
            <CsubHead>Get In Touch</CsubHead>
            <CsubDes>
              Interested in knowing more?
            </CsubDes>
            <FormContainer>
              
              <Form onSubmit={handleSubmit}>
                <InputCont className="line1">
                <label className={`label ${isActive("fullName") ? "active" : ""}`}>Full Name:</label>
                <input type="text" name="fullName" value={fields.fullName} onChange={handleInputChange} onFocus={() => {}} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("mobileNumber") ? "active" : ""}`}>Mobile Number:</label>
                <input type="text" name="mobileNumber" value={fields.mobileNumber} onChange={handleInputChange} onInput={handleNumber} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("jobTitle") ? "active" : ""}`}>Job-title</label>
                <input type="text"  name="jobTitle" value={fields.jobTitle} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line1">
                <label className={`label ${isActive("organization") ? "active" : ""}`}>Organization:</label>
                <input type="text"  name="organization" value={fields.organization} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${isActive("emailId") ? "active" : ""}`}>Email-Id:</label>
                <input type="email" name="emailId" value={fields.emailId} onChange={handleInputChange} />
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${selectedValue && selectedValue !== "" ? "active" : ""}`}>Select Your Interest:</label>
                <Selection1 name="selectOption" onChange={handleChange} value={selectedValue}>
						      <option style={{display:"none"}} className="blank_option"></option>
						      <option value="exhibitor">Exhibitor</option>
						      <option value="speaking">Speaker</option>
						      <option value="delegate">Delegate</option>
						      <option class="sponsor">Sponsor</option>
						      <option value="media-partner">Media Partner</option>
						      <option value="supporting-partner">Supporting Partner</option>
						      <option value="others">Others</option>
                </Selection1>
                </InputCont>
                <InputCont className="line2">
                <label className={`label ${isActive("message") ? "active" : ""}`}>Write Your Message</label>
                <Textarea rows="8" type="text" name="message" value={fields.message} onChange={handleInputChange} />
                </InputCont>
                <Button type="submit">Submit</Button>
              </Form>
            </FormContainer>
          </ContactCont>
        </ContactLeft>
        <ContactRight>
          <ContactCont>
            <CsubHead>Connect with us</CsubHead>
            <CsubDes>
              Get in touch with us today.
            </CsubDes>
            <Contact>
              <div className="connect">
                <div className="connect-box">
                  <div className="icon"> <i class="fa-solid fa-phone"></i> </div>
                  <div className="name">Telephone</div>
                  <div className="des">+91 8971269298</div>
                </div>
                <div className="connect-box">
                  <div className="icon"> <i class="fa-solid fa-envelope"></i> </div>
                  <div className="name">Email</div>
                  <div className="des">info@traiconevents.com</div>
                </div>
                <div className="connect-box loc">
                  <div className="icon"> <i class="fa-solid fa-location-dot"></i> </div>
                  <div className="name">Location</div>
                  <div className="des">#32, Chinmaya Mission Hospital Road, <br /> Indiranagar II Stage, Bangalore – 560 038, India</div>
                </div>
              </div>
              
            </Contact>
          </ContactCont>
        </ContactRight>
      </ContactContainer>
      <Intro/>
      <ContactBotPatch></ContactBotPatch>
    </ContactSection>
    </>
  );
};

export default ContactUs;