import PropTypes from 'prop-types'

import DefaultCarousel from '../DefaultCarousel';
import NewsItem from './NewsItem';

import './main.css';


const NewsCarousel = ({ id, items }) => (
    <DefaultCarousel
        id={id}
        scroll='right'
        imageLoader
        style=''
        Element={NewsItem}
        items={items}
    />
);



NewsCarousel.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
};




export default NewsCarousel;