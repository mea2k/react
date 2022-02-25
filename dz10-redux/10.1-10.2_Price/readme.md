## 10.1-10.2 - REDUX

Список работ с вохможностью добавления, удаления и фильтра.
Работа состоит из имени (name) и стоимости (price).
Фильтр по полям: имя (name), мин.цена (minPrice), макс.цена (maxPrice)


### Хранилице (Store)
Хранилище реализовано в файле [Store](src/store/index.js):
* `items` - создается с помощью `createSlice` - содержит:
  * массив элементов `items[]` (`{id, name, price}`)
  * ID выбранного элемента `selectedId` (используется для отображения полей элемента в форме)
* `filter` - поля фильтрации списка работ:
  * `name` - наименование работ (ищется подстрока)
  * `minPrice` - минимальная цена (стоимость работ >= minPrice)
  * `maxPrice` - максимальная цена (стоимость работ <= maxPrice)

### Обработчики событий (Reducers)
Обработчики событий (не знаю как по-русски правильно reducers):
* `itemsReducer` ([itemsReducer](src/store/itemsReducer.js) содержит реализацию событий:
  * `createItem` - добавление элемента (payload - {name, price}, id добавляется автоматически)
  * `updateItem` - обновление элемента (payload - {id, name, price})
  * `deleteItem` - удаление элемента (payload - { id })
  * `selectItem` - выбор элемента для редактирвоания (payload - id)
* `filterReducer` ([filterReducer](src/store/filterReducer.js) содержит реализацию событий:
  * `setFilter` - установка фильтра (payload - {name, minPrice, maxPrice})
  * `clearFilter` - очистка фильтра (payload - нет)

### Компоненты
Реализованы компоненты:
* `Filter` ([src/components/Filter](src/components/Filter/index.js)) - отображение строки фильтров
  * Информация берется из state.filter.filter
* `ItemForm` ([src/components/ItemForm](src/components/ItemForm/index.js)) - форма по добавлению/изменению элемента
  * информация берется из store.items.items и store.items.selectedId
  * Помимо этого есть свое внутреннее состояние для хранения имени и стоимости текущей редактируемой/изменяемой работы. 
  * При нажатии на кнопку - вызывается событие createItem или updateItem.
* `ItemsList` ([src/components/ItemList](src/components/ItemsList)) - отображение списка работ
  * информация берется из store.items.items и store.filter.filter
  * отображение отдельного элемнета списка реализовано в компоненте `ListItem` ([ListItem.js](src/components/ItemsList/ListItem.js))
