import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import CardGrid from "../../components/CardGrid";
import ViewWrapper from "../../components/ViewWrapper";
import { fetchIssues } from "../../store/actions/issuesActions";
import useDocuments from "../../hooks/useFilters";
import { StyledNoData, StyledFilterContainer } from "./styled-components";
import { photoCardHeight } from "./constants";

import { routes } from "../../routes/constants";
import { typeOptions } from "./components/Filter/constants";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import Search from "./components/Filter";
import Card from "../../components/Card";

const Issues = ({ issuesList, fetchIssues }) => {
  const history = useHistory();
  const { type } = useParams();
  const intl = useIntl();

  const { handleSelectChange, handleDocumentById } = useDocuments();
  const { showModal, hideModal } = useModal(false);

  useEffect(() => { 
    fetchIssues('')

  }, []);

  const handleDetail = (id) => {
    history.push(`${routes.issues}/${id}`);
  };

  const onRenderList = useMemo(
    () =>
      issuesList?.length ? (
        <CardGrid>
          {issuesList.map((value) => (
            <Card
              title={value.name}
              key={value.id}
              imgUrl={`/images/${value.cover_image}`}
              height={photoCardHeight}
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
    [issuesList]
  );
  return (
    <>
      <ViewWrapper
        title={intl.formatMessage(
          { id: "subtitle.issues" },
        )}
      >
        <StyledFilterContainer>
          <Search handleChange={handleSelectChange} options={typeOptions} />
        </StyledFilterContainer>

        <>{onRenderList}</>
        <Modal
          show={showModal}
          onConfirm={() => { }}
          onHide={hideModal}
          label="document.modal.delete"
          width="30vw"
        />
      </ViewWrapper>
    </>
  );
};
export const mapStateToProps = (state) => {
  const {
    issues: { data: issuesList },
  } = state;
  console.log(state)
  return {
    issuesList,
  };
};
export const mapDispatchToProps = {
  fetchIssues,
};
export default connect(mapStateToProps, mapDispatchToProps)(Issues);

Issues.propTypes = {
  issuesList: PropTypes.arrayOf(
    PropTypes.shape({
      document: {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
        img: PropTypes.string.isRequired,
      },
    })
  ).isRequired,
};
