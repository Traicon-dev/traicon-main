import React, { useState } from "react";
import styled from "styled-components";
import { ContactPatch } from "./ContactUs";
import team from "../images/team.webp";
import AnimatedText from "./AnimatedText";
import axios from 'axios';
import { Helmet } from "react-helmet";


// Styled Components

const CareersContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
`;

const CareerTop = styled.div`
  position: relative;
  width: 100%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #000;

  .career-patch {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #00000086;
  }

  @media screen and (max-width: 767px){
   position: relative;
   width: 100%;
   height: 50vw;
}
@media screen and (min-width: 768px) and (max-width: 1024px){
   position: relative;
   width: 100%;
   height: 50vw;
   display: flex;
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


export const Direct = styled.ul`
  width: auto;
  height: 2vw;
  font-size: 1vw;
  color: #fff;
  display: flex;
  list-style-type: none;
  gap: 1vw;
  margin: 0;
  padding: 0;
  font-family: "source sans 3";
  z-index: 1;

  li {
    margin: 0;
    cursor: pointer;
  }
  .li-active {
    color: #2f9cda;
  }
  @media screen and (max-width:767px) {
    font-size: 3vw;
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
       font-size: 3vw;
    height: auto;
  }
`;
const CareerCont = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .career-topic {
    display: flex;
    padding: 2vw 0;
    gap: 4vw;
    flex-direction: column;
  }
  .car-img {
    width: 100%;
    height: 30vw;
    background: url(${team});
    background-size: cover;
    background-position: 0 -10vw;
    padding: 2vw 0;
    margin: 2vw 0 4vw;
    border-radius: 2vw;
  }
  @media screen and (max-width:767px){
    width:90%;

    .car-img {
      width: 100%;
        height: 70vw;
        background-size: 165%;
        background-position: center;
    }
  }

`;
const CareerHead = styled.h2`
  width: 50%;
  font-size: ${(props) => props.fontSize || "3vw"};
  color: ${(props) => props.color || "#fff"};
  line-height: 3.2vw;
  font-family: "sdel";
  margin-top: 4vw;

  span {
    color: #2f9cda;
  }
  @media screen and (max-width:767px){
    width: 100%;
    font-size: 5vw;
    line-height: 5.2vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
  width: 100%;
    font-size: 5vw;
    line-height: 5.2vw;
  }
`;
const Description = styled.p`
  width: 50%;
  font-size: 1.1rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #fff;
  font-family: "figtree";
  line-height: 1.7;

  @media screen and (max-width:767px){
    width:100%;
    font-size: 3.3vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
        width:100%;
    font-size: 2.5vw;
  }
`;
const JobHead = styled.h2`
  font-size: 2.5vw;
  color: #fff;
  font-family: "sdel";
  font-weight: 900;

  @media screen and (max-width:500px){
    font-size: 5vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
      font-size: 3.5vw;
  }
`;
const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2vw 0;
`;

const JobCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2vw;
  width: 30vw;
  text-align: start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;



  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .job-top {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 0.5vw 0;
  }
  h3 {
    margin-bottom: 0.75rem;
    color: #333;
    font-family: "sdb";
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
    font-family: "figtree";
    margin: 0;
  }
  .job-time i {
    margin: 0 3px 0 0;
  }
  .job-location i {
    margin: 0 3px 0 0;
  }
  .job-time {
    font-size: 1vw;
    padding: 0.5vw 0;
  }
  .job-des {
    line-height: 1.2vw;
    padding: 0.5vw 0;
  }
  .job-location {
    padding: 0vw 0 0.5vw;
  }
  .arrow {
    position: absolute;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 0.5vw;
    border-radius: 5vw;
    rotate: -45deg;
    right: 0;
    top: 0.75vw;
  }
  .arrow i {
    font-size: 1vw;
    color: #fff;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
  @media screen and (max-width:767px){
    padding: 3vw;
    width: 100%;
    h3{
      width: 80%;
    }
    .job-top {
      font-size: 4vw;
    }
    .job-des {
    font-size: 3.4vw;
    line-height: 3.4vw;
    padding: 2vw 0;
    }
    .job-time {
    font-size: 3.4vw;
    padding: 1vw 0;
    }
    .job-location {
      padding: 0vw 0 2vw;
    }
    .arrow{
      padding: 1.5vw;
    }
    .arrow i {
      font-size: 4vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
     padding: 3vw;
    width: 100%;
    h3{
      width: 80%;
    }
    .job-top {
      font-size: 3vw;
    }
    .job-des {
    font-size: 2.5vw;
    line-height: 3vw;
    padding: 2vw 0;
    }
    .job-time {
    font-size: 3vw;
    padding: 1vw 0;
    }
    .job-location {
      padding: 0vw 0 2vw;
    }
    .arrow{
      padding: 1vw;
    }
    .arrow i {
      font-size: 3vw;
    }
  }
`;
const FormCont = styled.div`
  width: 66vw;
  padding: 2vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 0 2vw 0;
  
  @media screen and (max-width:767px){
    width: 90%;
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
     width: 80%;
    padding: 0;
  }
`;
const CareerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;

  }
  .fileUpload {
    width: 20vw;
    font-size: 1vw;
    font-family: 'montserrat';
    cursor: pointer;
  }
  .input-cont{
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: 0 10px;
    color: #000;
  }
  .input-cont input{
    cursor: pointer;
  }
  .upload-btn{
    width: 10vw;
    height: 1.5vw;
  }
  @media screen and (max-width:767px){
    .fileUpload{
      width: 100%;
      font-size: 3vw;
    }
    .input-cont {
    width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
        .fileUpload{
      width: 100%;
      font-size: 2.5vw;
    }
    .input-cont {
    width: 100%;
    }
  }
`;

const FormHead = styled.h2`
  text-align: start;
  margin-bottom: 20px;
  color: #2f9cda;
  font-family: 'montserrat';
  font-weight: 700;

  @media screen and (max-width:500px){
    font-size: 5vw;  
  }
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 45%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin: 0;
  @media screen and (max-width: 767px){
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 100%;
    padding: 20px 10px;
  }
`;



const SubmitButton = styled.div`
  color: white;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 4px;
  font-size: 16px;

  button{
    width: 12vw;
    height: 2.5vw;
    background-color: #2f9cda;
    border-radius: 0.5vw;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  button:hover{
    background-color: #2489c2;
  }
  @media screen and (max-width:767px) {
    button{
    width: 35vw;
    height: 10vw;
    background-color: #2f9cda;
    border-radius: 1vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
     button{
    width: 20vw;
    height: 7vw;
    background-color: #2f9cda;
    border-radius: 1vw;
    font-size: 2.5vw;
    }
  }
`;

// const GalleryContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: auto;
//   background-color: #000;
//   padding: 4vw 0;

//   .gallery-head{
//     font-size: 3.4vw;
//     font-family: 'montserrat';
//     font-weight: 900;
//     color: #fff;
//   }
//   @media screen and (max-width:500px){
//      .gallery-head {
//       font-size: 6vw;
//   }
// }
// `;

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Sponsorship Sales",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Play a critical role in driving revenue by securing sponsorships for our events, programs, and initiatives.",
  },
  {
    id: 2,
    title: "Delegate Sales",
    time: "Full time",
    location: "Bangalore - Karnataka",
    description:
      "Responsible for driving attendance and participation in our events, conferences, and summits by engaging with potential delegates.",
  }
];

const Careers = () => {
  const [fields, setFields] = useState({
    firstName: "",
    phone: "",
    email: "",
    currentPosition: "",
    currentCompany: "",
    jobRole: "",
    resumeUpload: null, // Store the file directly here
  });

  // Handle text input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFields((prevState) => ({
      ...prevState,
      resumeUpload: file, // Store the file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send both text and file data
    const formData = new FormData();
    formData.append('firstName', fields.firstName);
    formData.append('phone', fields.phone);
    formData.append('email', fields.email);
    formData.append('currentPosition', fields.currentPosition);
    formData.append('currentCompany', fields.currentCompany);
    formData.append('jobRole', fields.jobRole);
  

    // Check if a file is uploaded and append it
    if (fields.resumeUpload) {
      formData.append('resumeUpload', fields.resumeUpload);
    } else {
      alert("Please upload a resume.");
      return;
    }

    try {
      const response = await axios.post('https://traiconevents.com/career.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === "success") {
        alert('Your application has been sent successfully!');
        setFields({
          firstName: '',
          phone: '',
          email: '',
          currentPosition: '',
          currentCompany: '',
          jobRole: '',
          resumeUpload: null, // Reset the file input
        });
      } else {
        console.log(response);
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting your application. Please try again later.');
    }
  };

  return (
    <>
        <Helmet>
      <title>TRAICON EVENTS | CAREERS</title>
      <meta name="description" content="Explore Career Opportunities at TraiCon Events. Join our team and grow with us in Events, Sales, and Business roles based in Bengaluru." />
    </Helmet>
      <CareersContainer>
        <CareerTop>
          <ContactPatch />
          <TopHeaderCont>
            <h2><AnimatedText lines={['CAREERS']} /></h2>
            <p>Grow, Thrive, and Succeed with Our Team</p>
            <p className="element">Home &gt; <span>CAREERS</span></p>
          </TopHeaderCont>
        </CareerTop>

        <CareerCont>
          <div className="career-topic">
            <CareerHead>
              WORK WITH <span>TRAICON</span> <br /> BE A <span>TRAI'TAN</span>
            </CareerHead>
            <Description>
              We spend a large part of our lives at work, so it’s imperative to have a job that is inspiring from within, fun to be turning it light, and giving a sense of accomplishment beyond the financial returns it stands for.
            </Description>
          </div>
          <div className="car-img"></div>
          <JobHead>CURRENTLY OPEN POSITIONS</JobHead>
          <JobList>
            {jobs.map((job) => (
              <JobCard key={job.id}>
                <div className="job-top">
                  <h3>{job.title}</h3>
                  <p className="job-time">
                    <i className="fa-solid fa-briefcase"></i> {job.time}
                  </p>
                  <div className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <p className="job-des">{job.description}</p>
                <p className="job-location">
                  <i className="fa-solid fa-location-dot"></i> {job.location}
                </p>
              </JobCard>
            ))}
          </JobList>
        </CareerCont>

        <FormCont>
          <CareerForm onSubmit={handleSubmit}>
            <FormHead>ABOUT YOU</FormHead>
            <form>
              <InputField
                type="text"
                placeholder="First Name"
                name="firstName"
                value={fields.firstName}
                onChange={handleInputChange}
                required
              />
              <InputField
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={fields.phone}
                onChange={handleInputChange}
                required
              />
              <InputField
                type="email"
                placeholder="Email ID"
                name="email"
                value={fields.email}
                onChange={handleInputChange}
                required
              />
              <InputField
                type="text"
                placeholder="Current Position"
                name="currentPosition"
                value={fields.currentPosition}
                onChange={handleInputChange}
              />
              <InputField
                type="text"
                placeholder="Current Company"
                name="currentCompany"
                value={fields.currentCompany}
                onChange={handleInputChange}
              />
              <InputField
                type="text"
                placeholder="Job Role"
                name="jobRole"
                value={fields.jobRole}
                onChange={handleInputChange}
              />

              <div className="input-cont">
                <label className="fileUpload" htmlFor="resumeUpload">
                  Attach Your Resume
                </label>
                <input
                  type="file"
                  name="resumeUpload"
                  id="resumeUpload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <SubmitButton>
                <button type="submit">SUBMIT</button>
              </SubmitButton>
            </form>
          </CareerForm>
        </FormCont>
      </CareersContainer>
    </>
  );
};

export default Careers;
