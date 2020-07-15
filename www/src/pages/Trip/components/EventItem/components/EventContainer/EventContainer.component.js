import React, { useState } from "react";
import styles from "./EventContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventLogo from "../../../../../../components/EventLogo";
import EventTitle from "./EventTitle.component";
import EventDetails from "./EventDetails.component";
import moment from "moment-timezone";

const dateFormat = "ddd, MMM D";

const EventTime = ({ event }) => {
  const startMoment = moment(event.startTimestamp * 1000).tz(event.timezone);
  const startString = startMoment.format(dateFormat);
  const endMoment = event.endTimestamp
    ? moment(event.endTimestamp * 1000).tz(event.timezone)
    : undefined;
  const endString = endMoment
    ? ` - ${endMoment.format(dateFormat)}`
    : undefined;
  return (
    <div className={styles.dates}>{`${startString}${
      endString ? endString : ""
    }`}</div>
  );
};

const EventContainer = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.overviewContainer}>
      <EventTime event={event} />
      <div
        className={styles.eventCard}
        role="button"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <div className={styles.eventHeader}>
          <span style={{ display: "block", cursor: "pointer" }}>
            <div className={styles.eventCardSummary}>
              <div className={styles.logo}>
                <EventLogo event={event} />
              </div>
              <EventTitle event={event} isOpen={isOpen} />
            </div>
          </span>
          <span className={styles.eventCardArrow}>
            <FontAwesomeIcon icon={isOpen ? "chevron-up" : "chevron-down"} />
          </span>
        </div>
        <div
          className={`${styles.eventDetails} ${isOpen ? styles.visible : ""}`}
        >
          <EventDetails event={event} />
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
