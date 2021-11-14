import axios from "axios";
// import { queryValues } from "../../screens/Rovers/constants";
import { ISSUES_ENDPOINT } from "./constants";

const fetchIssues = async (query) => {
  const photosUrl = query ? "/photos?" : "/latest_photos?";
  return axios.get(`${ISSUES_ENDPOINT}${query}`);
};

const fetchIssuesById = async (id) => {
  return axios.get(`${ISSUES_ENDPOINT}/${id}`);
};

export const issuesServices = {
  fetchIssues,
  fetchIssuesById,
};
