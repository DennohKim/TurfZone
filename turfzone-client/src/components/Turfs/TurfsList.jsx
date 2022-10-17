import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import TurfsCard from "./TurfsCard";

const TurfsList = () => {

  const { turfs, setTurfs, user } = useStateContext()

  
  const TurfsList = turfs.map((turf) => {
    return (
      <TurfsCard
        key={turf.id}
        userId={user.id}
        turfId={turf.id}
        image={turf.image_url}
        name={turf.name}
        location={turf.location}
        rates={turf.rates}
        description={turf.description}
        manager_email={turf.manager_email}
        manager_number={turf.manager_number}
        manager_name={turf.manager_name}
      />
    );
  });

  return (
    <div className="w-full">
      <h2 className="pt-4 md:text-xl lg:text-2xl font-extrabold ">
         <span className="text-primary-color"> All Turfs</span>
      </h2>
      <div className="pt-10 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{TurfsList}</div>
    </div>
  );
};

export default TurfsList;
