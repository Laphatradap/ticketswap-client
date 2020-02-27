import { USER_CREATED, LOGIN_SUCCESS } from "../actions/users";

const initialState = { userCreated: false,  token: null, email: null, id: null};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    // case USER_NOT_CREATED:
    //   return { ...state, userCreationFailed: true}

    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, email: action.payload.email, id: action.payload.id };

    default:
      return state;
  }
};