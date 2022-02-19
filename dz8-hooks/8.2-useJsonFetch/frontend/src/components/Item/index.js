import PropTypes from 'prop-types'
import { useJsonFetch } from '../../effects/useJsonFetch';

import './main.css';

const Item = ({ url, title }) => {
    const [data,  loading, error] = useJsonFetch(url);
    return (
        <div className="item">
            <h2>{title}</h2>
            loading: {loading ? 'Загрузка...' : '-'}
            <br />
            error: {error ? error.message : '-'}
            <br />
            data: {data ? Object.keys(data).map((key) => (
            <div key={`u${title}_${key}`} className="item-data">
                {key}: {data[key]}
            </div>
            )) :
                '-'
    }
            <br />
        </div>
    )
};

Item.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};


export default Item;