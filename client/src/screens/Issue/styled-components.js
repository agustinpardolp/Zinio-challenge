import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledParagraph = styled.p`
  margin: 5rem;
  h3 {
    margin-bottom: 2rem;
  }
`;
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 5rem;
  
  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: table;
    p{
      margin: 1rem;
    }
  }
`;

export { StyledParagraph, StyledContent };
