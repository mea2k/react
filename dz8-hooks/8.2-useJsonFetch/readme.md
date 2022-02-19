## 8.2 - Собственный хук (useJsonFetch)

В проект входит:
* серверная часть (backend) - [backend](backend) - _взят готовый из задания_
* клиентская часть (frontend) - [frontend](frontend)

Используемые компоненты:
* `Item` ([frontend/src/components/Item](frontend/src/components/Item)) - отображение loading, error, data
* собственный хук `useJsonFetch` ([frontend/src/effects/useJsonFetch.js](frontend/src/effects/useJsonFetch.js))

В `App.js` ([frontend/src/App.js](frontend/src/App.js)) создаются 3 объекта `Item`:
* для корректной загрузки данных (http://localhost:7070/data)
* для ошибки (http://localhost:7070/error)
* для задержки загрузки данных (http://localhost:7070/loading)


