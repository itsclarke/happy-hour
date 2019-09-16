import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import venueReducer from "./venueReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  venues: venueReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
