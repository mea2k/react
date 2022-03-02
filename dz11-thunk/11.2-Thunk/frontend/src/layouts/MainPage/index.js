import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate();

    const url = '/services';

    // по умолчанию, переходим на путь /services
    // без возможности вохврата назад
    useEffect(() => {
        // срабатывает ВСЕГДА
        navigate(url, { replace: true });
    })

    return (
        <div>
            Redirecting to {url}...
        </div>
    )
};

export default MainPage;