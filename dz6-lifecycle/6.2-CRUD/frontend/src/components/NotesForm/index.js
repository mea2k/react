import { useState } from 'react';
import PropTypes from 'prop-types'

import './main.css';

const NotesForm = ({ createHandle }) => {

    // переменные для сохранения текущего значения полей формы
    const [noteText, setNoteText] = useState('');
 
    // обработчик события изменения содержимого текста)
    const handleChangeNoteText = (e) => {
        setNoteText(e.target.value);
    }

    const submitText = () => {
        if (noteText.trim()) {
            createHandle({ text: noteText.trim() });
            setNoteText('');
        }
    }

    return (
        <div className="form">
            <div className="form-item">
                <label htmlFor="timeZone">Текст заметки</label>
                <input
                    type="text"
                    name="text"
                    className="form-input"
                    onChange={handleChangeNoteText}
                    multiple
                    value={noteText}
                />
            </div>
            <div className="form-item">
                <button
                    onClick={submitText}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
};

NotesForm.propTypes = {
    createHandle: PropTypes.func.isRequired
};


export default NotesForm;