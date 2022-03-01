## 11.1 - Redux
Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))

Серверная часть <ins>была модифицирована</ins> для корректной работы!!

В клиентской части реализованы компоненты:
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке
* Иконки ([frontend/src/components/icons](frontend/src/components/icons/index.js)):
  * `ActionIcon` - иконка с возможностью запуска обработчика клика (тип иконки(стиль) и обработчик передаются в параметрах)
  * `Spin` - "крутилка" для индикатора загрузки
  * `EditIcon` - иконка "Редактирование" (на основе `ActionIcon`)
  * `DelIcon` - иконка "Удаление" (на основе `ActionIcon`)
  * `LoadIcon`- иконка "Загрузка" (на основе `Spin`)
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - большой индикатор загрузки (на основе `Spin`)
* `ServiceForm` ([frontend/src/components/ServiceForm](frontend/src/components/ServiceForm/index.js)) - форма редактирования элемента
* 
* `Error` ([frontend/src/components/Error](frontend/src/components/Error/index.js)) - сообщение об ошибке

  * `PostListItem` ([frontend/src/components/PostListItem](frontend/src/components/PostList/PostListItem.js)) - элемент списка постов (с NavLink, который ведет на страницу поста)
* `PostItem` ([frontend/src/components/PostItem](frontend/src/components/PostItem/index.js)) - страница информации об одном посте (ID беретя из URL-а)
  * есть функция редактирования - переход на `/posts/{id}/edit`
  * есть функция удаления - удаляет без перезагрузки, а потом переходит на главную страницу 
* `PostForm` ([frontend/src/components/PostForm](frontend/src/components/PostForm/index.js)) - форма добавления/изменения поста
  * если передаётся ID, то это изменение
  * если ID нет - это добавление
 * `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - компонента загрузки - отображается, пока идет процесс загрузки

ROUTERS (реализованы в [App.js](frontend/src/App.js):
* `/` - главная страница (отображается `PostList`)
* `/posts/{id}` - страница выбранного поста (отображается `PostItem`)
* `/posts/{id}/edit` - страница редактирования поста с ID (отображается `PostForm`)
* `/posts/new` - страница добавления нового поста (отображается `PostForm`)

**P.S.** 
1) Используется новый `<Route path="" element={<Element ... />} />`.
2) Используется `navigate`, `useNavigate` вместо `histoty`.
