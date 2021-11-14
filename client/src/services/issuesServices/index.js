import axios from "axios";
// import { queryValues } from "../../screens/Rovers/constants";
import { ISSUES, ISSUES_ENDPOINT } from "./constants";

const fetchIssues = async (query) => {
  return axios.get(`${ISSUES_ENDPOINT}${ISSUES}${query}`);
};

const fetchIssuesById = async (id) => {
  return axios.get(`${ISSUES_ENDPOINT}${ISSUES}/${id}`);
};

export const issuesServices = {
  fetchIssues,
  fetchIssuesById,
};
