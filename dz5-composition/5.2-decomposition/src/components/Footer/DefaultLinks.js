import PropTypes from 'prop-types'

import './main.css';


const DefaultLinks = ({ id, img, items }) => (
    <div className={`${id}__list-wrapper`}>
        <ul className={`${id}__list`}>
            {items && items.map((v) => (
                <li className={`${id}__li`} key={v.id}>
                    <a className="home-link home-link_theme_media-white" href={v.link}>{v.text}</a>
                    {v.info && (
                        <>
                            <span className={`${id}__item-dash`}>&nbsp;—&nbsp;</span>
                            <a className="home-link home-link_theme_media-minor-white" href={v.link}>{v.info}</a>
                        </>
                    )}
                </li>
            ))}
        </ul>
        {img && (
            <div
                className={`media-footer__logo ${id}__logo`}
                style={{ "backgroundImage": `url(${img})` }}>
            </div>
        )}
    </div>

);




DefaultLinks.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        text: PropTypes.string,
        info: PropTypes.string
    }))
};




export default DefaultLinks;