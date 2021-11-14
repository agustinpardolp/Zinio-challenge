import types from "./types";
import { issuesServices } from "../../../services/issuesServices";

export const fetchIssuesRequest = () => ({
  type: types.FETCH_ISSUES_REQUEST,
});

const fetchIssuesSuccess = (data) => {
  return({
  type: types.FETCH_ISSUES_SUCCESS,
  payload: data,
})}

const fetchIssuesFailure = (error) => ({
  type: types.FETCH_ISSUES_FAILURE,
  payload: error,
});

export const fetchIssues = (query) => (dispatch) => {
  dispatch(fetchIssuesRequest());
  return issuesServices
    .fetchIssues(query)
    .then((data) => dispatch(fetchIssuesSuccess(data)))
    .catch((error) => dispatch(fetchIssuesFailure(error)));
};

export const fetchIssuesByIdRequest = () => ({
  type: types.FETCH_ISSUE_BY_ID_REQUEST,
});

const fetchIssuesByIdSuccess = (data) => ({
  type: types.FETCH_ISSUE_BY_ID_SUCCESS,
  payload: data,
});

export const fetchIssuesByIdFailure = (error) => ({
  type: types.FETCH_ISSUE_BY_ID_FAILURE,
  payload: error,
});

export const fetchIssuesById = (id, redirect) => (dispatch) => {
  dispatch(fetchIssuesByIdRequest());
  return issuesServices
    .fetchIssuesById(id)
    .then((data) => dispatch(fetchIssuesByIdSuccess(data)))
    .catch((error) => {
      return dispatch(
        fetchIssuesByIdFailure({ error: error.message, redirect })
      );
    });
};
