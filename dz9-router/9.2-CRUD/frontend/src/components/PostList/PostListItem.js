import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import './main.css';

const PostListItem = ({ id, content, created, contentLen = 20 }) => {

    const getDateString = (date) => {
        var newDate = '';
        // дата поста
        const propDate = new Date(date);
        // сегодня
        const now = new Date();

        // разница от сегодня от 0 до 60 минут
        if (now - propDate < 60 * 60 * 1000)
            newDate = Math.floor((now - propDate) / (60 * 1000)) + ' минут назад';
        // разница от сегодня  до 24 часов
        else if (date - propDate < 60 * 60 * 24 * 1000)
            newDate = Math.floor((now - propDate) / (60 * 60 * 1000)) + ' часов назад';
        // иначе (разница юольше 24 часов)
        else
            newDate = Math.floor((now - propDate) / (60 * 60 * 24 * 1000)) + ' дней назад';

        return newDate;
    }


    return (
        <div className="post-list-item">
            <NavLink to={`/posts/${id}`}>{content.substring(0, contentLen)}</NavLink>
            <div className="post-list-item-date">
                {getDateString(created)}
            </div>

        </div>
    )
};

PostListItem.propTypes = {
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.number,
    contentLen: PropTypes.number
};

PostListItem.defaultProps = {
    contentLen: 20
}

export default PostListItem;