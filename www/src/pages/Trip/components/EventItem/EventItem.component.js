import React from "react";
import styles from "./EventItem.module.css";
import EventIcon from "../../../../components/EventIcon";
import EventContainer from "./components/EventContainer";

const EventItem = ({ event }) => {
  return (
    <li className={styles.eventItem}>
      <div className={styles.timeline}>
        <div className={styles.icon}>
          <EventIcon type={event.type} subType={event.subType} secondary />
        </div>
        <div className={styles.line}></div>
      </div>
      <EventContainer event={event} />
    </li>
  );
};

export default EventItem;
