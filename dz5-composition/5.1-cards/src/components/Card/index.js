import PropTypes from 'prop-types'

import './main.css';

const Card = ({ img, title, link, ...rest }) => (
    <div className="card">
        {img &&
            <img src={img} alt={title} title={title} className="card-img-top" />
        }
        <div className="card-body">
            {title &&
                <h5 className="card-title">{title}</h5>
            }
            <p className="card-text">
                {rest.children}
            </p>
            {link && link.url && link.text &&
                <a href={link.url} className="card-link">{link.text}</a>
            }
        </div>
    </div>
)

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string
    }),
};


export default Card;