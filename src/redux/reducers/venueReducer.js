import _ from "lodash";

const initalState = {
  venues: [
    {
      id: "58ebbeceecb67e55ec51789d",
      name: "bartaco",
      tags: ["tacos", "mexican", "tequila", "margarita"],
      price: 3,
      location: {
        address: "1048 Pearl St Ste 101",
        cc: "US",
        city: "Boulder",
        country: "United States",
        lat: 40.0171245,
        lng: -105.2821431,
        postalCode: "80302",
        state: "CO"
      },
      hours: [
        {
          day: "sunday",
          hours: [{ open: "11:00", close: "00:00" }]
        },
        {
          day: "monday",
          hours: [{ open: "11:00", close: "00:00" }]
        },
        { day: "tuesday", hours: [{ open: "11:00", close: "00:00" }] },
        { day: "wednesday", hours: [{ open: "11:00", close: "00:00" }] },
        { day: "thursday", hours: [{ open: "11:00", close: "00:00" }] },
        { day: "friday", hours: [{ open: "11:00", close: "00:00" }] },
        { day: "saturday", hours: [{ open: "11:00", close: "00:00" }] }
      ]
    },
    {
      id: "49e81957f964a5203f651fe3",
      name: "Sushi Zanmai",
      tags: ["sushi", "japanese", "sake"],
      price: 3,
      location: {
        address: "1221 Spruce St",
        lat: 40.01906707165122,
        lng: -105.27973765789231,
        postalCode: "80302",
        cc: "US",
        city: "Boulder",
        state: "CO",
        country: "United States"
      },
      hours: [
        {
          day: "sunday",
          hours: [{ open: "17:00", close: "22:00" }]
        },
        {
          day: "monday",
          hours: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "22:00" }
          ]
        },
        {
          day: "tuesday",
          hours: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "22:00" }
          ]
        },
        {
          day: "wednesday",
          hours: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "22:00" }
          ]
        },
        {
          day: "thursday",
          hours: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "22:00" }
          ]
        },
        {
          day: "friday",
          hours: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "22:00" }
          ]
        },
        {
          day: "saturday",
          hours: [{ open: "17:00", close: "00:00" }]
        }
      ]
    },
    {
      id: "4d3cac5a8edf3704e894b2a5",
      name: "Pizzeria Locale",
      tags: ["pizza", "italian"],
      price: 2,
      location: {
        address: "1730 Pearl St",
        lat: 40.019208,
        lng: -105.272611,
        postalCode: "80302",
        cc: "US",
        city: "Boulder",
        state: "CO",
        country: "United States"
      },
      hours: [
        {
          day: "sunday",
          hours: [{ open: "11:30", close: "21:00" }]
        },
        { day: "monday", hours: [{ open: "11:30", close: "22:00" }] },
        { day: "tuesday", hours: [{ open: "11:30", close: "22:00" }] },
        { day: "wednesday", hours: [{ open: "11:30", close: "22:00" }] },
        { day: "thursday", hours: [{ open: "11:30", close: "22:00" }] },
        { day: "friday", hours: [{ open: "11:30", close: "22:30" }] },
        { day: "saturday", hours: [{ open: "11:30", close: "22:30" }] }
      ]
    },
    {
      id: "545d812f498e4fdeb5b31123",
      name: "Blackbelly",
      tags: ["butcher", "cocktails"],
      price: 2,
      location: {
        address: "1606 Conestoga St",
        lat: 40.015028547153875,
        lng: -105.22733044526962,
        postalCode: "80301",
        cc: "US",
        city: "Boulder",
        state: "CO",
        country: "United States"
      },
      hours: [
        { day: "sunday", hours: [{ open: "16:00", close: "21:00" }] },
        { day: "monday", hours: [{ open: "16:00", close: "21:00" }] },
        { day: "tuesday", hours: [{ open: "16:00", close: "21:00" }] },
        { day: "wednesday", hours: [{ open: "16:00", close: "21:00" }] },
        { day: "thursday", hours: [{ open: "16:00", close: "22:00" }] },
        { day: "friday", hours: [{ open: "16:00", close: "22:00" }] },
        { day: "saturday", hours: [{ open: "16:00", close: "22:00" }] }
      ]
    },
    {
      id: "4fbad7e0e4b0d1b2bf5200b0",
      name: "T|aco",
      tags: ["tacos", "mexican", "tequila", "margarita"],
      price: 2,
      location: {
        address: "1175 Walnut St",
        lat: 40.01685722702566,
        lng: -105.27995775376004,
        postalCode: "80302",
        cc: "US",
        city: "Boulder",
        state: "CO",
        country: "United States"
      },
      hours: [
        { day: "sunday", hours: [{ open: "11:00", close: "21:00" }] },
        { day: "monday", hours: [{ open: "11:00", close: "22:00" }] },
        { day: "tuesday", hours: [{ open: "11:00", close: "22:00" }] },
        { day: "wednesday", hours: [{ open: "11:00", close: "22:00" }] },
        { day: "thursday", hours: [{ open: "11:00", close: "22:00" }] },
        { day: "friday", hours: [{ open: "11:00", close: "22:00" }] },
        { day: "saturday", hours: [{ open: "11:00", close: "22:00" }] }
      ]
    }
  ],
  results: [],
  sort: { direction: "desc" },
  search: ""
};

const venueReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FILTER_VENUES":
      return state;
    case "SEARCH":
      const input = action.input.toLowerCase();
      let searchResults = [];
      state.venues.forEach(venue => {
        if (venue.name.toLowerCase().includes(input)) {
          return searchResults.push(venue);
        } else {
          venue.tags.forEach(tag => {
            if (tag.toLowerCase().includes(input)) {
              searchResults.push(venue);
            }
          });
        }
      });
      searchResults = _.orderBy(
        searchResults,
        ["price"],
        [state.sort.direction]
      );
      return { ...state, results: searchResults };
    case "SORT_RESULTS":
      const direction = action.sort.ascending ? "asc" : "desc";
      let sortResults = state.results || [];
      sortResults = _.orderBy(sortResults, ["price"], [direction]);
      return {
        ...state,
        results: sortResults,
        sort: { direction }
      };
    case "UPDATE_RESULTS":
      const results = action.results.map(o => {
        return {
          id: o.venue.id,
          name: o.venue.name,
          location: o.venue.location
        };
      });
      return { ...state, venues: results };
    default:
      return state;
  }
};

export default venueReducer;
