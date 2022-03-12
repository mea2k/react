import React from 'react';
import PropTypes from 'prop-types'

import { Spin } from './Spin';

import './main.css';

const Loading = ({ text = 'Загрузка...' }) => (
    <div className="loading" aria-label={text} title={text}>
        <Spin color="lightCoral" />
    </div>
);
  
Loading.propTypes = {
    text: PropTypes.string,
};

Loading.defaultProps = {
    text: 'Загрузка...'
}

export default Loading;