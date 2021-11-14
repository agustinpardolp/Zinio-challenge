import { Input } from "semantic-ui-react";
import styled from "styled-components";

const StyledInput = styled(Input)`
  margin-left: 5px;
  height: ${(props) => props.height || "auto"};
  padding: 5px;
  width: ${(props) => props.width || "auto"};
`;

export { StyledInput };
