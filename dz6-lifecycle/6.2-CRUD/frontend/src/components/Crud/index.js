import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import Loading from '../Loading';
import Notes from '../Notes';
import NotesForm from '../NotesForm';
import UpdateIcon from '../UpdateIcon';

import './main.css';

const Crud = ({ server }) => {

    // флаг загрузки
    const [loading, setLoading] = useState(true);

    // массив заметок
    const [notes, setNotes] = useState([]);

    // начальная загрузка
    useEffect(() => {
        handleUpdate();
    }, []);

    // CR
    const handleCreate = ({ text }) => {
        setLoading(true);

        console.log("Create - " + text);

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ content: text })
        };
        fetch(server, headers)
            .then((response) => response.text())
            .then((data) => {
                handleUpdate();
            });
    }

    // U
    const handleUpdate = () => {
        setLoading(true);

        console.log("Update");

        // добавлен искусственный таймер на 1000 мс
        // чтобы было видно этап 'LOADING'
        setTimeout(() => {
            fetch(server)
                .then((response) => response.json())
                .then((data) => {
                    setNotes(data);
                    setLoading(false);
                })
        }, 1000);
    }

    // D
    const handleDelete = (id) => {
        setLoading(true);

        console.log("Delete - " + id);

        fetch(server + id, {
            method: 'DELETE',
        })
            .then((response) => response.text())
            .then((data) => {
                handleUpdate();
            });
    }

    return (
        <div>
            <div className="header">
                <h2>ЗАМЕТКИ</h2>
                <UpdateIcon
                    updateHandle={handleUpdate}
                    text="Обновить"
                />
            </div>

            <NotesForm createHandle={handleCreate} />

            {loading ? (
                <Loading text="Загрузка..." />
            ) : (
                <Notes
                    items={notes}
                    delHandle={handleDelete}
                />
            )}
        </div>
    )
};

Crud.propTypes = {
    server: PropTypes.string,
};


export default Crud;