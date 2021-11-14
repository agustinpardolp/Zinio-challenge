import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledModalWrapper = styled.div`
  align-items: flex-start;
  background: #ffffffe0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25%;
  width: 100%;
  z-index: 100000;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    top:200px;
  }
`;
const StyledModal = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 90%);
  border: 1px solid lightgray;
  width: ${(props) => props.width || "25rem"};
  display: grid;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  padding: 1% 2%;
  z-index: 200000000;
  .modal_label-container {
    display: flex;
    align-items: end;
    margin: 30px
;
    p {
      text-align: center;
      margin-bottom: 1%;
    }
  }
  .modal_button-group {
    display: flex;
    justify-content: center;
    align-items: end;
    button {
      margin: 1%;
    }
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    width: 65vw;
    right: 30%;
    .modal_button-group {
      display: contents;
      justify-content: center;
      button {
        margin: 1%;
      }
    }
  }

  @media ${DEVICES_MAX_WIDTH.mobileL} {
    width: 70vw;
    right: 30%;
  }


`;

const StyledChildrenContainer = styled.div``;

export { StyledModal, StyledModalWrapper, StyledChildrenContainer };
