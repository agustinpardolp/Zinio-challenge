import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Button from '../../components/Button/'
import { handleBackToHome } from '../Issue/constants';
import { StyledErrorPage } from './styled-components';

const ErrorPage = () => {
    const history = useHistory();
    const intl = useIntl();
    const { location: { state: { error } } } = history

    const handleBack = useCallback(() => {
        handleBackToHome(history)
    }, [])

    return (
        <StyledErrorPage>
            <div>
                <h2>{error}</h2>
                <Button label={intl.formatMessage({ id: "issues.back" })} onClick={handleBack} fontColor="var(--shark)" />
            </div>
        </StyledErrorPage>
    )
}

export default ErrorPage
