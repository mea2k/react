import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

import './main.css';

const PostForm = ({ content, url }) => {

    const navigate = useNavigate();
    const { id } = useParams();

    // переменные для сохранения текущего значения полей формы
    const [postContent, setPostContent] = useState(content);

    // обработчик события изменения содержимого текста)
    const handleChangeContent = (e) => {
        setPostContent(e.target.value);
    }

    // загружаем данные поста, если редактирование и известно ID
    useEffect(() => {
        if (id) {
            fetch(url + '/' + Number(id))
                .then((res) => res.json())
                .then((data) => setPostContent(data.content))
                .catch((e) => console.log(e.message));
        }
    }, [id])

    // отправка нового комментари на сервер
    const fetchPost = ({ id, content }) => {

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id, content })
        };

        fetch(url, headers)
            .then((response) => response.text())
            .then((data) => {
                // переход на главную страницу
                navigate("/");
            });
    }

    // обработчик события нажатия кнопки "Изменить/Создать"
    const submitPost = () => {
        if (postContent.trim()) {
            fetchPost({ id: id ? id : 0, content: postContent.trim() });
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
                    onChange={handleChangeContent}
                    multiple
                    value={postContent ? postContent : ''}
                />
            </div>
            <div className="form-item">
                <button
                    onClick={submitPost}
                    disabled={postContent ? false : true}
                >
                    {id ? 'Изменить' : 'Создать'}
                </button>
            </div>
        </div>
    )
};

PostForm.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number
};


export default PostForm;