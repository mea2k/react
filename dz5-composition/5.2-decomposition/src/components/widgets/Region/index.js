import PropTypes from 'prop-types'
import RegionContent from './RegionContent';

import './main.css';

const Region = ({ id, title, link, linkInfo, link2, linkInfo2, text, data }) => (
    <div className="i-bem widget widget_mode_plain widgets__item b-widget-fixed" id="wd-wrapper-_geo">
        <div id={id} key={id} className="b-widget-data b-wrapper">
            <div className="region" role="complementary" aria-label={title}>
                <h1 className="region__title">
                    <a className="home-link  b-inline region__setup region__setup_icon" title={linkInfo} target="_self" href={link}>
                        <i className="b-ico region__icon-inner"></i>
                    </a>
                    <a className="home-link home-link_blue_yes" href={link2}>{linkInfo2}</a>
                </h1>
                <div className="widget__content">
                    <RegionContent {...data} />
                </div>

                {text && (
                    <div className="widget__collapsed-text widget__collapsed">{text}</div>
                )}

            </div>
        </div>
    </div>
);

Region.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
};



export default Region;