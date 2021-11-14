const { issuesList } = require("./constants");

const searchItemsById = (id) => {
  const search = issuesList.filter((element) => element.id == id);
  return search;
};

const searchItemsByQuery = (query) => {
  const search = issuesList.filter((element) =>
    element.name.toLowerCase().includes(query)
  );
  return search;
};

module.exports = { searchItemsById, searchItemsByQuery };
