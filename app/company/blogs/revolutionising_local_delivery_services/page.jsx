"use client";
import React from "react";
import Section1 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section1"
import Section2 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section2"
import Section3 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

function RevolutionisingLocalDeliveryServices() {
  return (
    <>
      <div className="revolutionising_local_delivery_services">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default RevolutionisingLocalDeliveryServices;