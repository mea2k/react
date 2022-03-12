import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const MainPage = ({ linkTo }) => {

    const navigate = useNavigate();

    // по умолчанию, переходим на путь /services
    // без возможности вохврата назад
    useEffect(() => {
        // срабатывает ВСЕГДА
        navigate(linkTo, { replace: true });
    })

    return (
        <div>
            Redirecting to {linkTo}...
        </div>
    )
};


MainPage.propTypes = {
    linkTo: PropTypes.string
};

export default MainPage;