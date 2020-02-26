import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const TICKET_FETCHED = 'TICKET_FETCHED'
// export const TICKET_DETAILS_FETCHED = 'TICKET_DETAILS_FETCHED'

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
      // console.log("response body", res.body)
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

//fetch ticket details
// function ticketDetailsFetched (eventId, ticketId, userId) {
//   return {
//     type: TICKET_DETAILS_FETCHED,
//     payload: Promise.all([eventId, ticketId, userId])
//   }
// }

// export const fetchTicketDetails = (eventId, ticketId, userId) => (dispatch, getState) => {
//   if(getState().tickets) return;
//   request(`${baseUrl}/events/${eventId}/ticket/${ticketId}/user/${userId}`)
//     .then(res => {
//       console.log("response body", res.body)
//       dispatch(ticketDetailsFetched(res.body))
//     })
//     .catch(console.error)
// }

// //try with req.query
// function ticketDetailsFetched (ticket) {
//     return {
//       type: TICKET_DETAILS_FETCHED,
//       payload: ticket
//     }
//   }
  
//   export const fetchTicketDetails = () => (dispatch, getState) => {
//     if(getState().tickets) return;
//     request(`${baseUrl}/tickets`)
//       .then(res => {
//         console.log("response body", res.body)
//         dispatch(ticketDetailsFetched(res.body))
//       })
//       .catch(console.error)
//   }