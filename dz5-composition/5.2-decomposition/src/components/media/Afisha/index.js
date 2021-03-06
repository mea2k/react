import PropTypes from 'prop-types'

import DefaultMedia from '../DefaultMedia';
import AfishaCarousel from './AfishaCarousel';

import './main.css';

const AfishaMedia = ({ id, title, link, linkInfo, link2, linkInfo2, text, style, data }) => (
    <DefaultMedia
        id={id}
        key={id}
        title={title}
        link={link}
        linkInfo={linkInfo}
        text={text}
        link2={link2}
        linkInfo2={linkInfo2}
        style={'mix-tabber_theme_media ' + (style ? style : '')}
        hasCarousel
        tabs
    >

        <AfishaCarousel id={id} {...data}  />
 
    </DefaultMedia>
);

AfishaMedia.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    data: PropTypes.object
};


export default AfishaMedia;