import request from "superagent";

export const TICKETS_FETCHED = "TICKETS_FETCHED";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const TICKET_CREATED = "TICKET_CREATED";
export const TICKET_UPDATED = "TICKET_UPDATED";

const baseUrl = "http://localhost:4000";

// Fetch all tickets
function ticketsFetched(tickets) {
  return {
    type: TICKETS_FETCHED,
    payload: tickets
  };
}

export const fetchTickets = () => (dispatch, getState) => {
  if (getState().tickets) return;
  request(`${baseUrl}/tickets`)
    .then(res => {
      dispatch(ticketsFetched(res.body));
    })
    .catch(console.error);
};

// Fetch a ticket
function ticketFetched(ticket) {
  return {
    type: TICKET_FETCHED,
    payload: ticket
  };
}

export const fetchTicket = id => (dispatch, getState) => {
  if (getState().tickets) return;
  request(`${baseUrl}/tickets/${id}`)
    .then(res => {
      // console.log("response body", res.body)
      dispatch(ticketFetched(res.body));
    })
    .catch(console.error);
};

// Create a ticket
function ticketCreated(ticket) {
  return {
    type: TICKET_CREATED,
    payload: ticket
  };
}
export const createTicket = data => dispatch => {
  request
    .post(`${baseUrl}/tickets`)
    .send(data)
    .then(res => {
      dispatch(ticketCreated(res.body));
    })
    .catch(console.error);
};

// Update the ticket
const ticketUpdated = ticket => ({
  type: TICKET_UPDATED,
  payload: ticket
});

export const updateTicket = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/tickets/${id}`)
    .send(data)
    .then(res => {
      dispatch(ticketUpdated(res.body));
    })
    .catch(console.error);
};
