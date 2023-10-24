"use client";
import React from "react";
import Banner from "../../../Components/fleetManagement/Bnner";
import Microentrepreneurs from "../../../Components/fleetManagement/microentrepreneurs";
import Setfleetsection from "../../../Components/fleetManagement/setfleetsection";
import Managefleetsection from "../../../Components/fleetManagement/managefleetsection";
import PartnerGrow from "../../../Components/fleetManagement/partnergrow";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import BrownFooter from "../../../Layout/Footer/brownFooter";

function fleetManagement() {
  return (
    <>
      <Banner />
      <Microentrepreneurs />
      <PartnerGrow />
      <Setfleetsection />
      <Managefleetsection />
      <FAQs faqsList={faqs.fleet_management} />
      <BrownFooter />
    </>
  );
}

export default fleetManagement;
