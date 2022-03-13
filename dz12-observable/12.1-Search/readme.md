## 12.1 - Search

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

К хранилищу подключено `middleware: epicMiddleware`.
Тут же запускаются потоки EPIC
`epicMiddleware.run(epic);`

#### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `serviceReducer` ([serviceReducer](frontend/src/store/serviceReducer.js)) содержит реализацию событий:
  * `requestItems` - запрос на получение списка работ (`items=[]`). Статус status устанавливается в 'Loading'
  * `setItemsSuccess` - заполнение массива элементов (payload - массив `[{id, name, price}, ... ]`). Статус status устанавливается в 'Success'
  * `setItemsError` - фиксация ошибки получения списка работ (`items=[]`). Статус status устанавливается в 'Error'
  * `setSearchString` - сохранение полей поиска (name, price) в search. payload: `{[param]: value, ...}` (param - `{ name, price }`)
  * `clearSearchString` - очистка полей поиска (`search=[]`)
  * `setStatus` - изменение статуса выполняемой операции  (payload - `{statusTypes.LOADING,statusTypes.ERROR,statusTypes.SUCCESS,statusTypes.IDLE}`)

### EPICS
В файле [epics/index.js](frontend/src/epics/index.js) используется 2 потока:
1. `changeSearchEpic` - для событий `setSearchString`:
   
   а) проверка типа события (на соответствие типу setSearchString)
   
   б) вызов trim() для всех полей поиска из state.search
   
   в) удаление пустых полей из state.search
   
   г) установка задержки на следующее событие (100мс)
   
   д) вызов генератора события - requestItems

2. `requestItemsEpic`  для событий `requestItems`:
   
   а) проверка типа события (на соответствие типу requestItems)
   
   б) получение объекта для поиска (из action.payload)
   
   в) запуск запроса к серверу с отменой предыдущих (switchMap)
   
   г) Создание нового потока с вызовом события успеха - setItemsSuccess
   
   д) Создание нового потока с вызовом события ошибки - setItemsError
 
 
#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `status` из глобального `store`
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList/ListItem.js](frontend/src/components/ServiceList/ListItem.js)) - это _"глупый компонент"_
* `SearchForm` ([frontend/src/components/SearchForm](frontend/src/components/SearchForm/index.js)) - форма поиска
  * подключает  `search`, `status` из глобального `store`
  * вся логика изменения и сохранения фильтров поиска завязана на событиях setSearchString, которые обрабатываются Epic-ами
  
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
