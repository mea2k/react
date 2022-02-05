import PropTypes from 'prop-types'

import './main.css';

const SearchExampleRow = ({ title, exampleText }) => (
    <div className="home-arrow__bottom">
        <div className="home-arrow__sample">
            {title}&nbsp;
            <span className="home-arrow__sample-what">Например,&nbsp;</span>
            <span className="home-link home-link_pseudo_yes home-link_gray_yes home-arrow__sample-link" tabIndex="0">
                <span className="home-arrow__sample-first-word">{exampleText.split(' ')[0]} </span>
                {exampleText.split(' ').slice(1).join(' ')}
            </span>
        </div>
    </div>
);

SearchExampleRow.propTypes = {
    title: PropTypes.string,
    exampleText: PropTypes.string,
};

SearchExampleRow.defaultProps = {
    title: 'Найдётся всё.',
    exampleText: 'Какого цвета мой город на карте температуры',
}

export default SearchExampleRow;