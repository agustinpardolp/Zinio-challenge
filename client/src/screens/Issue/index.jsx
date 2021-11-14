import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import useDocuments from "../../hooks/useFilters";
import {
  StyledParagraph,
  StyledContent
} from "./styled-components";
import ViewWrapper from "../../components/ViewWrapper";
import { routes } from "../../routes/constants";
import { useModal } from "../../hooks/useModal";
import { photoCardHeight } from "../Issues/constants";
import { Container } from "semantic-ui-react";
import Card from "../../components/Card";


const Issue = ({ issue }) => {
  const intl = useIntl();
  const history = useHistory();
  const { handleDeleteElement } = useDocuments("");
  const { showModal, hideModal, openModal } = useModal(false);

  const handleBackToHome = () => {
    history.push(routes.issues);
  };

  return (
    <ViewWrapper
      title={document.title}
      btnLabel={intl.formatMessage({ id: "issues.back" })}
      onClick={handleBackToHome}
      contentPosition="center"
    >
      <Container>
        <StyledContent>
          <Card
            title={issue.name}
            key={issue.id}
            imgUrl={`/images/${issue.cover_image}`}
            height={photoCardHeight}
            value={issue}
          />
          <StyledParagraph>
            <h3>{intl.formatMessage({ id: "issue.description.title" })}</h3>
            {issue.description}
          </StyledParagraph>
        </StyledContent>
      </Container>
    </ViewWrapper>
  );
};

export const mapStateToProps = (state) => {
  const {
    issue: { data: issue },
  } = state;
  return {
    issue,
  };
};
export default connect(mapStateToProps, null)(Issue);

Document.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
