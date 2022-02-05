import PropTypes from 'prop-types'

import './main.css';
import SearchExampleRow from './SearchExampleRow';
import SearchForm from './SearchForm';
import ServiceLinks from './ServiceLinks';

const SearchBlock = ({ formData, services, example }) => (
    <div className="col col_home-arrow">
        <div className="home-arrow i-bem">
            <ServiceLinks services={services.services} allService={services.all} />

            <div className="home-arrow__search-wrapper">
                <div className="home-arrow__search">

                    <SearchForm {...formData} />

                </div>
            </div>

            <SearchExampleRow {...example}/>
        </div>
    </div>

);

SearchBlock.propTypes = {
    msid: PropTypes.string,
    action: PropTypes.string,
    img: PropTypes.string,
};

SearchBlock.defaultProps = {
    msid: '1564534292.17625.139949.267018',
    action: 'https://web.archive.org/web/20190731005131/https://yandex.ru/search/',
    title: 'Яндекс',
    img: '/search/logo_ru.png'
}

export default SearchBlock;