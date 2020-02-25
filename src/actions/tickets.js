import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const TICKET_FETCHED = 'TICKET_FETCHED'

const baseUrl = 'http://localhost:4000'

//Fetch all tickets
function ticketsFetched (tickets) {
  return {
    type: TICKETS_FETCHED,
    payload: tickets
  }
}

export const fetchTickets = () => (dispatch, getState) => {
  if(getState().tickets) return;
  request(`${baseUrl}/tickets`)
    .then(res => {
      console.log("response body", res.body)
      dispatch(ticketsFetched(res.body))
    })
    .catch(console.error)
}

//Fetch one ticket
function ticketFetched (ticket) {
  return {
    type: TICKET_FETCHED,
    payload: ticket
  }
}

export const fetchTicket = id => (dispatch, getState) => {
  if(getState().tickets) return;
  request(`${baseUrl}/tickets/${id}`)
    .then(res => {
      // console.log("response body", res.body)
      dispatch(ticketFetched(res.body))
    })
    .catch(console.error)
}

