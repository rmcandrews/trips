// export const getCoordinates = async (city) => {
//   const encodedCity = encodeURI(city);
//   const coordinatesCacheKey = `coordinates-${city}`;
//   const coordinatesCache = localStorage.getItem(coordinatesCacheKey);
//   if (coordinatesCache) {
//     return Promise.resolve(JSON.parse(coordinatesCache));
//   }
//   const response = await fetch(
//     "http://open.mapquestapi.com/geocoding/v1/address?key=Ff15Zynwd6PYrra5mnNfGmRW4rb2ztfa&location=" +
//       encodedCity,
//     {
//       method: "GET",
//     }
//   );
//   const data = await response.json();
//   localStorage.setItem(
//     coordinatesCacheKey,
//     JSON.stringify(data.results[0].locations[0].latLng)
//   );
//   return data;
// };

export const getWeather = async ({ city, startTimestamp, endTimestamp }) => {
  const now = new Date().getTime() / 1000;
  if (now > endTimestamp || now + 15 * 86400 < startTimestamp) {
    return { isOutOfRange: true };
  }
  const day = Math.floor(now / 86400);
  const weatherCacheKey = `weatherbit-${city}-${day}`;
  const weatherCache = localStorage.getItem(weatherCacheKey);
  if (weatherCache) {
    return Promise.resolve(JSON.parse(weatherCache));
  }
  const encodedCity = encodeURI(city);
  try {
    const response = await fetch(
      "http://api.weatherbit.io/v2.0/forecast/daily?key=2844bb865723467abf3890d1f98c2b12&units=I&city=" +
        encodedCity,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    localStorage.setItem(weatherCacheKey, JSON.stringify(data));
    return data;
  } catch (err) {
    console.error(err);
  }
};
