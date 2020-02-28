import request from "superagent";
import axios from "axios";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const EVENT_CREATED = "EVENT_CREATED";
export const EVENT_UPDATED = "EVENT_UPDATED";

const baseUrl = "http://localhost:4000";

// Fetch all events
function eventsFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: events
  };
}

export const fetchEvents = () => (dispatch, getState) => {
  if (getState().events) return;
  request(`${baseUrl}/events`)
    .then(res => {
      dispatch(eventsFetched(res.body));
    })
    .catch(console.error);
};

// Fetch an event for EventDetailsContainer
function eventFetched(event) {
  return {
    type: EVENT_FETCHED,
    payload: event
  };
}
export const fetchEvent = id => (dispatch, getState) => {
  request(`${baseUrl}/events/${id}`)
    .then(res => {
      dispatch(eventFetched(res.body));
    })
    .catch(console.error);
};

// Create an event
function eventCreated(event) {
  return {
    type: EVENT_CREATED,
    payload: {
      event: event
    }
  };
}
export const createEvent = (name, description, imgUrl, start_date, end_date) => {
  return async function(dispatch, getState) {
    const token = getState().user.token;
    console.log("argument", name, description, imgUrl);
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/newEvent`,
      headers: { authorization: `Bearer ${token}` },
      data: {
        name,
        description,
        imgUrl,
        start_date,
        end_date
      }
    });
    console.log(response.data);
    dispatch(eventCreated(response.data));
  };
};

//   request
//     .post(`${baseUrl}/newEvent`)
//     .send(data)
//     .then(res => {
//       dispatch(eventCreated(res.body))
//     })
//     .catch(console.error)
// }

// Update an event
const eventUpdated = event => ({
  type: EVENT_UPDATED,
  payload: event
});

export const updateEvent = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(res => {
      dispatch(eventUpdated(res.body));
    })
    .catch(console.error);
};
