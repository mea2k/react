## 8.1 - useEffect

Используемые компоненты:
`Crud` ([frontend/src/components/Crud](frontend/src/components/Crud)) - основной компонент - вся логика и запросы CRUD реализованы тут
* `NotesForm` ([frontend/src/components/NotesForm](frontend/src/components/NotesForm)) - форма добавления новой заметки
* `Notes` ([frontend/src/components/Notes](frontend/src/components/Notes)) - область отображения всех заметок
  * `NoteItem` ([frontend/src/components/NoteItem](frontend/src/components/NoteItem)) - карточка для заметки

Дополнительно реализованы:
* `UpdateIcon` ([frontend/src/components/UpdateIcon](frontend/src/components/UpdateIcon)) - иконка обновления списка заметок
* `Loading` ([frontend/src/components/Loading](frontend/src/components/Loading)) - иконка загрузки - отображается вместо Notes, когда идет загрузка данных

CRUD:
* Create - реалиована функция `handleCreate` в Crud
* Update - реалиована функция `handleUpdate` в Crud (добавлена искусственная задержка в 1000 мс)
* Delete - реалиована функция `handleDelete` в Crud

Эти функции передаются в качетстве аргументов (props) соответствующим компонентам.
