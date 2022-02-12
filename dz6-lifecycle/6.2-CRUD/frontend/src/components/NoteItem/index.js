import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import './main.css';

const NoteItem = ({ id, text, delHandle }) => (
    <div className="note-container">
        <div className="close" onClick={() => delHandle(id)}></div>
        <span>{text}</span>

    </div>
);

NoteItem.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    delHandle: PropTypes.func.isRequired
};


export default NoteItem;