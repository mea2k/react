import PropTypes from 'prop-types'

import './main.css';

const ServiceLinks = ({ services, allService }) => (
    <div className="home-arrow__tabs">
        <div className="home-tabs stream-control dropdown2 dropdown2_switcher_elem i-bem" role="navigation">
            {services && services.map((v) => (
                <a className="home-link home-link_blue_yes home-tabs__link home-tabs__search" data-id={v.id} key={v.id} href={v.link} target="_blank" rel="noopener">{v.text}</a>
            ))}
            {allService &&
                <a className="home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher dropdown2__switcher" aria-expanded="false" aria-haspopup="true" data-id={allService.id} href={allService.link}>{allService.text}</a>
            }
        </div>
    </div>
);

ServiceLinks.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        text: PropTypes.string
    })),
    allService: PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        text: PropTypes.string
    }),
};

ServiceLinks.defaultProps = {
    allService: {
        id: 'all',
        link: 'https://web.archive.org/web/20190731005131/https://yandex.ru/all',
        text: 'ещё'
    }
};


export default ServiceLinks;