import React from "react";
import { ContactPatch } from "./ContactUs";
import styled from "styled-components";
import { Helmet } from "react-helmet";


const PaymentSection = styled.section`
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
const PaymentTop = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;


  .payment-top{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 500px){
    height: 50vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    height: 30vw;
  }
`;

const PaymentCont = styled.div`
  width: 85%;
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
    position: absolute;
    font-weight: 500;
    color: #fff;
    left: -2vw;
  }
  
  @media screen and (max-width: 500px){
    flex-direction: column;
    gap: 4vw;

    span{
      left: -6vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    flex-direction: column;
    gap: 2vw;

    span{
      left: -5vw;
    }
  }
`;
const PaymentLeft = styled.div`
  display: flex;
  width: 100%;
  font-family: 'montserrat';
  font-weight: 600;
  font-size: 1.5vw;
  line-height: 1.5vw;
  color: #ffffff;

  @media screen and (max-width: 500px){
    font-size: 4vw;
    line-height: 4.5vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.7vw;
    line-height: 2.8vw;
  }
`;
const PaymentRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1vw;
  color: #dfdfdf;
  font-family: 'figtree';
  font-weight: 100;
  font-size: 1.1vw;
  line-height: 2vw;

  @media screen and (max-width: 500px){
    font-size: 3.4vw;
    line-height: 4.5vw;
    gap: 4vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 2.4vw;
    line-height: 3vw;
    gap: 3vw;
  }
`;
const PaymentHead = styled.div`
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

const PaymentsPolicies = () => {

    return(
        <>
            <Helmet>
          <title>TRAICON | PAYMENTS POLICIES</title>
          <meta name="description" content="For any Queries Related to Payments and Policies, please contact our experts — we're here to help you." />
        </Helmet>
         <PaymentSection>
            <PaymentTop>
                <ContactPatch />
            <div className="payment-top">
                <PaymentHead>PAYMENTS & POLICIES</PaymentHead>

            </div>
            </PaymentTop>
            <PaymentCont>
                <PaymentLeft>TERMS & CONDITIONS :</PaymentLeft>
                <PaymentRight>
                    <p>Registrations needs to be sent in a written email to Traicon by completing the registration form. Traicon Events Pvt Ltd requires the full payment from receipt of invoice. Traicon Events Pvt Ltd reserves the right to refuse entry to any client who has not paid their invoice. A Credit card guarantee may be requested if full payment has not been received. All bookings carry a 50% liability after the booking has been made. If you decide to cancel after this date the full invoice remains payable. </p>
                    <p>TraiCon Events Pvt Ltd reserves the right to change the content, timing, speakers or venue should circumstances require. The event may be postponed or cancelled due to acts of terrorism, war, extreme weather conditions, industrial action, acts of God or any event beyond the control of TraiCon Events Pvt Ltd: If such a situation arises we will endeavor to reschedule the event. In no circumstances shall TRAICON bear liability for any damage or loss which might occur to persons and/or properties during the event, including specifically disturbances of possession and all commercial losses. Since TRAICON’s insurance does not cover the client, it is up to the latter to subscribe third party liability insurance. An insurance voucher may be requested at any time. Fee does not include travel, hotel accommodation, transfers or insurance.</p>
                </PaymentRight>
            </PaymentCont>
            <PaymentCont>
                <PaymentLeft>REFUNDS :</PaymentLeft>
                <PaymentRight>
                    <p>Clients can cancel their participation within 10 days from the booking against a full refund. Refunds will be made back to the Clients account used to make the payment. Please allow for up to 45 days for the refund transfer to be completed.</p>
                    <p>There are no refunds for booked and paid tickets after 10 days from the booking. In case of cancellation after 24 hours, a Credit Voucher in the amount of original purchase will be issued for the client to use against any other event. Please see below section of Cancellation and Delivery Policy for more details on Credit Vouchers.</p>
                </PaymentRight>
            </PaymentCont>
            <PaymentCont>
                <PaymentLeft>CANCELLATION OF THE EVENT :</PaymentLeft>
                <PaymentRight>
                        <p className="para"><span>01. </span>Client can cancel their participation at the event within 10 days from the booking date. There are no refunds for booked and paid participation after 10 days. In case of cancellation, a Credit Voucher will be issued for the client to attend a future event, another event shall be organized, which must take place within twelve months after the cancelled one, at the venue, conditions and modalities chosen by TRAICON. In this case no refunding shall be made by TRAICON and shall not be sued for liability.</p>
                        <p className="para"><span>02. </span>These Credit Vouchers will be issued to the participant only and cannot be exchanged.</p>
                        <p className="para"><span>03. </span>If the Client cancels their participation after 10 days from the booking date. No Credit Vouchers will be issued.</p>
                        <p className="para"><span>04. </span>In case of cancellation of the event by TRAICON, the foregoing contract shall be unreservedly cancelled, the total amount already paid by the Client being refunded to him, without him being able to claim any compensation. Please allow for up to 45days for the refund transfer to be completed.</p>
                        <p className="para"><span>05. </span>In case of cancellation of the event by TRAICON for reasons of force majeure or because of the fact due to a third party which cannot be attributable to TRAICON, another event shall be organized, which must take place within twelve months after the cancelled one, at the venue, conditions and modalities chosen by TRAICON. In this case no refunding shall be made by TRAICON and shall not be sued for liability. The client shall pay the total amount for the contracted event.</p>
                        <p className="para"><span>06. </span>In the event that TRAICON postpones an event, there will be no refund and the client payments at the postponement date will be credited towards the rescheduled date. If the client is unable to attend the rescheduled event, the client will receive a 100% credit voucher for the amount paid representing payments towards a future TRAICON event.</p>
                </PaymentRight>
            </PaymentCont>
            <PaymentCont>
                <PaymentLeft>CONTACT US :</PaymentLeft>
                <PaymentRight>
                        <p className="para">If you have any questions about Payments & Policies, please contact us:</p>
                        <li>By email: info@traiconevents.com</li>
                </PaymentRight>
            </PaymentCont>
         </PaymentSection>
        </>
    )
}

export default PaymentsPolicies;