import React from "react";
import HeaderBranding from "./HeaderBranding";
import BrandingCom from "./BrandingCom";
import Contact from "../HomePage/Contact";
import Footer from "../HomePage/Footer";
import Copyright from "../HomePage/Copyright";

const Branding = () => {
  return (
    <>
      <HeaderBranding />
      <BrandingCom />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default Branding;
