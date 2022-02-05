import PropTypes from 'prop-types'

import './main.css';


const ZenItem = ({ item }) => (
    <div className={`zen__item media-service__item media-service__shadow imageloader__card zen__item_type_image zen__item_theme_${(item.style.bgColorR < 50 && item.style.bgColorG < 50 && item.style.bgColorB < 50) ? 'black' : 'white'}`}
        role="listitem"
        data-id={item.id}
        key={item.id}>
        <a className="zen__item-link"
            rel="noreferrer"
            href={item.link}
            target="_blank"
            style={{ "color": item.style.textColor, "backgroundColor": item.style.bgColor }}
        >
            <span className="zen__item-title i-multiline-overflow_lines_5 zen__item-title_size_m i-multiline-overflow">
                {item.text}
            </span>
            <span className="media-service__image zen__item-image imageloader__image imageloader__image_loaded_yes"
                style={{ "backgroundImage": `url(${item.img})` }}>
            </span>
            <span className="zen__item-curtain"
                style={{
                    "backgroundImage": `-webkit-linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 50%)`,
                    "backgroundImage": `linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 50%)`
                }}>
            </span>

            {item.source.img ? (
                <span className="zen__item-domain zen__item-domain_logo_yes zen__item-domain_fadeout_yes"
                    style={{ "backgroundImage": `url(${item.source.img})` }}>
                    {item.source.name}
                    <span className="zen__item-domain-fadeout"
                        style={{
                            "backgroundImage": `-webkit-linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 20%)`,
                            "backgroundImage": `linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 20%)`
                        }}>
                    </span>
                </span>
            ) : (
                <span className="zen__item-domain zen__item-domain_fadeout_yes">
                    {item.source.name}
                    <span className="zen__item-domain-fadeout"
                        style={{
                            "backgroundImage": `-webkit-linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 20%)`,
                            "backgroundImage": `linear-gradient(rgba(${item.style.bgColorR}, ${item.style.bgColorG}, ${item.style.bgColorB}, 0), ${item.style.bgColor} 20%)`
                        }}>
                    </span>
                </span>
            )}
        </a>
        <span
            className={`zen__item-control ${(item.style.bgColorR < 50 && item.style.bgColorG < 50 && item.style.bgColorB < 50) ? 'zen__item_theme_black' : ''}  zen__item-like`}
            role="button"
            tabIndex="0"
            title="Нравится">
        </span>
        <span
            className={`zen__item-control ${(item.style.bgColorR < 50 && item.style.bgColorG < 50 && item.style.bgColorB < 50) ? 'zen__item_theme_black' : ''} zen__item-dislike`}
            role="button"
            tabIndex="0"
            title="Не нравится"></span>
    </div>);




ZenItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        link: PropTypes.string,
        text: PropTypes.string,
        img: PropTypes.string,
        source: PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string
        }),
        style: PropTypes.shape({
            textColor: PropTypes.string,
            bgColor: PropTypes.string,
            bgColorR: PropTypes.number,
            bgColorG: PropTypes.number,
            bgColorB: PropTypes.number,
        })
    })
};




export default ZenItem;