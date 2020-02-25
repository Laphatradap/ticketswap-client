import { EVENT_FETCHED } from "../actions/events";

export default (state = null, action) => {
  // console.log("state of event reducer", state);
  // console.log("action payload of event reducer", action);

  switch (action.type) {
    case EVENT_FETCHED:
      return action.payload
      
    default:
      return state;
  }
};