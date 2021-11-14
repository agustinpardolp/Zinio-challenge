import styled from "styled-components";
import { Card } from "semantic-ui-react";

const StyledCard = styled(Card)`
  backface-visibility: hidden;
  background: ${(props) => `url(/images/${props.img}) no-repeat center`};
  background-size: ${(props) =>
    props.backgroundSize ? props.backgroundSize : "contain"};
  height: 100%;
  margin: 1%;
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  &:hover {
    transform: ${(props) => props.effect && "scale(1.03)"};
    transition: ${(props) => props.effect && "transform 0.3s ease-in-out"};
    backface-visibility: ${(props) => props.effect && "hidden"};
  }
  .ui.card,
  .ui.cards > .card {
    width: ${(props) => props.width && props.width};
  }
`;
const StyledImage = styled.img`
  height: 25vh;
  object-fit: contain;
`;

export { StyledCard, StyledImage };
