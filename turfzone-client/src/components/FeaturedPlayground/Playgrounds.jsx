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
    <div>
      <h2 className="pt-10 text-3xl font-extrabold text-center">
        Featured <span>Playgrounds</span>
      </h2>
      <div className="pt-20 mx-12 grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{playgroundList}</div>
    </div>
  );
};

export default Playgrounds;
