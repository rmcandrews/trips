import React, { useState } from "react";
import styles from "./Trip.module.css";
import data from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import moment from "moment-timezone";

import TripHeader from "./components/TripHeader";
import EventItem from "./components/EventItem/EventItem.component";
import TripWeatherPage from "./pages/TripWeather";

const TripPage = () => {
  let [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
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
      <TripHeader
        trip={trip}
        onWeatherClick={() => setIsWeatherModalOpen(true)}
      />
      <ul className={styles.eventList}>{eventItems}</ul>
      <TripWeatherPage
        isOpen={isWeatherModalOpen}
        onCloseClick={() => setIsWeatherModalOpen(false)}
        trip={trip}
      />
    </>
  );
};

export default TripPage;
