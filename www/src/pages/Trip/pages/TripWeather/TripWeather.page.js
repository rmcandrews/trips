import React from "react";
import styles from "./TripWeather.module.css";
import moment from "moment-timezone";

const getPossibleForecastDates = (trip) => {
  let possibleForecastDates = [];
  const nowMoment = moment();
  const tripStartMoment = moment(trip.startTimestamp * 1000);
  let forecastStartMoment = tripStartMoment;
  if (nowMoment >= tripStartMoment) {
    forecastStartMoment = nowMoment;
  }
  let currentDate = moment(forecastStartMoment);
  let stopDate = moment(trip.endTimestamp * 1000);
  while (currentDate <= stopDate) {
    possibleForecastDates.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return possibleForecastDates;
};

const pushIfNotExist = (array, item) => {
  if (array.indexOf(item) === -1) array.push(item);
};

const getTripLocationsWithinRange = (trip) => {
  let tripLocations = [];
  trip.events.forEach((event) => {
    const isWithinRange = moment()
      .add(15, "d")
      .isAfter(moment(event.startTimestamp * 1000));
    const isStillOccuring =
      (event.endTimestamp &&
        moment(event.endTimestamp * 1000).isAfter(moment())) ||
      moment(event.startTimestamp * 1000)
        .add(16, "h")
        .isAfter(moment());
    const isInFuture = moment(event.startTimestamp * 1000).isAfter(moment());
    if (isWithinRange && (isStillOccuring || isInFuture)) {
      switch (event.type) {
        case "LODGING":
          pushIfNotExist(
            tripLocations,
            event.location.city + "," + event.location.state
          );
          break;
        default:
          if (event.location) {
            pushIfNotExist(
              tripLocations,
              event.location.city + "," + event.location.state
            );
          }
      }
      switch (event.subType) {
        case "FLIGHT":
          event.segments.forEach((segment) => {
            pushIfNotExist(
              tripLocations,
              segment.departure.city + "," + segment.departure.state
            );
            pushIfNotExist(
              tripLocations,
              segment.arrival.city + "," + segment.arrival.state
            );
          });
          break;
        default:
          break;
      }
    }
  });
  return tripLocations;
};

const TripWeatherPage = ({ trip, onCloseClick, isOpen }) => {
  if (!isOpen) return null;
  const possibleForecastDates = getPossibleForecastDates(trip);
  const tripLocations = getTripLocationsWithinRange(trip);
  console.log(tripLocations);
  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : undefined}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onCloseClick}>
          &times;
        </span>
        <div
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "1.5rem" }}
        >
          Weather Report
        </div>
      </div>
    </div>
  );
};

export default TripWeatherPage;
