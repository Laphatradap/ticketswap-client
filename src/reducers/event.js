import { EVENT_FETCHED, EVENT_UPDATED } from "../actions/events";

export default (state = null, action) => {
  // console.log("state of event reducer", state);
  // console.log("action payload of event reducer", action);

  switch (action.type) {
    case EVENT_FETCHED:
      return action.payload
    
    case EVENT_UPDATED:
      return action.event
      
    default:
      return state;
  }
};