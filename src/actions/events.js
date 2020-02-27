import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATED = 'EVENT_CREATED'
export const EVENT_UPDATED = 'EVENT_UPDATED'

const baseUrl = 'http://localhost:4000'

// Fetch all events
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
      dispatch(eventsFetched(res.body))
    })
    .catch(console.error)
}

// Fetch an event for EventDetailsContainer
function eventFetched(event) {
  return {
    type: EVENT_FETCHED,
    payload: event
  }
}
export const fetchEvent = id => (dispatch, getState) => {
  request(`${baseUrl}/events/${id}`)
    .then(res => {
      dispatch(eventFetched(res.body))
    })
    .catch(console.error)
}

// Create an event
function eventCreated(event) {
  return {
    type: EVENT_CREATED,
    payload: event
  }
}
export const createEvent = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/newEvent`)
    .send(data)
    .then(res => {
      dispatch(eventCreated(res.body))
    })
    .catch(console.error)
}

// Update an event
const eventUpdated = event => ({
  type: EVENT_UPDATED,
  payload: event
})

export const updateEvent = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(res => {
      dispatch(eventUpdated(res.body))
    })
    .catch(console.error)
}