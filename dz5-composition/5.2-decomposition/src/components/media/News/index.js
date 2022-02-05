import PropTypes from 'prop-types'

import DefaultMedia from '../DefaultMedia';
import NewsCarousel from './NewsCarousel';

import './main.css';

const NewsMedia = ({ id, title, link, linkInfo, link2, linkInfo2, text, style, data }) => (
        <DefaultMedia
        id={id}
        key={id}
        title={title}
        link={link}
        linkInfo={linkInfo}
        text={text}
        link2={link2}
        linkInfo2={linkInfo2}
        style={style}
        hasCarousel
    >

            <NewsCarousel {...data} />
 
    </DefaultMedia>
);

NewsMedia.propTypes = {
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



export default NewsMedia;