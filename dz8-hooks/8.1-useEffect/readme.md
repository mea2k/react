## 8.1 - useEffect

Используемые компоненты:
* `List` ([src/components/List](src/components/List)) - отображение списка пользователей
* `Details` ([src/components/Details](src/components/Details)) - отображение детальной информации выбранного пользователя
* `Loader` ([src/components/Loader](src/components/Loader)) - индикатор загрузки

Используемые данные:
* список пользователей ([public/data/users.json](public/data/users.json))
* информация по пользователям ([public/data/NN.json](public/data/))

Логика работы:
1) В основном компоненте `App` ([src/App.js](src/App.js)) отображаются `List` и `Details`
2) В `App` в состоянии сохраняется ID выбранного пользователя (`userId`).
3) При выборе пользователя из компонента `List` запускается функция внутри App - `handleSelectUser`
4) Если `userId` не пустое, отображается `Details`.
5) Сам `Details` внутри себя формирует fetch-запрос по URL и userId, и отображает индикатор загрузки (`Loader`), пока запрос не выполнится.
