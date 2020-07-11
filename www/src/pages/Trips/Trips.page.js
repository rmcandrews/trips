import React from "react";
import styles from "./Trips.module.css";
import data from "../../data";

import TripCard from "./components/TripCard";

const TripsPage = () => {
  console.log(data.trips);
  const tripItems = data.trips.map((trip) => (
    <TripCard trip={trip} key={trip.id} />
  ));
  return <ul className={styles.tripList}>{tripItems}</ul>;
};

export default TripsPage;
