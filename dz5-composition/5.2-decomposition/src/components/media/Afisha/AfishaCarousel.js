import PropTypes from 'prop-types'
import DefaultCarousel from '../DefaultCarousel';
import AfishaItem from './AfishaItem';

import './main.css';


const AfishaCarousel = ({ id, items }) => (
    <DefaultCarousel
        id={id}
        scroll='right'
        imageLoader
        style='' /*'carousel_arrow-position_weighted'*/
        Element={AfishaItem}
        items={items}
    />

);




AfishaCarousel.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
};




export default AfishaCarousel;