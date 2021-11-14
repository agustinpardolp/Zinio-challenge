import React from 'react'
import { Image } from 'semantic-ui-react'
import Button from '../../components/Button';
import { useIntl } from "react-intl";
import { StyledCard, StyledImage } from './styled-components';

const Card = ({
  imgUrl,
  onClick,
  value,
  title,
  effect,
  buttonLabel
}) => {

  const intl = useIntl();
  return (
    <StyledCard effect={effect}>
      <StyledImage src={imgUrl}  />
      <StyledCard.Content>
        <StyledCard.Header>{title}</StyledCard.Header>
      </StyledCard.Content>
      <div >
        {onClick &&
          <Button
            onClick={() => onClick(value.id)}
            label={`${intl.formatMessage({ id: buttonLabel })}`}
            fontColor='var(--shark)'
          />}
      </div>
    </StyledCard>
  )
}

export default Card