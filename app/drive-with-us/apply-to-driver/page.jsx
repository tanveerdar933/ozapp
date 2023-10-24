"use client";
import React from "react";
import DriverBanner from "../../../Components/apply_to_driver/drivermainBanner";
import FreetoWorkSection from "../../../Components/apply_to_driver/freetoWorkSection";
import LaunchingSection from "../../../Components/apply_to_driver/launching";
import Howdoeswork from "../../../Components/apply_to_driver/howdoeswork";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import Image2Footer from "../../../Layout/Footer/image2Footer";

function applyToDriver() {
  return (
    <>
      <DriverBanner />
      <FreetoWorkSection />
      <LaunchingSection />
      <Howdoeswork />
      <FAQs faqsList={faqs.apply_to_driver} />
      <Image2Footer />
    </>
  );
}

export default applyToDriver;
