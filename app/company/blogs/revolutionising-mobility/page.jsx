"use client";
import React from "react";
import Section1 from "../../../../Components/blogs/revolutionising-mobility/Section1"
import Section2 from "../../../../Components/blogs/revolutionising-mobility/Section2"
import Section3 from "../../../../Components/blogs/revolutionising-mobility/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

function RevolutionisingMobility() {
  return (
    <>
      <div className="revolutionizing-mobility">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default RevolutionisingMobility;