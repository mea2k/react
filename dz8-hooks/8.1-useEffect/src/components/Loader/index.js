import PropTypes from 'prop-types'

import './main.css';

const Loader = ({ text = "Загрузка..." }) => (
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

Loader.propTypes = {
    text: PropTypes.string,
};


export default Loader;