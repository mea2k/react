## 13.2 - Список и детали

Список работ с возможностью просмотра деталей каждой работы.
Работа состоит из идентификатора (id), имени (name), стоимости (price) и информации (content).
Возможности:
* просмотр списка работ
* просмотра карточки работ

Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))

Задействованы модули:
* `react-router-dom`
* `redux`
* `redux-saga`


### Серверная часть
Серверная часть модифицирована ([backend/server.js](backend/server.js)):
* добавлена возможность определения вероятности успеха при обработки GET-запросов
* `GET /api/services` - возвращается список работ (работы заданы константным массивом в коде серверной части)
* `GET /api/services/:id` - возвращается информацию по работе (id) (id,name,price,content)

ИЛИ

* ошибку (500).


### Клиентская часть

#### Хранилище (Store)
Хранилище реализовано в файле [Store](frontend/src/store/index.js):
* `services` - создается с помощью `createSlice` и реализовано в [serviceReducer.js](frontend/src/store/serviceReducer.js). Содержит:
  * `items[]` - массив элементов (`{id, name, price}`)
  * `selectedItem` - детали выбранной работы (`{id,name,price,content}`)
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
  * `requestItemDetails` - запрос на получение деталей выбранной работы (`selectedItem={}`). Статус status устанавливается в 'Loading'
  * `setItemDetailsSuccess` - сохранение информации о выбранной работе (payload - `{id, name, price,content}`). Статус status устанавливается в 'Success'
  * `setItemDetailsError` - фиксация ошибки получения информации о выбранной работе (`selectedItem={}`). Статус status устанавливается в 'Error'

### Saga
В файле [sagas/index.js](frontend/src/sagas/index.js) используются следующие саги:
1. `function* watchRequestItemsSaga()` - функция-генератор - наблюдатель (watcher)
   * Перехватывает события - `requestItems` - запрос на получение списка работ
   * Вызывает обработчик - `handleRequestItemsSaga` (последний запрос - takeLatest - остальные отменяются)
2. `function* handleRequestItemsSaga(action)` - функция-генератор - работник (worker)
   * Обрабатывает событие - `requestItems`
   * Осуществляется вызов API-функции `api.getServiceList()`
   * По результатам формируется событие `setItemsSuccess` ИЛИ `setItemsError`  
3. `function* watchRequestItemDetailsSaga()` - функция-генератор - наблюдатель (watcher)
   * Перехватывает события - `requestItemDetails` - запрос на получение деталей выбранной работы
   * Вызывает обработчик - `handleRequestItemDetailsSaga` (последний запрос - takeLatest - остальные отменяются)
4. `function* handleRequestItemDetailsSaga(action)` - функция-генератор - работник (worker)
   * Обрабатывает событие - `requestItemDetails`
   * Осуществляется вызов API-функции `api.getServiceItemDetails()`
   * По результатам формируется событие `setItemsSuccess` ИЛИ `setItemsError`  

В файле также подгружается константа с URL-ом сервера - `URL` ([frontend/src/const.js](frontend/src/const.js)). Она используется в сагах для вызова API-функций.
 
 
#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `status` из глобального `store`
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList/ListItem.js](frontend/src/components/ServiceList/ListItem.js)) - это _"глупый компонент"_
  * при загрузке инициирует событие requestItems, дальше срабатывает поток Epic-а (requestItemsEpic)
* `ServiceCard` ([frontend/src/components/ServiceCard](frontend/src/components/ServiceCard/index.js)) - карточка работы
  * подключает  `selectedItem`, `status` из глобального `store`
  * при загрузке инициирует событие requestItemDetails, дальше срабатывают саги в middleware(watchRequestItemsSaga)
  
Дополнительно реализованы:
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - большой индикатор загрузки (на основе `Spin`)
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке

#### Страницы (layouts)
Реализованы страницы:
* `MainPage` ([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - главная страница
  * автоматически переходит на `/services`
* `ServiceListPage` ([frontend/src/layouts/ServiceListPage/index.js](frontend/src/layouts/ServiceListPage/index.js)) - список работ
  * отображает список работ (`ServiceList`)
* `ServiceItemPage` ([frontend/src/layouts/ServiceItemPage/index.js](frontend/src/layouts/ServiceItemPage/index.js)) - детали выбранной работы
  * отображает карточку выбранной работы (`ServiceCard`)


#### Переходы (routers)
Схема переходов описана в [App.js](frontend/src/App.js). Отображаемые компоненты реализованы в папке [layouts](frontend/src/layouts):
* `/` - главная страница (отображается `MainPage`([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - происходит перенаправление на `/services/`
* `/services` - список работ (отображается `ServiceListPage`([frontend/src/layouts/ServiceListPage/index.js](frontend/src/layouts/ServiceListPage/index.js)) 
* `/services/:id` - форма редактирования информации о выбранной работы (id) (отображается `ServiceItemPage`([frontend/src/layouts/ServiceItemPage/index.js](frontend/src/layouts/ServiceItemPage/index.js)) 

 
 
