"use client";
import React from "react";
import BannerSection from "../../../Components/ride-with-us/bannerSection";
import DemandSection from "../../../Components/ride-with-us/demandSection";
import AdvantagesSection from "../../../Components/ride-with-us/advantagesSection";
import VehicleDeliverySection from "../../../Components/ride-with-us/vehicleDeliverySection";
import OwnFleetSection from "../../../Components/ride-with-us/ownFleet";
import WhyChooseFormSection from "../../../Components/ride-with-us/whyChooseFormSection";
import BrownFooter from "../../../Layout/Footer/brownFooter";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";

function Business() {
  return (
    <>
      {/* Section 1 :- Banner Section */}
      <BannerSection />
      <WhyChooseFormSection />
      {/* <Forms /> */}
      {/* Section 3 :- Demand Section */}
      <DemandSection />
      {/* Section 4 :- Advantages Section */}
      <AdvantagesSection />
      {/* Section 6 :- Vehicle Delivery */}
      <OwnFleetSection />
      <VehicleDeliverySection />
      <FAQs faqsList={faqs.ride_business} />
      <BrownFooter />
    </>
  );
}

export default Business;
