import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const USER_NOT_CREATED = "USER_NOT_CREATED"

function signUpSuccess() {
  return { type: USER_CREATED };
}

// function signUpFailure() {
//   return { type: USER_NOT_CREATED}
// }

export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user", {
      username: username,
      email: email,
      password: password
    });

    if (response.status === 201) {
      dispatch(signUpSuccess());
    } 
    // else if (response.status === 400) {
    //   dispatch(signUpFailure())
    // }
  };
}

function loginSuccess(token, email, id) {
  return {
    type: LOGIN_SUCCESS,
    payload: { 
      token: token,
      email: email,
      id: id
    }
  };
}

export function login(username, email, password, history) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/login", {
      username,
      email,
      password
    });
    dispatch(loginSuccess(response.data.email, response.data.id, response.data.token)
    );
    history.push("/events")
  };
}