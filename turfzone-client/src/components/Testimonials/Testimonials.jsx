import React from "react";
import { testimonialInfo } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const TestimonialList = testimonialInfo.map((testimonial, index) => {
    return (
      <TestimonialCard
        key={index}
        image={testimonial.image}
        quote={testimonial.quote}
        name={testimonial.name}
        
      />
    );
  });
  return (
    <div className="w-full">
      <h2 className="pt-4 text-3xl font-extrabold text-center text-primary-color">
      Loved by footballers <span className="text-black">across the country</span>
      </h2>
      <div className="pt-20 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{TestimonialList}</div>
    </div>
  );
};

export default Testimonials;
