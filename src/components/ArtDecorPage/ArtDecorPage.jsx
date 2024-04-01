import React from "react";
import HeaderCategory from "../BrandingPage/HeaderCategory";
import Contact from "../HomePage/Contact";
import Footer from "../HomePage/Footer";
import Copyright from "../HomePage/Copyright";
import ArtDecorCom from "./ArtDecorCom";

const ArtDecorPage = () => {
  return (
    <>
      <HeaderCategory />
      <ArtDecorCom />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default ArtDecorPage;
