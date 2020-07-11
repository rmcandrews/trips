import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const typeIcons = {
  FLIGHT: {
    name: "plane",
    rotation: 270,
    secondary: {
      name: "plane-departure",
    },
  },
  "RENTAL CAR": {
    name: "car",
    fontSize: "18px",
  },
  DINING: {
    name: "utensils",
  },
  LODGING: {
    name: "bed",
  },
};

const EventIcon = ({ type, subType, secondary }) => {
  let typeIcon;
  if (subType && typeIcons[subType]) typeIcon = typeIcons[subType];
  else typeIcon = typeIcons[type];
  if (typeIcon.secondary) typeIcon = typeIcon.secondary;
  return (
    <FontAwesomeIcon
      icon={typeIcon.name}
      rotation={typeIcon.rotation}
      style={{ fontSize: typeIcon.fontSize }}
    />
  );
};

export default EventIcon;
