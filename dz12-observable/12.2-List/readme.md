## 12.2 - Список и детали

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
* `redux-observable`
* `rxjs`


### Серверная часть
Серверная часть модифицирована ([backend](backend/server.js)):
* добавлена вохможность определения вероятности успеха при обработки GET-запросов
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

К хранилищу подключено `middleware: epicMiddleware`.
Тут же запускаются потоки EPIC
`epicMiddleware.run(epic);`

#### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `serviceReducer` ([serviceReducer](frontend/src/store/serviceReducer.js)) содержит реализацию событий:
  * `requestItems` - запрос на получение списка работ (`items=[]`). Статус status устанавливается в 'Loading'
  * `setItemsSuccess` - заполнение массива элементов (payload - массив `[{id, name, price}, ... ]`). Статус status устанавливается в 'Success'
  * `setItemsError` - фиксация ошибки получения списка работ (`items=[]`). Статус status устанавливается в 'Error'
  * `requestItemDetails` - запрос на получение деталей выбранной работы (`selectedItem={}`). Статус status устанавливается в 'Loading'
  * `setItemDetailsSuccess` - сохранение информации о выбранной работе (payload - `{id, name, price,content}`). Статус status устанавливается в 'Success'
  * `setItemDetailsError` - фиксация ошибки получения информации о выбранной работе (`selectedItem={}`). Статус status устанавливается в 'Error'
  * `setStatus` - изменение статуса выполняемой операции  (payload - `{statusTypes.LOADING,statusTypes.ERROR,statusTypes.SUCCESS,statusTypes.IDLE}`)

### EPICS
В файле [epics/index.js](frontend/src/epics/index.js) используется 2 потока:
1. `requestItemsEpic` - для событий получения списка работ. Инициируется событием `requestItems`:
   
   а) проверка типа события (на соответствие типу requestItems)
   
   б) получение объекта для поиска (из payload - _он пустой_)

   в) запуск запроса к серверу с отменой предыдущих событий (switchMap)
   
   г) если данные получены - вызов события SUCCESS (setItemsSuccess)
   
   д) если ошибка - вызов события ERROR в новом потоке (setItemsError)

2. `requestItemDetailsEpic` - для событий получения информации о выбранной работе. Инициируется событием `requestItemDetails`:
   
   а) проверка типа события (на соответствие типу requestItemDetails)
   
   б) получение объекта для поиска (из payload - id)

   в) запуск запроса к серверу с отменой предыдущих событий (switchMap)
   
   г) если данные получены - вызов события SUCCESS (setItemDetailsSuccess)
   
   д) если ошибка - вызов события ERROR в новом потоке (setItemDetailsError)

 
 
#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `status` из глобального `store`
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList/ListItem.js](frontend/src/components/ServiceList/ListItem.js)) - это _"глупый компонент"_
  * при загрузке инициирует событие requestItems, дальше срабатывает поток Epic-а (requestItemsEpic)
* `ServiceCard` ([frontend/src/components/ServiceCard](frontend/src/components/ServiceCard/index.js)) - карточка работы
  * подключает  `selectedItem`, `status` из глобального `store`
  * при загрузке инициирует событие requestItemDetails, дальше срабатывает поток Epic-а (requestItemDetailsEpic)
  
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
Схема переходов описана в [App.js](frontend/src/App.js). Отображаемые компоненты реализованы в папке (layouts)[frontend/src/layouts]):
* `/` - главная страница (отображается `MainPage`([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - происходит перенаправление на `/services/`
* `/services` - список работ (отображается `ServiceListPage`([frontend/src/layouts/ServiceListPage/index.js](frontend/src/layouts/ServiceListPage/index.js)) 
* `/services/:id` - форма редактирования информации о выбранной работы (id) (отображается `ServiceItemPage`([frontend/src/layouts/ServiceItemPage/index.js](frontend/src/layouts/ServiceItemPage/index.js)) 

 
 #### App.js
 В главном файле ([frontend/src/App.js](frontend/src/App.js)) подшружается константа с URL-ом сервера - `SERVERURL` ([frontend/src/const.js](frontend/src/const.js))


