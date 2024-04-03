import React from "react";
import HeaderCategory from "../BrandingPage/HeaderCategory";
import Contact from "../HomePage/Contact";
import Footer from "../HomePage/Footer";
import Copyright from "../HomePage/Copyright";
import CinemetographyCom from "./CinemetographyCom";

const CinemetographyPage = () => {
  return (
    <>
      <HeaderCategory />
      <CinemetographyCom />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default CinemetographyPage;
