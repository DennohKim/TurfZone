import React from "react";
import { turfInfo } from "../../data/PlaygroundsData";
import PlaygroundCard from "./PlaygroundCard";

const Playgrounds = () => {
  const playgroundList = turfInfo.map((turf) => {
    return (
      <PlaygroundCard
        key={turf.turf_name}
        image={turf.image}
        turfName={turf.turf_name}
        location={turf.location}
        rates={turf.rates}
        description={turf.description}
      />
    );
  });
  return (
    <div className="w-full">
      <h2 className="pt-4 text-3xl font-extrabold text-center">
        Featured <span className="text-primary-color">Playgrounds</span>
      </h2>
      <div className="pt-20 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{playgroundList}</div>
    </div>
  );
};

export default Playgrounds;
