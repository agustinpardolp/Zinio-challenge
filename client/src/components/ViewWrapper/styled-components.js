import styled from "styled-components";

const StyledWrapper = styled.div``;

const StyledTitle = styled.h2`
  align-items: center;
  border-bottom: 1px solid #4e4b4b4d;
  color: var(--shark);
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  margin: 10px 30px;
  padding: 10px;
  height: 6rem;
`;

const StyledContent = styled.div`
  justify-content: ${props=>props.contentPosition || 'start'};
  margin: 0.5rem 3rem;
  row-gap: 3rem;
  height: 100vh;
`;

export { StyledWrapper, StyledTitle, StyledContent };
