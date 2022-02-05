export const WeatherDataShort = {
    img: "/weather/cloudy-small.svg",      //"https://yastatic.net/weather/i/icons/portal/svg/dark/ovc_-ra.svg",
    info: "Завтра понижение температуры, дождь",
    link: "https://web.archive.org/web/20190731005131/https://yandex.ru/pogoda/washington?utm_from=ya_side-card-morda&amp;utm_source=side-card",
};




export const WeatherDataFull = {
    id: 'wd-_weather',
    title: 'Погода',
    link: 'https://web.archive.org/web/20190731005131/https://yandex.ru/pogoda/washington',
    text: 'Прогноз погоды рядом с вами',
    data: {
        img: "/weather/widget-mid-cloudy.png",
        link: 'https://web.archive.org/web/20190731005131/https://yandex.ru/pogoda/washington',
        scale: "C",
        current: {
            temp: 29,
            info: "малооблачно"
        },
        tempForecast: [
            {
                id: "night",
                period: "Ночью",
                temp: 22
            },
            {
                id: "morning",
                period: "Утром",
                temp: 26
            }
        ]
    }
};
