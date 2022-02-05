import PropTypes from 'prop-types'


const CarouselLoader = ({ id, text, retryText, style }) => (
    <div className={`${id}__loader ${style ? style : ''}`}>
        <span className="loader"></span>
        <div className={`${id}__retry`}>
            {text}
            <button className={`button ${id}__retry-button button_theme_pseudo button_size_s i-bem`} role="button" type="button">
                <span className="button__text">{retryText}</span>
            </button>
        </div>
    </div>
);




CarouselLoader.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    retryText: PropTypes.string,
    style: PropTypes.string
};

CarouselLoader.defaultProps = {
    text: 'Не удалось загрузить данные',
    retryText: 'Попробовать ещё раз'
}



export default CarouselLoader;