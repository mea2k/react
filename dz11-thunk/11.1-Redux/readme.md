## 11.1 - Redux

Список работ с возможностью добавления, удаления и фильтра.
Работа состоит из идентификатора (id), имени (name), стоимости (price) и информации (content).
Возможности:
* просмотр списка работ
* редактирование работ
* удаление работ

Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))


### Серверная часть
Серверная часть <ins>была модифицирована</ins> для корректной работы:
* подкручены события post
* подкручена обработка ctx.rexponse.body в POST-запросах
* добавлен параметр успешности выполнения запросов (для универсальности)
* другие мелкие правки.


### Клиентская часть

#### Хранилище (Store)
Хранилище реализовано в файле [Store](frontend/src/store/index.js):
* `services` - создается с помощью `createSlice` и реализовано в [serviceReducer.js](frontend/src/store/serviceReducer.js). Содержит:
  * `items[]` - массив элементов (`{id, name, price}`)
  * `selectedItem` - текущий элемент (`{id,name,price,content}`). При удалении содержит ID удаляемых элементов в формате `{...[id]: id}`. Это сделано для возможности удаления нескольких элементов одновременно.
  * `status` - статус выполняемой операции (`{'idle','loading','success','error')`}. Для удобства, используется экспортируемый тип данных `statusTypes` ([statusTypes.js](frontend/src/store/statusTypes.js))
* `server` - создается с помощью `createSlice` и реализовано в [serverReducer.js](frontend/src/store/serverReducer.js). Заполняется в `App.js`([frontend/src/App.js](frontend/src/App.js)). Содержит:
  * `mainUrl' - основной адрес backend-сервера
  * `actions` - дополнительные пути в зависимости от типа выполняемой операции (`{action,title,url}`)

#### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `serviceReducer` ([serviceReducer](frontend/src/store/serviceReducer.js) содержит реализацию событий:
  * `setItems` - заполнение массива элементов (payload - массив [{id, name, price}, ... ])
  * `selectItem` - выбор элемента  (payload - сам элемент {...})
  * `setSelectedItemData` - изменение полей выбранного элемента  (payload - {[param]: value, ...} (param - {name, price, content}))
  * `clearSelectedItem` - очистка выбранного элемента (payload - нет)
  * `setStatus` - изменение статуса выполняемой операции  (payload - {statusTypes.LOADING,statusTypes.ERROR,statusTypes.SUCCESS,statusTypes.IDLE})
* `serverReducer` ([serverReducer](frontend/src/store/serverReducer.js) содержит реализацию событий:
  * `setMainUrl` - установка адреса backend-сервера (payload - url)
  * `addActionUrl` - установка дополнительного URL для того или иного действия (payload - {action, title, url})

### API
Для упрощения генерации событий и работы со store используются API-функции из своей библиотеки [frontend/src/api/index.js](frontend/src/api/index.js):
* `getServiceFunc(url, reducer)` - универсальная обертка для вызова GET-событий из блока services в store. 
  При работе функции меняется status (LOADING --> SUCCESS/ERROR). После получения данных (data) вызывается обработчик reducer(data) (второй параметр функции).
* `async postServiceReducerFunc(url, reducer, body, type="POST")` - универсальная обертка для вызова POST/DELETE-событий из блока services в store. 
  При работе функции меняется status (LOADING --> SUCCESS/ERROR). В качестве тела запроса отправляется body. После получения данных (data) вызывается обработчик reducer(data) (второй параметр функции).
* `async postServiceFunc(url, body, type = "POST")` - универсальная обертка для вызова POST/DELETE-событий из блока services в store БЕЗ обработчика события. Функция возвращает Promise(). 
  При работе функции меняется status (только LOADING). Ошибки НЕ отлавливаются. В качестве тела запроса отправляется body. После отправки данных возвращается Promise().

* `getServiceList(url)` - формирование массива элементов. Использует универсальную  `getServiceFunc()` и генератор события `setItems()`.
* `getServiceItem(url)` - получение информации о выбранном элементе. ID передается в строке url. Использует универсальную  `getServiceFunc()` и генератор события `selectItem()`.
* `delServiceItem(url, id)` - удаление отдельного элемента. ID передается как в самой строке url, так и отдельно (нужен и там и там). Использует универсальную  `postServiceFunc()` и генератор события `setSelectedItemData(id)`.

#### Переходы (routers)
Схема переходов описана в [App.js](frontend/src/App.js). Отображаемые компоненты реализованы в папке (layouts)[frontend/src/layouts]):
* `/` - главная страница (отображается `MainPage`([frontend/src/layouts/MainPage/index.js](frontend/src/layouts/MainPage/index.js)) - происходит перенаправление на `/services/`
* `/services` - список работ (отображается `ServiceListPage`([frontend/src/layouts/ServiceListPage/index.js](frontend/src/layouts/ServiceListPage/index.js)) 
* `/services/:id` - форма редактирования информации о выбранной работы (id) (отображается `ServiceItemPage`([frontend/src/layouts/ServiceItemPage/index.js](frontend/src/layouts/ServiceItemPage/index.js)) 


#### Компоненты
Реализованы компоненты:
* `ServiceList` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - отображение списка работ
  * подключает  `items`, `selectedItem`, `status`, `mainUrl`, `actions` из глобального `store`
  * вся логика удаления информации реализована внутри. Для этого используется `selectedItem` 
  * используется только глобальный store, а именно - `items`
  * для отображения одного элемента используется `ListItem` ([frontend/src/components/ServiceList](frontend/src/components/ServiceList/index.js)) - это _"глупый компонент"_
* `ServiceForm` ([frontend/src/components/ServiceForm](frontend/src/components/ServiceForm/index.js)) - форма редактирования элемента
  * подключает  `selectedItem`, `status`, `mainUrl`, `actions` из глобального `store`
  * вся логика изменения и сохранения информации реализована внутри
  * используется только глобальный store, а именно - `selectedItem`  

Дополнительно реализованы:
* Иконки ([frontend/src/components/icons](frontend/src/components/icons/index.js)):
  * `ActionIcon` - иконка с возможностью запуска обработчика клика (тип иконки(стиль) и обработчик передаются в параметрах)
  * `Spin` - "крутилка" для индикатора загрузки
  * `EditIcon` - иконка "Редактирование" (на основе `ActionIcon`)
  * `DelIcon` - иконка "Удаление" (на основе `ActionIcon`)
  * `LoadIcon`- иконка "Загрузка" (на основе `Spin`)
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - большой индикатор загрузки (на основе `Spin`)
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке

