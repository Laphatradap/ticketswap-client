import { combineReducers } from "redux";

import user from "./user";
import events from "./events";
import tickets from "./tickets"
import event from "./event"

export default combineReducers({
  user,
  events,
  event,
  tickets
});
