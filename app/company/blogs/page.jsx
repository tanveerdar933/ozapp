"use client";
import React from "react";
import Section1 from "../../../Components/blogs/blogs_list_section1";
import Section2 from "../../../Components/blogs/blogs_list_section2";
import BrownFooter from "../../../Layout/Footer/brownFooter";

function blogsList() {
  return (
    <>
      <Section1 />
      <Section2 />
      <BrownFooter />
    </>
  );
}

export default blogsList;
