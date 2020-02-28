import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  blacklist: [ "events", "event", "tickets" ],
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('state')
//     if(serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (e) {
//     console.log(e)
//     return undefined
//   }
// }

// const persistedState = loadFromLocalStorage()

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
// const store = createStore(reducer, persistedState, enhancer);
// const store = createStore(reducer, enhancer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store)
// store.subscribe(() => saveToLocalStorage(store.getState()))

// export default store;