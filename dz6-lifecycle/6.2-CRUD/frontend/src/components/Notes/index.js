import PropTypes from 'prop-types'
import NoteItem from '../NoteItem';

import './main.css';

const Notes = ({ items, delHandle }) => {

    return (
        <div className="form">
            {items && items.length > 0 ? items.map((v) => (
                <NoteItem
                    key={v.id}
                    id={v.id}
                    text={v.content}
                    delHandle={delHandle}
                />
            )) : (
                <div>Записей нет.</div>
            )}
        </div>
    )
};

Notes.propTypes = {
    items: PropTypes.array,
    delHandle: PropTypes.func.isRequired
};


export default Notes;