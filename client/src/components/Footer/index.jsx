import React from 'react'
import { useIntl } from "react-intl";
import { Container, Segment } from 'semantic-ui-react'
import { StyledFooter } from './styled-components';

const Footer = () => {
    const intl = useIntl();
    return (
        <StyledFooter>
            {/* <Segment style={{ padding: '2em 0em' }}> */}
            <Container>
                <h4>{intl.formatMessage({ id: "footer.title" })}</h4>
            </Container>
            {/* </Segment> */}
        </StyledFooter>
    )
}

export default Footer
