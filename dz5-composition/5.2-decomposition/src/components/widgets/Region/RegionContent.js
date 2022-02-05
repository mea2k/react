import PropTypes from 'prop-types'

import './main.css';

const RegionContent = ({ items }) => (
    <ul className="list widget__content region__content list_inline_yes">
        {items && items.map((v) => (
            <li className="list__item" key={v.id}>
                <a className="home-link home-link_black_yes region__link" href={v.link}>{v.name}</a>
                {v.name2 && (
                    <span aria-hidden="true">&nbsp;-&nbsp;</span>
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





RegionContent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        name: PropTypes.string,
        link2: PropTypes.string,
        name2: PropTypes.string,
    }))
};




export default RegionContent;