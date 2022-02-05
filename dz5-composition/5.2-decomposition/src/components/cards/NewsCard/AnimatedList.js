import PropTypes from 'prop-types'


const AnimatedList = ({ items }) => {

    return (
        <div clasName="news__animation-list-container">
            <ol className="list news__list news__animation-list">
                {/*<ol className="list news__list news__animation-list-ul">*/}       {
                    items.map((v, i, ar) => (
                <li key={v.id} className={`list__item list__item_icon news__animated-item ${i == ar.length - 1 ? 'list__item_fade_in' : ''}`}>
                    {/*<li key={v.id} className={`list__item list__item_icon news__animated-item-li ${i == 0 ? 'fade-in' : ''}`}>*/}
                    <a
                        className="home-link list__item-content list__item-content_with-icon home-link_black_yes"
                        aria-label={v.title}
                        href={v.link}
                    >
                        <span className="news__item-inner">
                            <div className="news__agency-icon news__agency-icon_desktop news__agency-icon_image_yes">
                                <object className="news__agency-icon-image" title={v.agency.name} data={v.agency.img} type="image/png">
                                    <div className="news__agency-icon-image-empty"></div>
                                </object>
                            </div>
                            <span className="news__item-content">{v.title}</span>
                        </span>
                    </a>
                </li>
                ))
                }
                <span aria-hidden="true">&nbsp;</span>
            </ol>
        </div>

    );
}

AnimatedList.propTypes = {
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



export default AnimatedList;