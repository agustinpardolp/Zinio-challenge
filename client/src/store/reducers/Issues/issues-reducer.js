import types from "../../actions/issuesActions/types";
import { REQUEST_STATUS } from "../../../constants";

export const issues = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { data, error } = {} } = action;
  switch (action.type) {
    case types.FETCH_ISSUES_REQUEST:
      return {
        data: data,
        status: REQUEST_STATUS.LOADING,
      };
    case types.FETCH_ISSUES_SUCCESS:
      return {
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_ISSUES_FAILURE:
      return {
        error: error,
        status: REQUEST_STATUS.FAILED,
      };
    default:
      return state;
  }
};

export default issues;
