## 9.1 - Menu

Используются:
* новая версия `Route`:
`<Route path="" element={<Element ... />} />`
* новая версия NavLink:
`<NavLink to="" className={(isActive) => isActive ? 'activeClass' : 'class'}>link</NavLink>`

Реализованы компоненты:
* `Menu` ([src/components/Menu](src/components/Menu)) - отображение меню с использованием NavLink
  * вся информация передается в качестве атрибутов (`data`)
* `Article` ([src/components/Article](src/components/Article)) - универсальный компонент отображения текста
  * атрибуты:
    * `title` - заголовок
    * `info` - массив строк (каждая строка - абзац) - отображаемая информация
