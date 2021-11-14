import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 10px;
  color: ${(props) => (props.fontColor ? props.fontColor : "var(--white)")};
  padding: 8px;
  cursor: pointer;
  outline: none;
  font-size: 0.8rem;
  background-color: var(--white);
  height: fit-content;

  margin: 1em 0.8em;
  position: relative;
  text-align: center;
  width: ${(props) => props.width || "auto"};
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: ${(props) => props.borderColor};
    color: var(--white);
    transition: ease-in-out 1s;
  }
`;
export { StyledButton };
