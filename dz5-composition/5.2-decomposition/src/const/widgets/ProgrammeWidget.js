const date = new Date("July 30, 2019");

export const ProgrammeWidgetData = {
    id: 'wd-_tv',
    title: 'Телепрограмма',
    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/?utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=title"',
    text: 'Программа передач по каналам',
    data: {
        items: [
            {
                id: '18_55_166',
                time: new Date(date.setHours(18, 55)),
                program: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/program/2402842?eventId=139807657&amp;utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=link',
                    nameFull: '',
                    nameShort: '6 кадров'
                },
                channel: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/channels/166?utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=channel',
                    name: 'СТС International'
                }
            }, {
                id: '19_25_143',
                time: new Date(date.setHours(19, 25)),
                program: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/program/2473357?eventId=139947598&amp;utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=link',
                    nameFull: 'Московская борзая (15-я и 16-я серии)',
                    nameShort: 'Московская борзая'
                },
                channel: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/channels/143?utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=channel',
                    name: 'Россия-Планета'
                }
            }, {
                id: '19_55_422',
                time: new Date(date.setHours(19, 55)),
                program: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/program/2366257?eventId=139773546&amp;utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=link',
                    nameFull: 'Братаны (3-я и 4-я серии)',
                    nameShort: 'Братаны'
                },
                channel: {
                    link: 'https://web.archive.org/web/20190731005131/https://tv.yandex.ru/channels/422?utm_source=yamain&amp;utm_medium=informer&amp;utm_campaign=channel',
                    name: 'НТВ-Мир'
                }
            }
        ]
    }
};


