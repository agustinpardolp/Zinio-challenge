import { combineReducers } from "redux";

import { issues } from "./Issues/issues-reducer";
import { issue } from "./Issue/issue-reducer";

const allReducers = combineReducers({
  issues,
  issue,
});

const reducers = (state, action) => allReducers(state, action);

export default reducers;
