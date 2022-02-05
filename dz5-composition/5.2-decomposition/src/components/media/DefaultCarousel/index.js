import PropTypes from 'prop-types'
import CarouselLoader from './CarouselLoader';

import './main.css';


// scroll - {left | right | both}
// items - в каждом должен быть id
// Element - у него prop - ITEM
const DefaultCarousel = ({ id, scroll, imageLoader, style, Element, isLoading, items }) => (
    <div className={`i-bem carousel ${id}__list-wrapper media-service__list-wrapper carousel_theme_media carousel_scroll_${scroll}  ${imageLoader ? 'imageloader imageloader_tracking_yes imageloader_visible_yes imageloader_full-visible_yes': ''} ${style ? style : ''}`} >

        {isLoading && (
            <CarouselLoader id={id} />
        )}

        <div className={`carousel__wrap ${id}__wrap media-service__wrap imageloader__scroller`}>


            <div className={`carousel__list ${id}__list media-service__list ${id}__list_visibility_visible`} role="list">
                {items && items.map((v, i) => (
                    <Element item={v} key={v.id || v.key || id + '_' + i} />
                ))}
            </div>
            <div className="scrollbar-hider">
                <div className="scrollbar-hider__inner"></div>
            </div>
        </div>
        <div className="carousel__control carousel__control_side_left"></div>
        <div className="carousel__control carousel__control_side_right"></div>

    </div>
    
);





DefaultCarousel.propTypes = {
    id: PropTypes.string.isRequired,
    scroll: PropTypes.oneOf(['left', 'right', 'both']),
    imageLoader: PropTypes.bool,
    style: PropTypes.string,
    Element: PropTypes.func, //PropTypes.element,
    items: PropTypes.array
};

DefaultCarousel.defaultProps = {
    style: ''
}


export default DefaultCarousel;