import React from "react";
import styles from "./EventContainer.module.css";
import moment from "moment-timezone";

const buildTitle = (event) => {
  let title = "";
  let details = "";
  switch (event.type) {
    case "TRANSPORTATION":
      switch (event.subType) {
        case "FLIGHT":
          event.segments.forEach((segment, i) => {
            title += `${segment.departure.city} to `;
            if (i === event.segments.length - 1) {
              title += segment.arrival.city;
            }
          });
          const departure = event.segments[0].departure;
          const departureMoment = moment(departure.timestamp * 1000);
          const departureOffset = moment.tz
            .zone(departure.timezone)
            .utcOffset(departure.timestamp * 1000);
          const arrival = event.segments[event.segments.length - 1].arrival;
          const arrivalMoment = moment(arrival.timestamp * 1000);
          const arrivalOffset = moment.tz
            .zone(arrival.timezone)
            .utcOffset(arrival.timestamp * 1000);
          const offset = (departureOffset - arrivalOffset) / 60;
          details = `${departureMoment
            .tz(departure.timezone)
            .format("h:mmA")} – ${arrivalMoment
            .tz(arrival.timezone)
            .format("h:mmA")}`;
          if (offset !== 0) {
            const formattedOffeset = offset > 0 ? `+${offset}` : offset;
            details += ` (${formattedOffeset}hr)`;
          }
          break;
        case "RENTAL CAR":
          title = `Car rental from ${event.company}`;
          if (event.carType) details = `Car type: ${event.carType}`;
          break;
        default:
          break;
      }
      break;
    case "LODGING":
      title = event.company;
      const start = moment(event.startTimestamp * 1000);
      const end = moment(event.endTimestamp * 1000);
      const duration = moment.duration(start.diff(end));
      const days = Math.floor(duration.asDays() * -1 + 1);
      details = days + " night";
      if (days > 1) details += "s";
      break;
    case "ACTIVITY":
      switch (event.subType) {
        case "GOLF":
          title = event.company;
          details =
            "Tee time: " +
            moment(event.startTimestamp * 1000)
              .tz(event.timezone)
              .format("h:mm A");
          break;
        default:
          title = event.company;
          details = moment(event.startTimestamp * 1000)
            .tz(event.timezone)
            .format("h:mm A");
      }
      break;
    default:
      title = event.company;
      break;
  }
  return { title, details };
};

const EventTitle = ({ event, isOpen }) => {
  const title = buildTitle(event);
  return (
    <div className={styles.eventTitleContainer}>
      <div
        className={`${styles.eventTitleMain} ${isOpen ? styles.isOpen : ""}`}
      >
        {title.title}
      </div>
      {title.details && <div style={{ height: "0.25rem" }} />}
      <div className={`${styles.eventTitleDetails}`}>{title.details}</div>
    </div>
  );
};

export default EventTitle;
