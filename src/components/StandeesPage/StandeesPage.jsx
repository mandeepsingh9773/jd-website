import React from "react";
import HeaderCategory from "../BrandingPage/HeaderCategory";
import Contact from "../HomePage/Contact";
import Footer from "../HomePage/Footer";
import Copyright from "../HomePage/Copyright";
import StandeesCom from "./StandeesCom";

const StandeesPage = () => {
  return (
    <>
      <HeaderCategory />
      <StandeesCom />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default StandeesPage;
