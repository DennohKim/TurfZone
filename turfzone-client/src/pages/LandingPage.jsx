import React from "react";
import Partners from "../components/FeaturedPlayground/Partners";
import Playgrounds from "../components/FeaturedPlayground/Playgrounds";

const LandingPage = () => {
  return (
    <div>
      <section className="h-screen">
        {/* Your code goes here - Hero Section */}
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
      <section className="h-screen">
        {/* Your Code Goes here - Footer*/}
      </section>
    </div>
  );
};

export default LandingPage;
