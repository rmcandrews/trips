import React from "react";
import styles from "./EventLogo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import enterprise from "./logos/enterprise.png";

const typeIcons = {
  FLIGHT: {
    name: "plane",
    rotation: 270,
    backgroundColor: "#307ACF",
  },
  "RENTAL CAR": {
    name: "car",
    backgroundColor: "#188038",
  },
  DINING: {
    name: "utensils",
    backgroundColor: "#CF307A",
  },
  LODGING: {
    name: "bed",
    backgroundColor: "#8430CE",
  },
  ACTIVITY: {
    name: "star",
    backgroundColor: "#F29A00",
  },
  MAP: {
    name: "map-marked-alt",
    backgroundColor: "#03A9F4",
  },
  GOLF: {
    name: "golf-ball",
    backgroundColor: "#188038",
  },
  HIKE: {
    name: "hiking",
    backgroundColor: "#188038",
    marginLeft: -1,
  },
};

const companyLogos = {
  "American Airlines":
    "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
  "Alaska Airlines":
    "https://www.gstatic.com/flights/airline_logos/70px/AS.png",
  National:
    "https://lh3.googleusercontent.com/6gL89Z-xGEnxneYGUF-QFcecMo-_nhV0idlMcTrfEUVDe_qYA1T26hzGcbSWsuxlHO4",
  Enterprise: enterprise,
};

const EventLogo = ({ event }) => {
  let typeIcon;
  let companyLogoUrl = event.company ? companyLogos[event.company] : undefined;

  if (companyLogoUrl) {
    return (
      <img
        alt={`${event.company} logo`}
        height={24}
        width={24}
        src={companyLogoUrl}
      />
    );
  } else {
    if (event.subType && typeIcons[event.subType])
      typeIcon = typeIcons[event.subType];
    else typeIcon = typeIcons[event.type];
    return (
      <div
        className={styles.iconContainer}
        style={{
          backgroundColor: typeIcon.backgroundColor,
          marginLeft: typeIcon.marginLeft,
        }}
      >
        <FontAwesomeIcon icon={typeIcon.name} rotation={typeIcon.rotation} />
      </div>
    );
  }
};

export default EventLogo;
