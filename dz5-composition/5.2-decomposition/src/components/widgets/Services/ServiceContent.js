import PropTypes from 'prop-types'

import './main.css';

const ServiceContent = ({ items }) => (
    <ul className="list">
        {items && items.map((v) => (
            <li className="list__item" key={v.id}>
                <a className="home-link home-link_bold_yes home-link_black_yes" href={v.link}>{v.name}</a>
                {v.name2 && (
                    <span aria-hidden="true">&nbsp;—&nbsp;</span>
                )}
                {v.link2 ? (
                    <a className="home-link home-link_black_yes" href={v.link2}>{v.name2}</a>
                ) : (
                    <span className="text_gray_yes">{v.name2}</span>
                )}
            </li>
        ))}
    </ul>
);





ServiceContent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        name: PropTypes.string,
        link2: PropTypes.string,
        name2: PropTypes.string,
    }))
};




export default ServiceContent;