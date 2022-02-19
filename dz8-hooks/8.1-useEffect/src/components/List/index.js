import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Loader from '../Loader';

import './main.css';

const List = ({ url, handleSelect }) => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    // однократное выполнение - componentDidMpunt
    // также выполняется при изменении url
    useEffect(() => {
        url && setLoading(true);

        url && fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((e) => {
                console.log("error: " + e);
                setLoading(false);
            })
    }, [url])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <ul className="list">
                    {items && items.map((v) => (
                        <li key={`list_${v.id}`} onClick={() => { if (handleSelect) return handleSelect(v.id) }} className="list-item">
                            {v.name}
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )
};

List.propTypes = {
    url: PropTypes.string,
    handleSelect: PropTypes.func
};


export default List;