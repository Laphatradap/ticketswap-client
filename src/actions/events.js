import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

//Fetch all events
function eventFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: events
  }
}

export const fetchEvents = () => (dispatch, getState) => {
  if(getState().events) return;
  request(`${baseUrl}/event`)
    .then(res => {
      console.log("response body", res.body)
      dispatch(eventFetched(res.body))
    })
    .catch(console.error)
}