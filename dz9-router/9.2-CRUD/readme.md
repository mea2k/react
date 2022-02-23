## 9.2 - CRUD
Проект состоит из 2 частей:
* серверная часть ([backend](backend))
* клиентская часть ([frontend](frontend))

Серверная часть была модифицирована для работы URL: `/posts/{id}`

В клиентской части реализованы компоненты:
* `PostList` ([frontend/src/components/PostList](frontend/src/components/PostList/)) - список постов + ссылка на добавление нового поста
  * 'PostListItem` ([frontend/src/components/PostListItem](frontend/src/components/PostList/PostListItem.js)) - элемент списка постов (с NavLink, который ведет на страницу поста)
* `PostItem` ([frontend/src/components/PostItem](frontend/src/components/PostItem/index.js)) - страница информации об одном посте (ID беретя из URL-а)
  * есть функция редактирования - переход на /posts/{id}/edit
  * есть функция удаления - удаляет без перезагрузки, а потом переходит на главную страницу 
* `PostForm` ([frontend/src/components/PostForm](frontend/src/components/PostForm/index.js)) - форма добавления/изменения поста
  * если передаётся ID, то это изменение
  * если ID нет - это добавление
 * `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading/index.js)) - компонента загрузки - отображается, пока идет процесс загрузки

ROUTERS (реализованы в [App.js](frontend/src/App.js):
* `/` - главная страница (отображается `PostList`)
* '/posts/{id}` - страница выбранного поста (отображается `PostItem`)
* '/posts/{id}/edit' - страница редактирования поста с ID (отображается `PostForm`)
* '/posts/new` - страница добавления нового поста (отображается `PostForm`)
