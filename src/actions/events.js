import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

//Fetch all events
function eventsFetched(events) {
  return {
    type: EVENTS_FETCHED,
    payload: events
  }
}

export const fetchEvents = () => (dispatch, getState) => {
  if(getState().events) return;
  request(`${baseUrl}/events`)
    .then(res => {
      console.log("response body", res.body)
      dispatch(eventsFetched(res.body))
    })
    .catch(console.error)
}

//fetch one event for EventDetailsContainer
function eventFetched(event) {
  return {
    type: EVENT_FETCHED,
    event
  }
}
export const fetchEvent = id => (dispatch, getState) => {
  request(`${baseUrl}/event/${id}`)
    .then(res => {
      console.log("one event", res.body)
      dispatch(eventFetched(res.body))
    })
    .catch(console.error)
}
