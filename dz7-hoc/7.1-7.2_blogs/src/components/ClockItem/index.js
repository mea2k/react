import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import './main.css';

const ClockItem = ({ id, name, timeZone, closeHandle }) => {

    // хранение таймера длоя его удаления
    const [timerID, setTimerID] = useState();
    // текущее время - оно показывается и меняется таймером
    const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

    // функция, выполняющаяся таймером
    const getClockTime = (timeZone) => {
        const date = new Date();
        const localTime = date.getTime();                   // in ms
        const localOffset = date.getTimezoneOffset() * 60000;  // in minutes
        const utc = localTime + localOffset + timeZone * 3600000;

        const newTZTime = new Date(utc);
        const hour = newTZTime.getHours();
        const min = newTZTime.getMinutes();
        const sec = newTZTime.getSeconds();

        setTime({ hour, min, sec });
    }

    // запуск таймера
    useEffect(() => {
        // циклический таймер 1 раз в секунду на формирование времени
        const timer = setInterval(getClockTime, 1000, timeZone);
        setTimerID(timer);

    }, [timeZone])


    useEffect(() => {
        // вызов чтобы сразу время загрузилось
        getClockTime(timeZone);

       // ComponentDidMount - удаление таймера
        return () => {
            if (timerID)
                clearInterval(timerID);
        }
    }, [])

    // специально для отслеживания корректного завершения таймеров
    console.log(name + " - " + JSON.stringify(time));

    return (
        <div className="clock-container">
            <div className="close" onClick={() => closeHandle(id)}></div>
            <span>{name}</span>
            <div className="clock">
                <div className="outer-clock-face">
                    <div className="marking marking-one"></div>
                    <div className="marking marking-two"></div>
                    <div className="marking marking-three"></div>
                    <div className="marking marking-four"></div>
                    <div className="inner-clock-face">
                        <div
                            className="hand hour-hand"
                            style={{
                                "transform": `rotate(${(time.hour) * 30 + time.min / 2 + 90}deg)`
                            }}
                        >
                        </div>
                        <div
                            className="hand min-hand"
                            style={{
                                "transform": `rotate(${(time.min) * 6 + time.sec / 10 + 90}deg)`
                            }}
                        >
                        </div>
                        <div
                            className="hand second-hand"
                            style={{
                                "transform": `rotate(${(time.sec) * 6 + 90}deg)`
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>



        //<div
        //        className="hourhand"
        //        style={{
        //            "transform": `rotate(${(hour) * 30 - 90}deg)`
        //        }}
        //    >

    )
};

ClockItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    timeZone: PropTypes.number,
    closeHandle: PropTypes.func
};


export default ClockItem;