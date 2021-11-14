import React from "react";
import PropTypes from "prop-types";

import { StyledWrapper, StyledTitle, StyledContent } from "./styled-components";
import Button from "../Button";

const ViewWrapper = ({
  title = "",
  children,
  onClick,
  btnLabel,
  contentPosition,
}) => (
  <StyledWrapper>
    <StyledTitle>
      {title}
      {onClick && (
        <Button
          onClick={onClick}
          label={btnLabel}
          fontColor="var(--shark)"
        />
      )}
    </StyledTitle>
    <StyledContent contentPosition={contentPosition}>{children}</StyledContent>
  </StyledWrapper>
);
ViewWrapper.defaultProps = {
  title: "",
};
ViewWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.elementType,
  onClick: PropTypes.func,
  btnLabel: PropTypes.string,
  contentPosition: PropTypes.string,
};
export default ViewWrapper;
