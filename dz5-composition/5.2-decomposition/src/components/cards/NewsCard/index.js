import PropTypes from 'prop-types'
import NewsList from './NewsList';
import Stockings from '../Stockings';

import './main.css';

String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const NewsCard = ({ title, linkNews, region, date, newsItems, stockings, ...rest }) => (
    <div className="news news_animation_yes mix-tabber_theme_link" role="complementary" aria-label="Новости">
        <div className="news__header widget__content">
            <div className="news__tabs">
                <h1 className="news__tab-wrapper news__head-item">
                    <a className="home-link home-link_blue_yes news__tab news__tab_selected_yes mix-tabber__tab mix-tabber__tab_selected_yes"
                        tabIndex="0"
                        aria-selected="true"
                        aria-controls="news_panel_news"
                        data-key="news"
                        id="news_tab_news"
                        data-stat-link="news.tab.link.news"
                        data-stat-select="news.tab.select.news"
                        role="tab"
                        href={linkNews}
                    >
                        {title}
                    </a>
                </h1>

                <h1 className="news__tab-wrapper news__head-item">
                    <a
                        className="home-link home-link_blue_yes news__tab news__tab_selected_no mix-tabber__tab mix-tabber__tab_selected_no"
                        tabIndex="-1"
                        aria-selected="false"
                        data-key="region"
                        id="news_tab_region"
                        data-stat-link="news.tab.link.region"
                        data-stat-select="news.tab.select.region"
                        role="tab"
                        href={region.linkNews}
                    >
                        в {region.name}
                    </a>
                </h1>

                <span className="news__head-item">
                    <span className="datetime text_gray_yes i-bem">
                        <span className="datetime__date">
                            <span className="datetime__day">{date.getDate()} </span>
                            <span className="datetime__month">{date.toLocaleString('dafault', { month: 'long', day: 'numeric' }).split(' ')[1].firstLetterCaps()}, </span>
                            <span className="datetime__wday">{date.toLocaleDateString('default', { weekday: 'long' })} </span>
                        </span>
                        <span className="datetime__time">
                            <a className="home-link datetime__time-link home-link_gray_yes" href="https://web.archive.org/web/20190731005131/https://yandex.ru/time">
                                <span className="datetime__hour">{date.getHours()}</span>
                                <span className="datetime__flicker">:</span>
                                <span className="datetime__min">{date.getMinutes()}</span>
                            </a>
                        </span>
                    </span>
                </span>
            </div>
            <div className="news__panels mix-tabber-slide2__panels">
                <NewsList items={newsItems} />

            </div>
        </div>

        <div className="widget__collapsed news__collapsed">
            <h1>
                <a className="home-link home-link_blue_yes" href="https://web.archive.org/web/20190731005131/https://news.yandex.ru/?lang=ru&amp;msid=1564534292.17625.139949.267018&amp;mlid=1564533846">Сейчас в СМИ</a>
            </h1>
            <div className="widget__collapsed-text">Актуальные новости и события дня</div>
        </div>

        <Stockings date={date} stocks={stockings} />

    </div>
);

NewsCard.propTypes = {
    title: PropTypes.string,
    linkNews: PropTypes.string,
    region: PropTypes.shape({
        name: PropTypes.string,
        linkNews: PropTypes.string
    }),
    date: PropTypes.instanceOf(Date),
    newsItems: PropTypes.array.isRequired,
};

NewsCard.defaultProps = {
    title: 'Сейчас в СМИ',
        linkNews: 'https://web.archive.org/web/20190731005131/https://news.yandex.ru/?msid=1564534292.17625.139949.267018&amp;mlid=1564533846.glob_225',
    region: {
        name: 'США',
        linkNews: 'https://web.archive.org/web/20190731005131/https://news.yandex.ru/United_States?msid=1564534292.17625.139949.267018&amp;mlid=1564533846.geo_84',
    },
    date: new Date('july 30, 2020 20:51:00')
}

export default NewsCard;