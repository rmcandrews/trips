import React from "react";
import { RenderPropSticky } from "react-sticky-el";
import styles from "./TripHeader.module.css";
import { getDayName, getMonthName } from "../../../../utils/date.utils";

const TripHeader = ({ trip }) => {
  const startDate = new Date(trip.startTimestamp * 1000);
  const endDate = new Date(trip.endTimestamp * 1000);
  return (
    <RenderPropSticky topOffset={190}>
      {({ isFixed, wrapperStyles, wrapperRef, holderStyles, holderRef }) => (
        <div ref={holderRef} style={holderStyles}>
          <div
            style={
              isFixed ? { ...wrapperStyles, marginTop: -190 } : wrapperStyles
            }
            ref={wrapperRef}
          >
            <header
              className={styles.container}
              style={{ backgroundImage: `url("${trip.image}")` }}
            >
              <div className={styles.main}>
                <div className={styles.dates}>
                  {getDayName(startDate)}, {getMonthName(startDate)}{" "}
                  {startDate.getDate()} – {getDayName(endDate)},{" "}
                  {getMonthName(endDate)} {endDate.getDate()}
                </div>
                <div className={styles.title}>{trip.title}</div>
              </div>
              <div
                className={styles.scrolledTitleContainer}
                style={{ opacity: isFixed ? 1 : 0 }}
              >
                <div className={styles.date}>
                  {getMonthName(startDate)} {startDate.getDate()} –{" "}
                  {getMonthName(endDate)} {endDate.getDate()}
                </div>
                <div className={styles.title}>{trip.title}</div>
              </div>
            </header>
          </div>
        </div>
      )}
    </RenderPropSticky>
  );
};

export default TripHeader;
