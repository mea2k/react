import PropTypes from 'prop-types'
import ServiceContent from './ServiceContent';

import './main.css';

const Services = ({ id, title, link, linkInfo, link2, linkInfo2, text, data }) => (
    <div className="i-bem widget widget_mode_plain widget_id_services widget_name_services widgets__item b-widget-fixed"  id="wd-wrapper-_services">
        <div id={id} key={id} className="b-widget-data b-wrapper">
            <div className="services" role="complementary" aria-label={title}>
                <h1>
                    <a className="home-link home-link_blue_yes" href={link}>{linkInfo ? linkInfo : title}</a>
                    {link2 && (
                        <a className="home-link home-link_blue_yes" href={link2}>{linkInfo2 ? linkInfo2 : title}</a>
                    )}
                </h1>

                <div className="widget__content">
                    <ServiceContent {...data} />
                </div>

                {text && (
                    <div className="widget__collapsed-text widget__collapsed">{text}</div>
                )}
            </div>
        </div>
    </div>
);

Services.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
};



export default Services;