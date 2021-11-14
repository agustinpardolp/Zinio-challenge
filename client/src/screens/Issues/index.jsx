import React, { useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import CardGrid from "../../components/CardGrid";
import ViewWrapper from "../../components/ViewWrapper";
import { fetchIssues } from "../../store/actions/issuesActions";
import useFilters from "../../hooks/useFilters";
import { StyledNoData, StyledSearchContainer } from "./styled-components";
import { cardHeight } from "./constants";

import { routes } from "../../routes/constants";
import Search from "./components/Search";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { REQUEST_STATUS } from "../../constants";

const Issues = ({ issuesList, fetchIssues, status }) => {
  const history = useHistory();
  const intl = useIntl();

  const { handleDataChange, query } = useFilters();

  useEffect(() => {
    fetchIssues(query)
  }, [query]);

  const handleDetail = useCallback((id) => {
    history.push(`${routes.issues}/${id}`);
  }, []);
  const onRenderList = useMemo(
    () =>
      issuesList?.length ? (
        <CardGrid>
          {issuesList.map((value) => (
            <Card
              title={value.name}
              key={value.id}
              imgUrl={`/images/${value.cover_image}`}
              height={cardHeight}
              onClick={handleDetail}
              value={value}
              effect
              buttonLabel={intl.formatMessage(
                { id: "card.detail" },
              )}
            />
          ))}
        </CardGrid>
      ) : (
        <StyledNoData>
          <i className="fas fa-exclamation-triangle"></i>
          <span>
            <FormattedMessage id="card.noResult" />
          </span>
        </StyledNoData>
      ),
    [issuesList, intl]
  );
  return (
    <>
      <ViewWrapper
        title={intl.formatMessage(
          { id: "subtitle.issues" },
        )}
      >
        <StyledSearchContainer>
          <Search handleChange={handleDataChange} />
        </StyledSearchContainer>
        {status === REQUEST_STATUS.LOADING ? (
          <Spinner />
        ) : (
          <>{onRenderList}</>
        )}
      </ViewWrapper>
    </>
  );
};
export const mapStateToProps = (state) => {
  const {
    issues: { data: issuesList, status },
  } = state;
  return {
    issuesList,
    status
  };
};
export const mapDispatchToProps = {
  fetchIssues,
};
export default connect(mapStateToProps, mapDispatchToProps)(Issues);

Issues.propTypes = {
  issuesList: PropTypes.arrayOf(
    PropTypes.shape({
      issue: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cover_image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      },
    })
  ).isRequired,
  status: PropTypes.bool,
};
