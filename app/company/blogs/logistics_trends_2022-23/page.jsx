"use client";
import React from "react";
import Section1 from "../../../../Components/blogs/logistics_trends_2022-23/Section1"
import Section2 from "../../../../Components/blogs/logistics_trends_2022-23/Section2"
import Section3 from "../../../../Components/blogs/logistics_trends_2022-23/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

function LogisticsTrends() {
  return (
    <>
      <div className="logistics_trends">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default LogisticsTrends;