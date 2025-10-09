import React from "react";
import { ContactPatch } from "./ContactUs";
import styled from "styled-components";
import { Helmet } from "react-helmet";


const TermsSection = styled.section`
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
const TermsTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .Terms-top{
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
const TermsDes = styled.div`
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
const TermsCont = styled.div`
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
const TermsLeft = styled.div`
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
const TermsRight = styled.div`
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
const TermsHead = styled.div`
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

const TermsOfUse = () => {

    return(
        <>
              <Helmet>
                      <title>TRAICON | TERMS AND CONDITION</title>
                      <meta name="description" content="By using this site, you agree to the Terms of Use, including age, authority, and dispute resolution via compromise. Do not use the site if you disagree" />
                    </Helmet>
         <TermsSection>
            <TermsTop>
                <ContactPatch />
            <div className="Terms-top">
                <TermsHead>TERMS AND CONDITION</TermsHead>
            </div>
            </TermsTop>
            <TermsDes>
              <span>Version 2.0</span>
                <p>The TraiCon Events website located at http://traiconevents.com is a copyrighted work belonging to TraiCon Events Pvt Ltd.. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. </p>
                    <p>All such additional terms, guidelines, and rules are incorporated by reference into these Terms.</p>
                    <p>These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. you should be at least 18 years of age to access the site. if you disagree with all of the provision of these terms, do not log into and/or use the site.</p>
                    <p>These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute.</p>
                </TermsDes>
            <TermsCont>
                <TermsLeft>Access to the Site</TermsLeft>
                <TermsRight>
                    <p><span>Access to the Site.</span> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.</p>
                    <p><span>Certain Restrictions.</span> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.</p>
                    <p><span></span>Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.</p>
                    <p><span>No support or Maintainance</span> You agree that Company will have no obligation to provide you with any support in connection with the Site.</p>
                    <p>Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
                <TermsLeft>Third-Party Links & Ads; <br /> Other Users</TermsLeft>
                <TermsRight>
                    <p><span>Third-Party Links & Ads.</span>  The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.</p>
                    <p><span>Other Users.</span>  Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.</p>
                    <p>You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: "a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor."</p>
                    <p><span>Cookies and Web Beacons.</span>  Like any other website, TraiCon Events uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
                <TermsLeft>Disclaimers</TermsLeft>
                <TermsRight>
                    <p>The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.</p>
                    <p>Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.  Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
                <TermsLeft>Limitation on Liability</TermsLeft>
                <TermsRight>
                    <p>To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.</p>
                    <p>To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit.  You agree that our suppliers will have no liability of any kind arising from or relating to this agreement.</p>
                    <p>Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.</p>
                    <p><span>Term and Termination.</span> Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
                <TermsLeft>COPYRIGHT POLICY</TermsLeft>
                <TermsRight>
                    <p>Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:</p>
                    <ul>
                      <li>your physical or electronic signature;</li>
                      <li>identification of the copyrighted work(s) that you claim to have been infringed;</li>
                      <li>identification of the material on our services that you claim is infringing and that you request us to remove;</li>
                      <li>sufficient information to permit us to locate such material;</li>
                      <li>your address, telephone number, and e-mail address;</li>
                      <li>a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; </li>
                      <li>a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.</li>
                    </ul>
                    <p>Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney’s fees incurred by us in connection with the written notification and allegation of copyright infringement.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
                <TermsLeft>GENERAL</TermsLeft>
                <TermsRight>
                    <p><span>Electronic Communications.</span>  The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.</p>
                    <p><span>Entire Terms.</span>  These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.</p>
                    <p><span>Copyright/Trademark Information.</span>  Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</p>
                </TermsRight>
            </TermsCont>
            <TermsCont>
              <TermsLeft>Disclaimer for TraiCon Events Pvt Ltd.</TermsLeft>
              <TermsRight>
                <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at info@traiconevents.com</p>
              </TermsRight>
            </TermsCont>
            <TermsCont>
              <TermsLeft>Disclaimers for TraiCon Events</TermsLeft>
              <TermsRight>
                <p>All the information on this website - http://traiconevents.com - is published in good faith and for general information purpose only. TraiCon Events does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (TraiCon Events), is strictly at your own risk. TraiCon Events will not be liable for any losses and/or damages in connection with the use of our website.</p>
                <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
                <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
              </TermsRight>
            </TermsCont>
            <TermsCont>
              <TermsLeft>CONSENT</TermsLeft>
              <TermsRight>
                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
              </TermsRight>
            </TermsCont>
            <TermsCont>
              <TermsLeft>CONTACT INFORMATION</TermsLeft>
              <TermsRight>
                <p><a href=""><span>Address:</span> Bangalore,India</a></p>
                <p><a href=""><span>Email:</span> info@traiconevents.com</a></p>
              </TermsRight>
            </TermsCont>
         </TermsSection>
        </>
    )
}

export default TermsOfUse;