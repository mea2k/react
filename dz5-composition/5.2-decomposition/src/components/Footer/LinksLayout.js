import PropTypes from 'prop-types'
import DefaultLinks from './DefaultLinks';

import './main.css';


const LinksLayout = ({ id, img, maxRows, items }) => (
    <div className={`${id}__layout`}>
        {items.length > maxRows ? (
            <>
                <DefaultLinks id={id} items={items.slice(0, Math.ceil(items.length / 2))} img={img} />

                <DefaultLinks id={id} items={items.slice(Math.ceil(items.length / 2))} />
            </>
        ) : (
            <DefaultLinks id={id} items={items} img={img} />
        )}
    </div>
);




LinksLayout.propTypes = {
    id: PropTypes.string.isRequired,
    maxRows: PropTypes.number,
    img: PropTypes.string,
    items: PropTypes.array
};

LinksLayout.defaultProps = {
    maxRows: 5
}



export default LinksLayout;