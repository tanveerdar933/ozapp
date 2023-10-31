"use client";
import React from "react";
import Section1 from "../../../../Components/blogs/simplyfy_group_bookings_with_oz_ove/Section1"
import Section2 from "../../../../Components/blogs/simplyfy_group_bookings_with_oz_ove/Section2"
import Section3 from "../../../../Components/blogs/simplyfy_group_bookings_with_oz_ove/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

function SimplyfyGroupBookingsWithOzOve() {
  return (
    <>
      <div className="simplyfy_group_bookings_with_oz_ove">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default SimplyfyGroupBookingsWithOzOve;