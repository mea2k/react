import PropTypes from 'prop-types'

import './main.css';

import icon from './update.png';


const UpdateIcon = ({ text, updateHandle }) => (
<div className="update-icon" onClick={() => updateHandle()}>
        <img src={icon} alt={text} text={text} title={text} />
    </div>
);

UpdateIcon.propTypes = {
    text: PropTypes.string,
    updateHandle: PropTypes.func.isRequired,
};


export default UpdateIcon;