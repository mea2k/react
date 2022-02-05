import PropTypes from 'prop-types'

import LinksLayout from './LinksLayout';

import './main.css';

const Footer = ({ id,  data }) => (
    <div className="media-footer i-bem"  role="contentinfo">
        <div className="media-footer__container ">
            <div className="media-footer__links">
                <ul className="media-footer__links-list">
                    <li className="media-footer__links-item">
                        <a className="home-link media-footer__smart-link home-link_theme_media-white" role="button" tabindex="0" data-scroll-to="zen" href="https://web.archive.org/web/20190731005131/https://zen.yandex.ru/?clid=101&amp;country_code=ru">Дзен</a>
                        &nbsp;—&nbsp;
                        <a className="home-link media-footer__smart-link media-footer__zen home-link_theme_media-minor-white" role="button" tabindex="0" data-scroll-to="zen" href="https://web.archive.org/web/20190731005131/https://zen.yandex.ru/?clid=101&amp;country_code=ru">персональная лента публикаций</a>
                    </li>
                </ul>

                <div className="media-footer__logo"></div>
            </div>

            {data && data.map((v) => (
                <LinksLayout {...v} key={v.id} />
            ))}
            
        </div>
    </div>
);

Footer.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array
};


export default Footer;