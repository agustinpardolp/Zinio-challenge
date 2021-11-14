import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledCardGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 35px;
  .ui.card {
    margin: 0;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${DEVICES_MAX_WIDTH.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${DEVICES_MAX_WIDTH.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledWrapper = styled.div`
  box-shadow: 0 0 5px;
`;

export { StyledCardGrid, StyledWrapper };
