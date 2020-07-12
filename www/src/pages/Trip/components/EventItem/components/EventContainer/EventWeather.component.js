import React, { useState, useEffect } from "react";
import styles from "./EventContainer.module.css";
import * as weatherService from "../../../../../../services/weather.service";

const EventWeather = ({ event }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getWeather = async () => {
      const { location } = event;
      if (location) {
        let response = await weatherService.getWeather({
          city: `${location.city},${location.state}`,
          startTimestamp: event.startTimestamp,
          endTimestamp: event.endTimestamp,
        });
        console.log(location);
        console.log(response);
        setWeatherData(response);
      }
    };
    getWeather();
  }, [event]);

  if (weatherData) {
    return <>{event.location && event.location.city}</>;
  } else {
    return null;
  }
};

export default EventWeather;
