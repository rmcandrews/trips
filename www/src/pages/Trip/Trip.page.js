import React from "react";
import styles from "./Trip.module.css";
import data from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import TripHeader from "./components/TripHeader";
import EventItem from "./components/EventItem/EventItem.component";

const TripPage = () => {
  let history = useHistory();
  let { id } = useParams();
  const trip = data.trips.find((trip) => trip.id === id);
  const eventItems = trip.events.map((event) => (
    <EventItem event={event} key={event.id} />
  ));

  return (
    <>
      <button onClick={() => history.goBack()} className={styles.backButton}>
        <FontAwesomeIcon icon="arrow-left" />
      </button>
      <TripHeader trip={trip} />
      <ul className={styles.eventList}>{eventItems}</ul>
    </>
  );
};

export default TripPage;
