import { combineReducers } from "redux";
import serviceReducer from "./slices/services";
import teamReducer from "./slices/doctor";

const rootReducer = combineReducers({
  services: serviceReducer,
    teams: teamReducer, // 👈 add here

  // add more slices here
});

export default rootReducer;
