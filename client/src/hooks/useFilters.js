import { useState, useCallback } from "react";
import { QUERY_PARAMETERS } from "../screens/Issues/constants";

import { debounce } from "../utils";

const useFilters = () => {
  const [query, setQuery] = useState("");

  const createQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const handleSetSearch = (queryConfig) => {
    createQuery(queryConfig);
  };

  const handleSearchDebouce = debounce(handleSetSearch);
  const handleDataChange = useCallback(
    (e) => {
      const data = `${QUERY_PARAMETERS.search}=${e.target.value}`;
      handleSearchDebouce(data);
    },
    [handleSearchDebouce]
  );
  return {
    handleDataChange,
    query,
    setQuery,
  };
};

export default useFilters;
