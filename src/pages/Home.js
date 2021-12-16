import React from "react";
import Contact from "../components/Home/Contact/Contact";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Testimonials from "../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
