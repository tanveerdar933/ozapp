"use client";
import React from "react";
import Banner from "../../../Components/delivery/individual/banner"
import Stastics from "../../../Components/delivery/stastics"
import LocalDelivery from "../../../Components/delivery/individual/local_delivery"
import AnyVehicleOptions from "../../../Components/delivery/business/any_vehicle";
import SetUpDelivery from "../../../Components/delivery/set_up__delivery";
import HowMuchCost from "../../../Components/delivery/individual/how_much_cost";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import BrownFooter from "../../../Layout/Footer/brownFooter";

function Individual() {
  return (
    <>
      <div className="delivery_business">
        <Banner />
        <Stastics />
        <LocalDelivery />
        <SetUpDelivery />
        <AnyVehicleOptions />
        <HowMuchCost />
        <FAQs faqsList={faqs.delivery_individual} />
        <BrownFooter />
      </div>
    </>
  );
}

export default Individual;
