import { createStore,  applyMiddleware, combineReducers } from "redux";
import personsReducer from "./persons/PersonsReduces";
import filterReducer from './filtered/FilterReduces';
import logger from "redux-logger";
import { loadState, saveState } from "../storage";

const rootReducer = combineReducers({
  persons: personsReducer,
  filter: filterReducer
});

const persistedState = {
  persons: loadState()
};
console.log(persistedState);

const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
    saveState(store.getState());
  });

export default store;

