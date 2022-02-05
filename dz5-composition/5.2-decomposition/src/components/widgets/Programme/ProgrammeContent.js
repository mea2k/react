import PropTypes from 'prop-types'

import './main.css';

const ProgrammeContent = ({ items }) => (
    <ul className="list tv__list">
        {items && items.map((v) => (
            <li className="list__item tv__item" key={v.id}>
                <span className="tv__time">{v.time.getHours()}:{v.time.getMinutes()}</span>
                <span className="tv__title">
                    <a className="home-link tv__name home-link_black_yes" href={v.program.link} title={v.program.nameFull}>{v.program.nameShort}</a>
                    <a className="home-link tv__channel home-link_gray_yes" href={v.channel.link}>{v.channel.name}</a>
                </span>
            </li>
        ))}
    </ul>
);





ProgrammeContent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        time: PropTypes.instanceOf(Date),
        program: PropTypes.shape({
            link: PropTypes.string,
            nameFull: PropTypes.string,
            nameShort: PropTypes.string
        }),
        channel: PropTypes.shape({
            link: PropTypes.string,
            name: PropTypes.string
        }),
    }))
};




export default ProgrammeContent;