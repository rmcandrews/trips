export const EVENT_TYPES = {
  TRANSPORTATION: "TRANSPORTATION",
  LODGING: "LODGING",
  DINING: "DINING",
  ACTIVITY: "ACTIVITY",
};

export const EVENT_SUBTYPES = {
  FLIGHT: "FLIGHT",
  TRAIN: "TRAIN",
  BUS: "BUS",
  RENTAL_CAR: "RENTAL CAR",
  HOTEL: "HOTEL",
  AIRBNB: "AIRBNB",
  CAMPGROUND: "CAMP GROUND",
  RENTAL: "RENTAL",
  RESTAURANT: "RESTAURANT",
};

export default {
  trips: [
    {
      title: "Yellowstone National Park & Oregon",
      image:
        "https://www.lodgeatbigsky.com/resourcefiles/attractionsmallimages/yellowstone-national-park-montana.jpg",
      id: "0",
      startTimestamp: 1595430300,
      endTimestamp: 1596492300,
      events: [
        {
          id: "0",
          type: EVENT_TYPES.TRANSPORTATION,
          subType: EVENT_SUBTYPES.FLIGHT,
          company: "American Airlines",
          confirmationCode: "YHHAJO",
          startTimestamp: 1595430300,
          timezone: "America/Chicago",
          segments: [
            {
              flightNumber: "2297",
              departure: {
                timestamp: 1595430300,
                city: "Chicago",
                state: "IL",
                airportCode: "ORD",
                timezone: "America/Chicago",
              },
              arrival: {
                timestamp: 1595442600,
                city: "Bozeman",
                state: "MT",
                airportCode: "BZN",
                timezone: "America/Denver",
              },
            },
          ],
        },
        {
          id: "1",
          type: EVENT_TYPES.TRANSPORTATION,
          subType: EVENT_SUBTYPES.RENTAL_CAR,
          company: "National",
          startTimestamp: 1595444400,
          timezone: "America/Denver",
          endTimestamp: 1595804400,
          carType: "Full Size Car",
          pickUp: {
            timestamp: 1595444400,
            location: "BZN NATIONAL (BZN)",
            timezone: "America/Denver",
          },
          dropOff: {
            timestamp: 1595804400,
            location: "BZN NATIONAL (BZN)",
            timezone: "America/Denver",
          },
          confirmationCode: "1067331609",
        },
        {
          id: "2",
          type: EVENT_TYPES.LODGING,
          subType: EVENT_SUBTYPES.HOTEL,
          company: "Wonderland Cafe & Lodge",
          startTimestamp: 1595451600,
          timezone: "America/Denver",
          endTimestamp: 1595692800,
          confirmationCode: "LH20052817970141",
        },
        {
          id: "3",
          type: EVENT_TYPES.LODGING,
          subType: EVENT_SUBTYPES.HOTEL,
          company: "Under Canvas Yellowstone",
          startTimestamp: 1595714400,
          timezone: "America/Denver",
          endTimestamp: 1595779200,
          confirmationCode: "RMDLU3QUH",
        },
        {
          id: "4",
          type: EVENT_TYPES.TRANSPORTATION,
          subType: EVENT_SUBTYPES.FLIGHT,
          company: "Alaska Airlines",
          confirmationCode: "LKEWXW",
          startTimestamp: 1595805600,
          timezone: "America/Denver",
          segments: [
            {
              flightNumber: "2421",
              departure: {
                timestamp: 1595805600,
                city: "Bozeman",
                state: "MT",
                airportCode: "BZN",
                timezone: "America/Denver",
              },
              arrival: {
                timestamp: 1595812020,
                city: "Seattle",
                state: "WA",
                airportCode: "SEA",
                timezone: "America/Los_Angeles",
              },
            },
            {
              flightNumber: "2708",
              departure: {
                timestamp: 1595820600,
                city: "Seattle",
                state: "WA",
                airportCode: "SEA",
                timezone: "America/Los_Angeles",
              },
              arrival: {
                timestamp: 1595823780,
                city: "Portland",
                state: "OR",
                airportCode: "PDX",
                timezone: "America/Los_Angeles",
              },
            },
          ],
        },
        {
          id: "5",
          type: EVENT_TYPES.TRANSPORTATION,
          subType: EVENT_SUBTYPES.FLIGHT,
          company: "Alaska Airlines",
          confirmationCode: "CBYCYV",
          startTimestamp: 1596428100,
          timezone: "America/Los_Angeles",
          segments: [
            {
              flightNumber: "3336",
              departure: {
                timestamp: 1596428100,
                city: "Portland",
                state: "OR",
                airportCode: "PDX",
                timezone: "America/Los_Angeles",
              },
              arrival: {
                timestamp: 1596431100,
                city: "Seattle",
                state: "WA",
                airportCode: "SEA",
                timezone: "America/Los_Angeles",
              },
            },
            {
              flightNumber: "22",
              departure: {
                timestamp: 1596435300,
                city: "Seatlle",
                state: "WA",
                airportCode: "SEA",
                timezone: "America/Los_Angeles",
              },
              arrival: {
                timestamp: 1596449100,
                city: "Chicago",
                state: "IL",
                airportCode: "ORD",
                timezone: "America/Chicago",
              },
            },
          ],
        },
      ],
    },
  ],
};
