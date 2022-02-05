import PropTypes from 'prop-types'

import './main.css';

const SearchLogo = ({link, title, img}) => (
    <div className="col col_home-logo">
        <div className="home-logo">
            <a className="home-link home-logo__link" href={link}>
                <div className="home-logo__default" role="img" aria-label={title}>
                    <img src={img} title={title} />
                </div>
            </a>
        </div>
    </div>
);

SearchLogo.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
};

SearchLogo.defaultProps = {
    link: 'https://web.archive.org/web/20190731005131/https://yandex.ru/',
    title: 'Яндекс',
    img: '/search/logo_ru.png'
}

export default SearchLogo;