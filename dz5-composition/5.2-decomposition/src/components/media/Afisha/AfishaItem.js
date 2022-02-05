import PropTypes from 'prop-types'

import './main.css';


const AfishaItem = ({ item }) => (
    <a
        className="home-link afisha-inserts__event afisha-inserts__event_type_film media-service__item home-link_hover_inherit imageloader__card afisha-event-film"
        href={item.link}
        id={item.id}
        key={item.id}
    >
        <span className="afisha-event-film__image-wrapper">
            <span
                className="afisha-event-film__image media-service__shadow media-service__image imageloader__image imageloader__image_loaded_yes"
                style={{ "backgroundImage": `url(${item.img})` }}>
            </span>
            {item.premiere &&
                (<span className="afisha-event-film__premiere">{item.premiere}</span>)
            }

        </span>
        <span className="afisha-event-film__content">
            <span className="afisha-event-film__title">{item.title}</span>
            <span className="afisha-event-film__genre">{item.genre}</span>
        </span>
    </a>
);




AfishaItem.propTypes = {
    item:PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        premiere: PropTypes.string,
    })
};




export default AfishaItem;