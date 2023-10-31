"use client";
import React from "react";
import Section1 from "../../../../Components/blogs/unlocking_the_power_of_logistics/Section1"
import Section2 from "../../../../Components/blogs/unlocking_the_power_of_logistics/Section2"
import Section3 from "../../../../Components/blogs/unlocking_the_power_of_logistics/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

function UnlockingThePowerOfLogistics() {
  return (
    <>
      <div className="unlocking_the_power_of_logistics">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default UnlockingThePowerOfLogistics;