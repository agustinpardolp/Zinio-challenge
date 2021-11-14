import { useState, useEffect, useCallback } from "react";
import { queryValues } from "../screens/Issues/constants";

import { debounce } from "../utils";

const useFilters = (initialState) => {
  const [queryArray, setQueryArray] = useState([initialState]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const createQuery = () => {
    const queries = queryArray?.map((item) => item.query).join("");
    const newQuery = `${queries}`;
    setQuery(newQuery);
  };

  useEffect(() => {
    // createQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryArray, page]);

  const createQueryArray = useCallback(
    (queryParam) => {
      let queryCopyArray = queryArray.slice();
      if (!queryArray.length) {
        setQueryArray([queryParam]);
      } else if (queryCopyArray.some((obj) => obj.key === queryParam.key)) {
        const index = queryCopyArray.findIndex(
          (position) => position.key === queryParam.key
        );
        queryCopyArray.splice(index, 1, queryParam);
        setQueryArray(queryCopyArray);
      } else {
        queryCopyArray = [...queryCopyArray, queryParam];
        setQueryArray(queryCopyArray);
      }
    },
    [queryArray]
  );

  const handleSetSearch = (queryConfig) => {
    createQueryArray(queryConfig);
  };

  const handleSearchDebouce = debounce(handleSetSearch);
  const handleDataChange = useCallback(
    (e, key) => {
      const keyValue = queryValues[key];
      const data = `${keyValue.query}${e.target.value}`;
      const queryConfig = {
        key: keyValue.key,
        query: data,
      };
      if (keyValue === queryValues.sol.query) {
        handleSearchDebouce(queryConfig);
      } else {
        createQueryArray(queryConfig);
      }
      setPage(1);
    },
    [createQueryArray, handleSearchDebouce]
  );

  const handleSelectChange = useCallback(
    (e, key) => {
      const keyValue = queryValues[key];
      const data = e.target.value ? `${keyValue.query}${e.target.value}` : "";
      const queryConfig = {
        key: keyValue.key,
        query: data,
      };
      if (keyValue === queryValues.sol.query) {
        handleSearchDebouce(queryConfig);
      } else {
        createQueryArray(queryConfig);
      }
      setPage(1);
    },
    [createQueryArray, handleSearchDebouce]
  );

  const removeFilter = () => {
    setQuery("");
  };

  return {
    handleDataChange,
    handleSelectChange,
    query,
    queryArray,
    setQuery,
    removeFilter,
  };
};

export default useFilters;
