import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading';

import './main.css';

const PostItem = ({ url }) => {

    const navigate = useNavigate();
    const { id } = useParams();

    // переменные для сохранения текущего значения полей формы
    const [postContent, setPostContent] = useState();

    // индикатор загрузки
    const [loading, setLoading] = useState(true);

    // загрузка содержимого поста
    useEffect(() => {
        if (id) {
            // таймер, чтобы увидеть компонент загрузки
            setTimeout(() => {
                fetch(url + '/' + id)
                    .then((res) => res.json())
                    .then((data) => {
                        setPostContent(data)
                        setLoading(false);
                    })
                    .catch((e) => {
                        setPostContent(e.message)
                        setLoading(false);
                    })
            }, 1000);
        }
    }, [id])

    // обработчик события удаления поста
    const delPost = (id) => {
        const headers = {
            method: 'DELETE',
            body: JSON.stringify({ id })
        };
        fetch(url + '/' + id, headers)
            .then((response) => response.text())
            .then((data) => {
                // переход на главную страницу
                navigate("/");
            });
    }

    // строка даты поста
    const dateStr = postContent && postContent.created ? (new Date(postContent.created)).toLocaleString("ru-RU") : ''

    return (
        <div>
            {loading ? (<Loading />
            ) : (
                <div className="note-container">
                    <div className="note-header">
                        <NavLink to={`/posts/${id}/edit`}>Изменить</NavLink>
                        <span onClick={() => delPost(id)}>Удалить</span>

                    </div>
                    <div className="content">
                        {postContent.content}
                    </div>
                    <div className="note-date">
                        {dateStr}
                    </div>
                </div>
            )}
        </div>
    )
};

PostItem.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
};


export default PostItem;