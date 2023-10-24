"use client";
import React from "react";
import BannerSection from "../../../Components/ride-with-us/individual/bannerSection";
import WhyChooseFormSection from "../../../Components/ride-with-us/individual/whyChooseFormSection";
import DemandSection from "../../../Components/ride-with-us/individual/demandSection";
import HowitsWork from "../../../Components/ride-with-us/individual/howitsWork";
import NearByEvent from "../../../Components/ride-with-us/individual/nearByEvent";
import AddOnsSection from "../../../Components/ride-with-us/individual/addOnsSection";
import BrownFooter from "../../../Layout/Footer/brownFooter"
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";

function Individual() {
  return (
    <>
      {/* Section 1 :- Banner Section */}
      <BannerSection />
      <WhyChooseFormSection />
      {/* Section 3 :- Demand Section */}
      <DemandSection />
      <AddOnsSection />
      {/* Section 4 :- How Its Work Section */}
      <HowitsWork />
      <NearByEvent />
      <FAQs faqsList={faqs.ride_individual} />
      <BrownFooter />
    </>
  );
}

export default Individual;
