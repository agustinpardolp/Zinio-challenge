import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import {
  StyledParagraph,
  StyledContent
} from "./styled-components";
import { fetchIssuesById } from "../../store/actions/issuesActions";
import ViewWrapper from "../../components/ViewWrapper";
import { cardHeight } from "../Issues/constants";
import { Container } from "semantic-ui-react";
import Card from "../../components/Card";
import { REQUEST_STATUS } from "../../constants";
import Spinner from "../../components/Spinner";
import { handleBackToHome } from "./constants";


const Issue = ({ issue, fetchIssuesById, status }) => {
  const intl = useIntl();
  const history = useHistory();
  const params = useParams()
  useEffect(() => {
    fetchIssuesById(params.id, history)
  }, [params]);
  return (
    <>
      {status !== REQUEST_STATUS.LOADED ? (
        <Spinner />) : (
        <ViewWrapper
          title={issue.name}
          btnLabel={intl.formatMessage({ id: "issues.back" })}
          onClick={() => handleBackToHome(history)}
          contentPosition="center"
        >
          <Container>
            <StyledContent>
              <Card
                title={issue.name}
                key={issue.id}
                imgUrl={`/images/${issue.cover_image}`}
                height={cardHeight}
                value={issue}
              />
              <StyledParagraph>
                <h3>{intl.formatMessage({ id: "issue.description.title" })}</h3>
                {issue.description}
              </StyledParagraph>
            </StyledContent>
          </Container>
        </ViewWrapper>)}
    </>
  );
};

export const mapStateToProps = (state) => {
  const {
    issue: { data: issue, status },
  } = state;
  return {
    issue,
    status
  };
};
export const mapDispatchToProps = {
  fetchIssuesById,
};
export default connect(mapStateToProps, mapDispatchToProps)(Issue);

Document.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cover_image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  ).isRequired,
  status: PropTypes.bool.isRequired,
  fetchIssuesById: PropTypes.func.isRequired
};
