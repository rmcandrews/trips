import React, { useEffect, useState } from "react";
import styles from "./TripWeather.module.css";
import moment from "moment-timezone";
import { getWeather } from "../../../../services/weather.service";

const getDatesAtLocation = (event) => {
  let datesAtLocation = [];
  const eventStartMoment = moment(event.startTimestamp * 1000).tz(
    event.timezone
  );
  let currentDate = moment(eventStartMoment);
  let stopDate = moment(event.endTimestamp * 1000)
    .tz(event.timezone)
    .add(1, "days");
  while (currentDate <= stopDate) {
    datesAtLocation.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return datesAtLocation;
};

const formatDate = (obj) => {
  return moment(obj.timestamp * 1000)
    .tz(obj.timezone)
    .format("YYYY-MM-DD");
};

const getDateLocations = (trip) => {
  let dateLocations = {};
  trip.events.forEach((event) => {
    if (event.subType === "FLIGHT") {
      event.segments.forEach((segment) => {
        const { departure, arrival } = segment;
        const departureDate = formatDate(departure);
        const departureCity = `${departure.city},${departure.state}`;
        const arrivalDate = formatDate(arrival);
        const arrivalCity = `${arrival.city},${arrival.state}`;
        if (dateLocations[departureDate])
          pushIfNotExist(dateLocations[departureDate], departureCity);
        else dateLocations[departureDate] = [departureCity];
        if (dateLocations[arrivalDate])
          pushIfNotExist(dateLocations[arrivalDate], arrivalCity);
        else dateLocations[arrivalDate] = [arrivalCity];
      });
    } else if (event.location) {
      const eventCity = `${event.location.city},${event.location.state}`;
      if (event.endTimestamp) {
        const datesAtLocation = getDatesAtLocation(event);
        datesAtLocation.forEach((dateAtLocation) => {
          if (dateLocations[dateAtLocation])
            pushIfNotExist(dateLocations[dateAtLocation], eventCity);
          else dateLocations[dateAtLocation] = [eventCity];
        });
      } else {
        const eventDate = moment(event.startTimestamp * 1000)
          .tz(event.timezone)
          .format("YYYY-MM-DD");
        if (dateLocations[eventDate])
          pushIfNotExist(dateLocations[eventDate], eventCity);
        else dateLocations[eventDate] = [eventCity];
      }
    }
  });
  return dateLocations;
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
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    async function fetchWeather() {
      const tripLocationsInRange = getTripLocationsWithinRange(trip);
      const cityWeatherPromises = [];
      tripLocationsInRange.forEach((tripLocationInRange) => {
        cityWeatherPromises.push(getWeather(tripLocationInRange));
      });
      const citiesWeather = await Promise.all(cityWeatherPromises);
      const dateLocations = getDateLocations(trip);
      const dateForecasts = [];
      for (const [date, locations] of Object.entries(dateLocations)) {
        let dateForecast = { date, locations: [] };
        locations.forEach((location) => {
          const city = location.split(",")[0];
          const state = location.split(",")[1];
          let weather;
          citiesWeather.forEach((cityWeather) => {
            if (
              cityWeather &&
              cityWeather.city_name === city &&
              cityWeather.state_code === state
            ) {
              cityWeather.data.forEach((dateForecast) => {
                if (dateForecast.valid_date === date) {
                  weather = dateForecast;
                }
              });
            }
          });
          dateForecast.locations.push({
            location: {
              city,
              state,
            },
            weather,
          });
        });
        dateForecasts.push(dateForecast);
      }
      setForecast(dateForecasts);
      setIsLoading(false);
    }
    if (isOpen) fetchWeather();
  }, [trip, isOpen]);

  if (!isOpen) return null;

  let forecastDayElements;
  if (forecast) {
    forecastDayElements = forecast.map((day) => {
      let locationForecastElements = day.locations.map((locationForecast) => {
        const { location, weather } = locationForecast;
        console.log(weather);
        return (
          <div key={location.city} style={{ paddingBottom: "0.5rem 0" }}>
            <div>{`${location.city}, ${location.state}`}</div>
            <div>
              {weather ? (
                <>
                  <img
                    alt={weather.weather.description}
                    src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
                    width={40}
                  />
                  <div style={{ display: "inline-block", paddingLeft: "1rem" }}>
                    <div style={{ color: "#d5202a" }}>
                      {Math.ceil(weather.high_temp)}
                    </div>
                    <div style={{ color: "blue" }}>
                      {Math.ceil(weather.low_temp)}
                    </div>
                  </div>
                </>
              ) : (
                "NOT AVAILABLE"
              )}
            </div>
          </div>
        );
      });
      return (
        <div key={day.date} style={{ paddingBottom: "1rem" }}>
          <div style={{ fontSize: "1.25rem" }}>
            {moment(day.date).format("ddd, MMM DD")}
          </div>
          {locationForecastElements}
        </div>
      );
    });
  }

  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : undefined}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onCloseClick}>
          &times;
        </span>
        <div
          style={{
            textAlign: "center",
            paddingTop: "1rem",
            fontSize: "1.5rem",
          }}
        >
          Weather Report
        </div>
        {isLoading && "LOADING"}
        {!isLoading && forecastDayElements}
      </div>
    </div>
  );
};

export default TripWeatherPage;
