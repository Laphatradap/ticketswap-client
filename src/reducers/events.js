import { EVENTS_FETCHED, EVENT_FETCHED } from "../actions/events";

export default (state = null, action) => {
  console.log("state of events reducer", state);
  console.log("action payload of events reducer", action);

  switch (action.type) {
    case EVENTS_FETCHED:
      // console.log("action", action)
      return action.payload

    case EVENT_FETCHED:
      return action.payload
      
    default:
      return state;
  }
};