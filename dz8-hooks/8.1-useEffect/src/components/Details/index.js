import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Loader from '../Loader';

import './main.css';

const Details = ({ url, userId }) => {
    const [info, setInfo] = useState([]);

    const [loading, setLoading] = useState(false);

    // выполнение при изменении userId
    useEffect(() => {
        // функция получения информации пользователя по userId
        const fetchData = async () => {
            await fetch(url + userId + '.json')
                .then((response) => response.json())
                .then((data) => {
                    setInfo(data);
                    setLoading(false);
                })
                .catch((e) => {
                    console.log("error: " + e);
                    setLoading(false);
                })
        };

        // индикатор загрузки
        setLoading(true);
        // запуск функции получения данных с задержкой
        const timer = setTimeout(fetchData, 2000);

        // для проверки, что при выборе того же пользователя - не будет загружаться
        console.log('useEffect - ' + userId);

        // componentWillUnmount
        return () => clearTimeout(timer)

    }, [userId])

    return (
        <div className="item">
            {loading ? (
                <Loader />
            ) : info && (
                <ul className="details">
                    <li className="details-img">
                        <img src={info.avatar} title={info.name} alt={info.name} />
                    </li>
                    <li className="details-item title">
                        {info.name}
                    </li>
                    {info.details && Object.keys(info.details).map((key) => (
                        <li key={`u${userId}_${key}`} className="details-item">
                            {key}: {info.details[key]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

Details.propTypes = {
    url: PropTypes.string,
    userId: PropTypes.number
};


export default Details;