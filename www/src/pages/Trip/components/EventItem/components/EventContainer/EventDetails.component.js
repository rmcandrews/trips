import React from "react";
import styles from "./EventContainer.module.css";
import moment from "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FightDetails = ({ event }) => {
  const flightItems = event.segments.map((segment) => {
    let { departure, arrival } = segment;
    return (
      <div>
        <div className={styles.flightSegment}>
          <span className={styles.airportCode}>{departure.airportCode}</span>
          <span
            style={{ color: "#5f6368", fontSize: 12, margin: "0 4px 0 8px" }}
          >
            <FontAwesomeIcon icon="plane" />
          </span>
          <span
            style={{ backgroundColor: "#9aa0a6", flex: "auto", height: "2px" }}
          ></span>
          <span
            style={{
              backgroundColor: "#9aa0a6",
              borderRadius: "50%",
              height: 6,
              marginRight: 8,
              width: 6,
            }}
          ></span>
          <span className={styles.airportCode}>{arrival.airportCode}</span>
        </div>
        <div className={styles.detailsRow}>
          <div className={styles.detail}>
            <div className={styles.detailTitle}>Departure</div>
            <div className={styles.detailDetail}>
              {moment(departure.timestamp * 1000)
                .tz(departure.timezone)
                .format("h:mm A")}
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detailTitle}>Arrival</div>
            <div className={styles.detailDetail}>
              {moment(arrival.timestamp * 1000)
                .tz(arrival.timezone)
                .format("h:mm A")}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsRow}>
        <div className={styles.detail}>
          <div className={styles.detailTitle}>Confirmation Code</div>
          <div className={styles.detailDetail}>{event.confirmationCode}</div>
        </div>
      </div>
      {flightItems}
    </div>
  );
};

const RentalCarDetails = ({ event }) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsRow}>
        <div className={styles.detail}>
          <div className={styles.detailTitle}>Pick up time</div>
          <div className={styles.detailDetail}>
            {moment(event.pickUp.timestamp * 1000)
              .tz(event.pickUp.timezone)
              .format("h:mm A")}
          </div>
        </div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detail}>
          <div className={styles.detailTitle}>Confirmation Code</div>
          <div className={styles.detailDetail}>{event.confirmationCode}</div>
        </div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detail}>
          <div className={styles.detailTitle}>Pickup loaction</div>
          <div className={styles.detailDetail}>{event.pickUp.location}</div>
        </div>
      </div>
    </div>
  );
};

const buildDetails = (event) => {
  switch (event.type) {
    case "MAP":
      return (
        <div className={styles.iframeContainer}>
          <iframe title={event.company} src={event.url}></iframe>
        </div>
      );
    case "TRANSPORTATION":
      switch (event.subType) {
        case "FLIGHT":
          return <FightDetails event={event} />;
        case "RENTAL CAR":
          return <RentalCarDetails event={event} />;
        default:
          return event.type;
      }
    case "LODGING":
      return "LODGING IN PROGRESS";
    case "ACTIVITY":
      switch (event.subType) {
        case "GOLF":
          return "GOLF IN PROGRESS";
        default:
          return "ACTIVITY IN PROGRESS";
      }
    default:
      return "DEFAULT IN PROGRESS";
  }
};

const EventDetails = ({ event, isOpen }) => {
  if (!isOpen) return null;
  return buildDetails(event);
};

export default EventDetails;
