import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { FormattedMessage, useIntl } from "react-intl";
import {
  StyledModal,
  StyledModalWrapper,
  StyledChildrenContainer,
} from "./styled-components";

const Modal = ({
  onConfirm,
  onHide,
  show,
  label,
  children,
  width,
  btnDisabled,
}) => {
  const intl = useIntl();
  return (
    <>
      {show ? (
        <StyledModalWrapper>
          <StyledModal width={width}>
            {children ? (
              <StyledChildrenContainer>{children}</StyledChildrenContainer>
            ) : (
              <div className="modal_label-container">
                <p>
                  <FormattedMessage id={label} />
                </p>
              </div>
            )}
            <div className="modal_button-group">
              <Button
                variant={btnDisabled ? "disabled" : "confirm"}
                label={intl.formatMessage({ id: "button.confirm" })}
                onClick={onConfirm}
                fontColor="var(--shark)"
                disabled={btnDisabled}
              />
              <Button
                variant="cancel"
                label={intl.formatMessage({ id: "button.cancel" })}
                onClick={onHide}
                fontColor="var(--shark)"
              />
            </div>
          </StyledModal>
        </StyledModalWrapper>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  onConfirm: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.string,
  btnDisabled: PropTypes.bool
};

export default React.memo(Modal);
