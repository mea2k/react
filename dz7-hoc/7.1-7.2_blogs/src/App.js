import React, { useState } from 'react';

import './main.css';


/////////////////////////////////////////////////
///             БЛОК HOC                     ////
/////////////////////////////////////////////////

// Новая функция обработки даты - возвращает новый компонент c датой в формате "NN мин/часов/дней назад"
function withDate(Component) {
    function Wrapper(props) {
        var newDate = '';
        const propDate = new Date(props.date);
        const date = new Date();
        // если есть дата
        if (props.date) {
            // разница от сегодня от 0 до 60 минут
            if (date - propDate < 60 * 60 * 1000)
                newDate = Math.floor((date - propDate) / (60 * 1000)) + ' минут назад';
            // разница от сегодня  до 24 часов
            else if (date - propDate < 60 * 60 * 24 * 1000)
                newDate = Math.floor((date - propDate) / (60 * 60 * 1000)) + ' часов назад';
            // иначе (разница юольше 24 часов)
            else
                newDate = Math.floor((date - propDate) / (60 * 60 * 24 * 1000)) + ' дней назад';

        }
        // возврат исходного компонента с новой датой
        return (
            <Component {...props} date={newDate} />
        )
    }
    return Wrapper;
};



// Новая функция добавления обертки для новых и популярных блоков
function withViews(Component) {
    function Wrapper(props) {
        const views = props.views ? Number(props.views) : 0;

        // просмотров >=1000 - popular
        if (views >= 1000)
            return (
                <div className="wrap-item-popular">
                    <Component {...props} />
                </div>
            )
        // просмотров <=100 - new
        if (views <= 100)
            return (
                <div className="wrap-item-new">
                    <Component {...props} />
                </div>
            )
        // иначе - просто рисуем компонент
        return (
            <Component {...props} />
        )
    }
    return Wrapper;
};

// новые компоненты с оберткой
const UpgradedDateTime = withDate(DateTime);
const WrappedVideo = withViews(Video);
const WrappedArticle = withViews(Article);




/////////////////////////////////////////////////
///             ИСХОДНЫЙ КОД                 ////
/////////////////////////////////////////////////

function DateTime(props) {
    return (
        <div className="date">{props.date}</div>
    )
}

function Views(props) {
    return (
        <div className="views">
            {props.type === 'article' ? 'Прочтений:' : 'Просмотров:'}&nbsp;{props.views}</div>
    )
}

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="item item-footer">
                {/*<DateTime date={props.date} />*/}
                <UpgradedDateTime date={props.date} />
               <Views views={props.views} />
            </div>
        </div>
    )
}

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <div className="item item-footer">
                {/*<DateTime date={props.date} />*/}
                <UpgradedDateTime date={props.date} />
                <Views views={props.views} />
            </div>
        </div>
    )
};


function List(props) {
    return props.list.map((item,key) => {
        switch (item.type) {
            case 'video':
                return (
                    //<Video {...item} key={key}/>
                     <WrappedVideo {...item} key={key}/>
               );

            case 'article':
                return (
                    //<Article {...item} key={key}/>
                    <WrappedArticle {...item} key={key} />
               );
        }
    });
};


export default function App() {

    // возвращает строку даты
    // в формате 'YYYY-MM-DD HH:II:SS'
    // со смещением на указанное количество секунд
    function getDate(timeOffset = 0) {
        const date = new Date(+new Date() - timeOffset * 1000);
        return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }

    const [list, setList] = useState([

        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: getDate(),    // сегодня
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: getDate(3 * 60 * 60), // 3 часа назад
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            date: getDate(12 * 60 * 60), // 12 часов назад
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            date: getDate(2 * 24 * 60 * 60), // 2 дня назад
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            date: '2017-12-02 05:24:00',
            views: 12
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00',
            views: 120
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00',
            views: 1201
        }
    ]);



    return (
        <List list={list} />
    );
}