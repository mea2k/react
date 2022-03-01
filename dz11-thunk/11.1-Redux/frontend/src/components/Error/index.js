import React from 'react';
import PropTypes from 'prop-types'

import './main.css';

const ErrorBubble = ({ text = 'Произошла ошибка!', info }) => (
    <div className="error" aria-label={text} title={text}>
        <span>{text}</span>
        <div className="error-content">
            {info}
        </div>
        <span
            className="error-link"
            onClick={(e) => {
            e.preventDefault();
            window.location.reload(false);
        }}>
            Попробовать еще раз
                    </span>
    </div>
);

ErrorBubble.propTypes = {
    text: PropTypes.string,
    info: PropTypes.string,
};

ErrorBubble.defaultProps = {
    text: 'Произошла ошибка!'
}

export default ErrorBubble;