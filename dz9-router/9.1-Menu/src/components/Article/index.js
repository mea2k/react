import React from 'react';
import PropTypes from 'prop-types'

import './main.css';

const Article = ({ title, info }) => (
    <article className="article">
        <h1 className="article__title">{title}</h1>
        {info && info.map((v, key) => (
            <p className="article__paragraph" key={key}>
                {v}
            </p>
        ))}
    </article>
);


Article.propTypes = {
    title: PropTypes.string,
    info: PropTypes.array
};


export default Article;