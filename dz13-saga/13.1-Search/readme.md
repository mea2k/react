## 13.1 - Search

Форма поиска работ по имени и стоимости
Работа состоит из идентификатора (id), имени (name), стоимости (price) и информации (content).
Возможности:
* поиск по имени работы
* поиск по стоимости работы

Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))


### Серверная часть
Серверная часть:
* `GET /api/search/?name=value&price=value`
* возвращается результат поиска (работы заданы константным массивом в коде серверной части)

ИЛИ

* ошибку (500).


### Клиентская часть

#### Хранилище (Store)
Хранилище реализовано в файле [Store](frontend/src/store/index.js):
* `services` - создается с помощью `createSlice` и реализовано в [serviceReducer.js](frontend/src/store/serviceReducer.js). Содержит:
  * `items[]` - массив элементов (`{id, name, price}`)
  * `search` - объект поиска (`{name,price}`). Заполняется из формы поиска при любом изменении значения поля.
  * `status` - статус выполняемой операции (`{'idle','loading','success','error')`}. Для удобства, используется экспортируемый тип данных `statusTypes` ([storeTypes.js](frontend/src/store/storeTypes.js))

К хранилищу подключено `middleware: sagaMiddleware`.
Тут же запускается главная Saga:
`sagaMiddleware.run(saga);`

#### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `serviceReducer` ([serviceReducer](frontend/src/store/serviceReducer.js)) содержит реализацию событий:
  * `requestItems` - запрос на получение списка работ (`items=[]`). Статус status устанавливается в 'Loading'
  * `setItemsSuccess` - заполнение массива элементов (payload - массив `[{id, name, price}, ... ]`). Статус status устанавливается в 'Success'
  * `setItemsError` - фиксация ошибки получения списка работ (`items=[]`). Статус status устанавливается в 'Error'
  * `requestSearchString` - запрос на изменение полей поиска. STORE не меняется. Событие нужно для отлова сагами.
  * `setSearchString` - сохранение полей поиска (name, price). Payload: `{[param]: value, ...}` (param - `{ name, price }`). Изменения _дозаписываются_ в имеющиеся значения фильтра поиска.
Пустые поля удаляются.

### Sagas
В файле [sagas/index.js](frontend/src/sagas/index.js) используются следующие саги:
1. `function* watchChangeSearchSaga()` - функция-генератор - наблюдатель (watcher). 
   * Перехватывает события - `requestSearchString` - запрос на изменение фильтра поиска
   * Вызывает обработчик - `handleChangeSearchSaga` с задержкой 100мс (debounce)
2. `function* handleChangeSearchSaga(action)` - функция-генератор - работник (worker)
   * Обрабатывает событие - `requestSearchString`
   * Удаляет лишние пробелы из фильтра поиска
   * Формирует новое событие - `setSearchString` и сохраняем в STORE новое значение фильтров поиска (без пробелов и пустых элементов)    
   * Если фильтр не пустой - формируется еще одно событие - `requestItems` - запрос на список работ    
3. `function* watchRequestItemsSaga()` - функция-генератор - наблюдатель (watcher)
   * Перехватывает события - `requestItems`
   * Запускает обработчик события `handleRequestItemsSaga` только на последнее (takeLatest), остальные - отменяются
4. `function* handleRequestItemsSaga(action)` - функция-генератор - работник (worker)
   * Обрабатывает событие `requestItems`
   * Из STATE извлекается объект SEARCH (фильтр поиска)
   * Осуществляется вызов API-функции `api.getServiceList)`
   * По результатам формируется событие `setItemsSuccess` ИЛИ `setItemsError`

### API
Для работы с backend-сервером используются API-функции из своей библиотеки [frontend/src/api/index.js](frontend/src/api/index.js):
* `async getServiceList(url, search)` - формирование GET-запроса со строкой поиска (?name=vvv&price=xxx)
  * PARAMS:
    * url - адрес обращения на сервер
    * search - фильтр поиска ({name, price})
  * RETURN
    * Promise() после data.json()

 
#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `status` из глобального `store`
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList/ListItem.js](frontend/src/components/ServiceList/ListItem.js)) - это _"глупый компонент"_
* `SearchForm` ([frontend/src/components/SearchForm](frontend/src/components/SearchForm/index.js)) - форма поиска
  * подключает  `search`, `status` из глобального `store`
  * вся логика изменения и сохранения фильтров поиска завязана на событиях `requestSearchString`, которые обрабатываются Saga-ми
  
Дополнительно реализованы:
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - большой индикатор загрузки (на основе `Spin`)
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке

#### Страницы
Реализованы страницы:
* `MainPage` ([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - главная страница
  * отображает форму поиска (`SearchForm`)
  * отображает список работ (`ServiceList`)
 
 
 #### App.js
 В главном файле ([frontend/src/App.js](frontend/src/App.js)) подгружается константа с URL-ом сервера - `SERVERURL` ([frontend/src/const.js](frontend/src/const.js))
