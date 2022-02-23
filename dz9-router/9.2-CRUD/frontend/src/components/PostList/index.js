import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PostListItem from './PostListItem';

import './main.css';

const PostList = ({ url }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, []);


    return (
        <div>
            <div className="form">
                <NavLink to="/posts/new">Добавить</NavLink>
            </div>
            <div className="list">
                {posts && posts.length > 0 ? posts.map((v) => (
                    <PostListItem
                        key={v.id}
                        {...v}
                    />
                )) : (
                    <div>Записей нет.</div>
                )}
            </div>
        </div>
    )
};

PostList.propTypes = {
    url: PropTypes.string,
};


export default PostList;