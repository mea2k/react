## 11.2 - Thunk

Список работ с возможностью добавления, удаления и фильтра.
Работа состоит из идентификатора (id), имени (name), стоимости (price) и информации (content).
Возможности:
* просмотр списка работ
* редактирование работ
* удаление работ

Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))

Функционал полностью повторяет [ДЗ11.1-Redux](../11.1-Redux).

### Серверная часть
Серверная часть полностью повторяет серверную часть из [ДЗ11.1-Redux](../11.1-Redux).


### Клиентская часть

#### Хранилище (Store)
Хранилище реализовано в файле [Store](frontend/src/store/index.js):
* `services` - создается с помощью `createSlice` и реализовано в [serviceReducer.js](frontend/src/store/serviceReducer.js). Содержит:
  * `items[]` - массив элементов (`{id, name, price}`)
  * `selectedItem` - текущий элемент (`{id,name,price,content}`). При удалении содержит ID удаляемых элементов в формате `{...[id]: id}`. Это сделано для возможности удаления нескольких элементов одновременно.
  * `status` - статус выполняемой операции (`{'idle','loading','success','error')`}. Для удобства, используется экспортируемый тип данных `statusTypes` ([storeTypes.js](frontend/src/store/storeTypes.js))

При создании хранилища используются промежуточные обработчики - thunk, в котором настроен дополнительный параметр для всех Thunk-функций:
`getDefaultMiddleware({
            thunk: {
                extraArgument: { URL }
            }`
URL берется из константы [frontend/src/const.js](frontend/src/const.js) - содержит пути до backend-сервера и дополнительные пути к используемым модулям.

Также реализован дополнительный промежуточный обработчик - логирование событий хранилища 

`changeStatusBefore = (store) => (next) => async (action) => {...}` 

в файле [serviceReducer.js](frontend/src/store/serviceReducer.js).


#### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `serviceReducer` ([serviceReducer](frontend/src/store/serviceReducer.js) содержит реализацию событий:
  * `setItems` - заполнение массива элементов (payload - массив [{id, name, price}, ... ])
  * `selectItem` - выбор элемента  (payload - сам элемент {...})
  * `setSelectedItemData` - изменение полей выбранного элемента  (payload - {[param]: value, ...} (param - {name, price, content}))
  * `clearSelectedItem` - очистка выбранного элемента (payload - нет)
  * `setStatus` - изменение статуса выполняемой операции  (payload - {statusTypes.LOADING,statusTypes.ERROR,statusTypes.SUCCESS,statusTypes.IDLE})


### Thunk
Для упрощения генерации событий и работы со store используются Thunk-функции [frontend/src/thunk/index.js](frontend/src/thunk/index.js):
* `getServiceReducerFunc(actionType, reducer, id='')` - универсальная обертка для вызова GET-событий из блока services в store. 
  При работе функции меняется status (LOADING --> SUCCESS/ERROR). После получения данных (data) вызывается обработчик reducer(data) (второй параметр функции).
  actionType - указывает тип события (url берется из 3-го параметра extraArgument thunk-функции)
* `async postServiceReducerFunc(actionType, reducer, body={}, type="POST")` - универсальная обертка для вызова POST/DELETE-событий из блока services в store. 
  При работе функции меняется status (LOADING --> SUCCESS/ERROR). В качестве тела запроса отправляется body. После получения данных (data) вызывается обработчик reducer(data) (второй параметр функции).
  actionType - указывает тип события (url берется из 3-го параметра extraArgument thunk-функции)
* `async postServiceFunc(actionType, body={}, type="POST")` - универсальная обертка для вызова POST/DELETE-событий из блока services в store БЕЗ обработчика события. Функция возвращает Promise(). 
  При работе функции меняется status (только LOADING). Ошибки НЕ отлавливаются. В качестве тела запроса отправляется body. После отправки данных возвращается Promise().
* `getServiceList(actionType)` - формирование массива элементов. Использует универсальную  `getServiceReducerFunc()` и генератор события `setItems()`.
* `getServiceItem(actionType, id)` - получение информации о выбранном элементе ID. Использует универсальную  `getServiceReducerFunc()` и генератор события `selectItem()`.
* `clearSelected()` - очистка информации о выбранном/выбранных элементах (selectedItem в store).  Использует генератор события `clearSelectedItem()`.
* `delServiceItem(actionType, id)` - удаление отдельного элемента по ID. При работе функции меняется status (только LOADING). Ошибки НЕ отлавливаются. После отправки данных возвращается Promise().


#### Переходы (routers)
Схема переходов описана в [App.js](frontend/src/App.js). Отображаемые компоненты реализованы в папке (layouts)[frontend/src/layouts]):
* `/` - главная страница (отображается `MainPage`([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - происходит перенаправление на `/services/`
* `/services` - список работ (отображается `ServiceListPage`([frontend/src/layouts/ServiceListPage/index.js](frontend/src/layouts/ServiceListPage/index.js)) 
* `/services/:id` - форма редактирования информации о выбранной работы (id) (отображается `ServiceItemPage`([frontend/src/layouts/ServiceItemPage/index.js](frontend/src/layouts/ServiceItemPage/index.js)) 


#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `selectedItem`, `status` из глобального `store`
  * вся логика удаления информации реализована внутри. Для этого используется `selectedItem` 
  * работа со store строится через thunk-функции (`dispatch(thunk.function(..))`)
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - это _"глупый компонент"_
* `ServiceForm` ([frontend/src/components/ServiceForm](frontend/src/components/ServiceForm/index.js)) - форма редактирования элемента
  * подключает  `selectedItem`, `status` из глобального `store`
  * вся логика изменения и сохранения информации реализована внутри
  * работа со store строится через thunk-функции (`dispatch(thunk.function(..))`)

Дополнительно реализованы:
* Иконки ([frontend/src/components/icons](frontend/src/components/icons/index.js)):
  * `ActionIcon` - иконка с возможностью запуска обработчика клика (тип иконки(стиль) и обработчик передаются в параметрах)
  * `Spin` - "крутилка" для индикатора загрузки
  * `EditIcon` - иконка "Редактирование" (на основе `ActionIcon`)
  * `DelIcon` - иконка "Удаление" (на основе `ActionIcon`)
  * `LoadIcon`- иконка "Загрузка" (на основе `Spin`)
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - большой индикатор загрузки (на основе `Spin`)
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке

