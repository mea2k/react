import PropTypes from 'prop-types'

import DefaultCarousel from '../DefaultCarousel';
import ZenItem from './ZenItem';

import './main.css';


const ZenCarousel = ({ id, items }) => (

    <DefaultCarousel
        id={id}
        scroll='right'
        imageLoader
        Element={ZenItem}
        items={items}
    />
);





ZenCarousel.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
};




export default ZenCarousel;