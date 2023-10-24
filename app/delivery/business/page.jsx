"use client";
import React from "react";
import DeliveryBanner from "../../../Components/delivery/business/banner"
import Usage from "../../../Components/delivery/business/usage"
import SetUpDelivery from "../../../Components/delivery/set_up__delivery"
import Advantages from "../../../Components/ride-with-us/advantagesSection"
import OwnFleet from "../../../Components/ride-with-us/ownFleet"
import LocalDeliveryPartner from "../../../Components/delivery/business/any_vehicle";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import BrownFooter from "../../../Layout/Footer/brownFooter";

function Business() {
  return (
    <>
      <div className="delivery_business">
        <DeliveryBanner />
        <Usage />
        <SetUpDelivery />
        <Advantages />
        <OwnFleet />
        <LocalDeliveryPartner />
        <FAQs faqsList={faqs.delivery_business} />
        <BrownFooter />
      </div>
    </>
  );
}

export default Business;
