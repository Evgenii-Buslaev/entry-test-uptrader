import { combineReducers } from "redux";
import { projectReducer } from "./projectsReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  projectReducer,
  todoReducer,
});
