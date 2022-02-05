import PropTypes from 'prop-types'


const StaticList = ({ items }) => {

    return (
        <ol className="list news__list">
            {items.map((v, i) => (
                <li className="list__item  list__item_icon" key={v.id}>
                    <a
                        className="home-link list__item-content list__item-content_with-icon home-link_black_yes"
                        aria-label={v.title}
                        href={v.link}
                    >
                        <span className="news__item-inner">
                            <div className="news__agency-icon news__agency-icon_desktop news__agency-icon_image_yes">
                                <object className="news__agency-icon-image" title={v.agency.name} data={v.agency.img} type="image/png">*/}
                                    <div className="news__agency-icon-image-empty"></div>
                                </object>
                            </div>
                            <span className="news__item-content">{v.title}</span>
                        </span>
                    </a>
                </li>

            ))}
        </ol>
    );
}

StaticList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        link: PropTypes.string,
        agency: {
            name: PropTypes.string,
            img: PropTypes.string,
        }
    }))
};



export default StaticList;