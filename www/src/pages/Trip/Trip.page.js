import React from "react";
import styles from "./Trip.module.css";
import data from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import TripHeader from "./components/TripHeader";

const TripPage = () => {
  let history = useHistory();
  let { id } = useParams();
  const trip = data.trips.find((trip) => trip.id === id);

  console.log(trip);

  return (
    <>
      <button onClick={() => history.goBack()} className={styles.backButton}>
        <FontAwesomeIcon icon="arrow-left" />
      </button>
      <TripHeader trip={trip} />
      <div style={{ height: 1000 }}></div>
    </>
  );
};

export default TripPage;
