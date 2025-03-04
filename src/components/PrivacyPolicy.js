import React from "react";
import { ContactPatch } from "./ContactUs";
import styled from "styled-components";
// import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";


const PrivacySection = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4vw;
  background-color: #000;
  padding: 6vw 0;
  overflow: hidden;
`
const PrivacyTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .Privacy-top{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 100;
    padding: 4vw 0;
  }

  @media screen and (max-width: 500px){
    height: 50vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    height: 30vw;
  }
`;
const PrivacyDes = styled.div`
  font-size: 1.1vw;
  width: 80%;
  font-family: 'figtree';
  color: #fff;
  font-weight: 100;
  text-align: center;
  border-radius: 1vw;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  padding: 3vw;
  background-color: rgb(255 255 255 / 14%);
  backdrop-filter: blur(30px);
  z-index: 2;

  p{
    text-align: justify;
  }

  span{
    align-self: start;
    font-weight: 500;
    color: #2f9cda;
  }
  @media screen and (max-width: 500px){
    font-size: 3.4vw;
    border-radius: 3vw;
  p{
    text-align: justify;
  }
  span{
    font-size: 4.5vw;
  }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.4vw;
    span{
      font-size: 3vw;
    }
  }
`;

const PrivacyCont = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  padding: 1vw 0;

  p{
    position: relative;
    margin: 0;
    padding: 0;
    /* text-align: justify; */
  }
  span{
    font-weight: 500;
    color: #fff;
  }
  
  @media screen and (max-width: 500px){
    flex-direction: column;
    gap: 4vw;
    width: 80%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    flex-direction: column;
    gap: 2vw;

  }
`;
const PrivacyLeft = styled.div`
  display: flex;
  width: 35%;
  font-family: 'montserrat';
  font-weight: 600;
  font-size: 1.5vw;
  line-height: 1.5vw;
  color: #ffffff;

  @media screen and (max-width: 500px){
    font-size: 4vw;
    line-height: 4.5vw;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.7vw;
    line-height: 2.8vw;
    width: 100%;
  }
`;
const PrivacyRight = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  gap: 1vw;
  color: #dfdfdf;
  font-family: 'figtree';
  font-weight: 100;
  font-size: 1.1vw;
  line-height: 2vw;

  a{
    text-decoration: none;
    color: #2f9cda;
  }


  @media screen and (max-width: 500px){
    font-size: 3.4vw;
    line-height: 4.5vw;
    gap: 4vw;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.4vw;
    line-height: 3vw;
    gap: 3vw;
    width: 100%;
  }
`;
const PrivacyHead = styled.div`
  font-size: 4vw;
  color: #2f9cda;
  font-family: 'montserrat';
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 500px){
    font-size: 6vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 5vw;
  }
`;

const PrivacyPolicy = () => {

    return(
        <>
         <PrivacySection>
            <PrivacyTop>
                <ContactPatch />
            <div className="Privacy-top">
                <PrivacyHead>PRIVACY</PrivacyHead>
            </div>
            </PrivacyTop>
            <PrivacyDes>
                <p>Effective date: November 15, 2018</p>
                    <p>TraiCon Events Pvt Ltd ("us", "we", or "our") operates the http://traiconevents.com website (hereinafter referred to as the "Service").</p>
                    <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. </p>
                    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://traiconevents.com</p>
                </PrivacyDes>
            <PrivacyCont>
                <PrivacyLeft>Information Collection And Use</PrivacyLeft>
                <PrivacyRight>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
                <PrivacyLeft>Types of Data Collected</PrivacyLeft>
                <PrivacyRight>
                    <p><span>Personal Data:</span>  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                      <li>Email Address</li>
                      <li>First Name and Last Name</li>
                      <li>Phone Number</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                    <p><span>Usage Data:</span>  We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <p><span>Tracking & Cookies Data:</span> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                    <span>Examples of Cookies we use:</span>
                    <ul>
                      <li><span>Session Cookies.</span>  We use Session Cookies to operate our Service.</li>
                      <li><span>Preference Cookies.</span>  We use Preference Cookies to remember your preferences and various settings.</li>
                      <li><span>Security Cookies.</span>  We use Security Cookies for security purposes.</li>
                    </ul>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
                <PrivacyLeft>Use of Data</PrivacyLeft>
                <PrivacyRight>
                <span>TraiCon Events Pvt Ltd uses the collected data for various purposes:</span>
                    <ul>
                      <li>To provide and maintain the Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                      <li>To provide customer care and support</li>
                      <li>To provide analysis or valuable information so that we can improve the Service</li>
                      <li>To monitor the usage of the Service</li>
                      <li>To detect, prevent and address technical issues</li>
                   </ul>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
                <PrivacyLeft>Transfer Of Data</PrivacyLeft>
                <PrivacyRight>
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                    <p>If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</p>
                    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                    <p>TraiCon Events Pvt Ltd will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
                <PrivacyLeft>Disclosure Of Data</PrivacyLeft>
                <PrivacyRight>
                  <span>Legal Requirements:</span>
                  <p>TraiCon Events Pvt Ltd may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                  <ul>
                      <li>To comply with a legal obligation</li>
                      <li>To protect and defend the rights or property of TraiCon Events Pvt Ltd</li>
                      <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>To protect the personal safety of users of the Service or the public</li>
                      <li>To protect against legal liability</li>
                  </ul>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
                <PrivacyLeft>Security Of Data:</PrivacyLeft>
                <PrivacyRight>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
              <PrivacyLeft>Service Providers</PrivacyLeft>
              <PrivacyRight>
              <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
              <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              <span>Analytics</span>
              <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                  <p><span>Google Analytics:</span></p>
                  <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                  <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>                <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
              </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
              <PrivacyLeft>Links To Other Sites</PrivacyLeft>
              <PrivacyRight>
              <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
              <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
              </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
              <PrivacyLeft>Children's Privacy</PrivacyLeft>
              <PrivacyRight>
                <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
              </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
              <PrivacyLeft>Changes To This Privacy Policy</PrivacyLeft>
              <PrivacyRight>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
              <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </PrivacyRight>
            </PrivacyCont>
            <PrivacyCont>
              <PrivacyLeft>Contact Us</PrivacyLeft>
              <PrivacyRight>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <p><span>By email: </span><a href="mailto:info@traiconevents.com"> info@traiconevents.com</a></p>
              </PrivacyRight>
            </PrivacyCont>
         </PrivacySection>
        </>
    )
}

export default PrivacyPolicy;