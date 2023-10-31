"use client";
import React from "react";
import Section1 from "../../../Components/contactUs/section1";
import Section2 from "../../../Components/contactUs/section2";
import WhiteFooter from "../../../Layout/Footer/whiteFooter";

function contactUs() {
  return (
    <>
      <div className="contact_us">
        <Section1 />
        <Section2 />
        <WhiteFooter />
      </div>
    </>
  );
}

export default contactUs;
