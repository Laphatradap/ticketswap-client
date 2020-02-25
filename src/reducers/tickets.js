import { TICKETS_FETCHED, TICKET_FETCHED } from "../actions/tickets";

export default (state = null, action) => {
  // console.log("state of events reducer", state);
  // console.log("action payload of events reducer", action);

  switch (action.type) {
    case TICKETS_FETCHED:
      // console.log("action", action)
      return action.payload

    case TICKET_FETCHED:
      return action.payload
      
    default:
      return state;
  }
};