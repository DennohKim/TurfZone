import React from "react";
import Partners from "../components/FeaturedPlayground/Partners";
import Playgrounds from "../components/FeaturedPlayground/Playgrounds";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <section className="h-screen bg-[url('https://i.ibb.co/sg756x4/bg-small.png')] md:bg-[url('https://i.ibb.co/nLkSzPk/bg-medium.png')] lg:bg-[url('https://i.ibb.co/j64rJSM/BG.png')] bg-no-repeat bg-cover">
        {/* Your code goes here - Hero Section */}
        <HeroSection />
      </section>

      <section className="h-screen">
        <div >
          <Partners />
          <Playgrounds/>
        </div>
      </section>

      <section className="h-screen">
        {/* Your code goes here - Why TurfZone */}
      </section>
      <section className="h-screen">
        {/* Your code goes here - Testimonials */}
      </section>
      <section className="">
        {/* Your Code Goes here - Footer*/}
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
