import React from "react";
import styles from "./TripCard.module.css";
import { Link } from "react-router-dom";
import EventIcon from "../../../../components/EventIcon";
import { getDayName, getMonthName } from "../../../../utils/date.utils";

const SummaryIcon = ({ type, number }) => {
  if (number === 0) return null;
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.summaryIcon}>
        <EventIcon type={type} />
      </div>
      <div className={styles.summaryIconNumber}>{number}</div>
    </div>
  );
};

const EventIcons = ({ events }) => {
  let numFlights = 0,
    numRentalCars = 0,
    numDining = 0,
    numLodging = 0;
  events.forEach((event) => {
    if (event.subType === "FLIGHT") numFlights++;
    else if (event.subType === "RENTAL CAR") numRentalCars++;
    else if (event.type === "DINING") numDining++;
    else if (event.type === "LODGING") numLodging++;
  });
  return (
    <>
      <SummaryIcon type="FLIGHT" number={numFlights} />
      <SummaryIcon type="RENTAL CAR" number={numRentalCars} />
      <SummaryIcon type="LODGING" number={numLodging} />
      <SummaryIcon type="DINING" number={numDining} />
    </>
  );
};

const TripCard = ({ trip }) => {
  const startDate = new Date(trip.startTimestamp * 1000);
  const endDate = new Date(trip.endTimestamp * 1000);
  return (
    <li>
      <Link to={`/${trip.id}`} style={{ textDecoration: "none" }}>
        <div
          className={styles.container}
          style={{ backgroundImage: `url("${trip.image}")` }}
        >
          <div className={styles.header}>
            <EventIcons events={trip.events} />
          </div>
          <div className={styles.main}>
            <div className={styles.dates}>
              {getDayName(startDate)}, {getMonthName(startDate)}{" "}
              {startDate.getDate()} – {getDayName(endDate)},{" "}
              {getMonthName(endDate)} {endDate.getDate()}
            </div>
            <div className={styles.title}>{trip.title}</div>
            <div className={styles.detailsButton}>View Details</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TripCard;
