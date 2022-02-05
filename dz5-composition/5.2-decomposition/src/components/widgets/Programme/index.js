import PropTypes from 'prop-types'
import ProgrammeContent from './ProgrammeContent';

import './main.css';

const Programme = ({ id, title, link, linkInfo, link2, linkInfo2, text, data }) => (
    <div className="i-bem widget widget_mode_plain widget_id_tv widget_name_tv widgets__item b-widget-fixed" id="wd-wrapper-_tv">
        <div id={id} key={id} className="b-widget-data b-wrapper">
            <div className="tv" role="complementary" aria-label={title}>
                <h1>
                    <a className="home-link home-link_blue_yes" href={link}>{linkInfo ? linkInfo : title}</a>
                    {link2 && (
                        <a className="home-link home-link_blue_yes" href={link2}>{linkInfo2 ? linkInfo2 : title}</a>
                    )}
                </h1>

                <div className="widget__content">
                    <ProgrammeContent {...data} />
                </div>

                {text && (
                    <div className="widget__collapsed-text widget__collapsed">{text}</div>
                )}
            </div>
        </div>
    </div>
);

Programme.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
};



export default Programme;