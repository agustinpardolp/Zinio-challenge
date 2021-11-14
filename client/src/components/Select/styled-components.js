import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledSelectContainer = styled.section`
  align-self: flex-end;
  width: ${(props) => (props.width ? props.width : "12vw")};
  height: 35px;
  select {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 2px -2px gray;
  }
  div {
    min-width: ${(props) => (props.width ? props.width : "10vw")};
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export { StyledSelectContainer };
