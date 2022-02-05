import PropTypes from 'prop-types'

import './main.css';


const NewsItem = ({ item }) => (
    <a
        id={item.id}
        key={item.id}
        className="home-link media-service__item imageloader__card news-inserts__item news-inserts__item_img_yes news-inserts__item_text_yes home-link_hover_inherit"
        role="listitem"
        href={item.link}
    >
        <span className="news-inserts__item-inner media-service__bg media-service__shadow">
            {item.img && (<div
                className="news-inserts__item-img media-service__image imageloader__image imageloader__image_loaded_yes"
                style={{ "backgroundImage": `url(${item.img})` }}>
            </div>
            )}
            <span className="news-inserts__item-title i-multiline-overflow">{item.text}</span>
            <span className="news-inserts__item-text i-multiline-overflow">{item.info}</span>
        </span>
    </a>


);





NewsItem.propTypes = {
    item:PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        img: PropTypes.string,
        text: PropTypes.string,
        info: PropTypes.string,
    })
};




export default NewsItem;