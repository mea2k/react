import PropTypes from 'prop-types'

import './main.css';

import loadingIcon from './loading.gif';

const Loading = ({ text }) => (
    <div className="icon-loading">
        <img src={loadingIcon} text={text} alt={text} title={text} />

    </div>
);
  
Loading.propTypes = {
    text: PropTypes.string,
};


export default Loading;