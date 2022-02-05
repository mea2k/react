import React from 'react';
import PropTypes from 'prop-types'

import './main.css';


const DefaultMedia = ({ id, title, link, linkInfo, link2, linkInfo2, text, style, hasCarousel, center, fullWidth, tabs, children }) => (
    <div className="media-grid__row" data-blockname={id}>
        <div
            className={`i-bem ${id} media-grid__${id} media-service  mix-tabber_theme_media ${fullWidth ? id + '_width_full' : ''} ${hasCarousel ? 'media-service_has-carousel_yes' : ''} ${tabs ? 'mix-tabber_theme_media' : ''} ${style ? style : ''}`}
            role="complementary"
            aria-label={title}
        >
            <div className={`media-service__header ${center ? 'media-service__header_valign_center' : ''}`}>
                <div className="media-service__title-wrapper">
                    <h1 className="media-service__title">
                        <a className={`home-link ${id}__title media-service__title-text`} href={link}>{title}</a>
                    </h1>

                    {text && (
                        <div className={`media-service__desc ${id}__desc`}>{text}</div>
                    )}

                </div>

                {link2 && linkInfo2 && (
                    <a className="home-link media-promo  home-link_hover_inherit" href={link2}>
                        <span className="media-promo__title">{linkInfo2.split(' ')[0]}</span>
                        <span className="media-promo__desc font-regular">{linkInfo2.split(' ').slice(1).join("&nbsp;")}</span>
                    </a>
                )}

            </div>

            <div className={`${id}__content media-service__content`}>

                {tabs && (
                    <div className={`${id}__tabs media-service__tabs`} role="tablist"> </div>
                )}

                <div className={`media-service__panels ${id}__panels`} >
                    {React.Children.map(children, (child, i) => (
                        <div
                            className={`${id}__panel media-service__panel`}
                            role={tabs ? 'tabpanel' : ''}
                            key={`${id}_${i}`}>
                            {child}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
);

DefaultMedia.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    hasCarousel: PropTypes.bool,
    center: PropTypes.bool,
    fullWidth: PropTypes.bool,
    tabs: PropTypes.bool,
};

DefaultMedia.defaultProps = {
    style: ''
};

export default DefaultMedia;