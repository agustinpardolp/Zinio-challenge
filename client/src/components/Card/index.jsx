import React from 'react'
import Button from '../../components/Button';
import { StyledCard, StyledImage } from './styled-components';

const Card = ({
  imgUrl,
  onClick,
  value,
  title,
  effect,
  buttonLabel
}) => {

  return (
    <StyledCard effect={effect}>
      <StyledImage src={imgUrl} />
      <StyledCard.Content>
        <StyledCard.Header>{title}</StyledCard.Header>
      </StyledCard.Content>
      <div >
        {onClick &&
          <Button
            onClick={() => onClick(value.id)}
            label={buttonLabel}
            fontColor='var(--shark)'
          />}
      </div>
    </StyledCard>
  )
}

export default Card