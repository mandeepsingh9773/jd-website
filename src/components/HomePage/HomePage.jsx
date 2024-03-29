import React from "react";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import ProfileSection from "./ProfileSection";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
      <ProfileSection />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
