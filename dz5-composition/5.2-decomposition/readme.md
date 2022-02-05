## 5.2 - Декомпозиция (Яндекс)

На рисунке описаны выделенные области ([рисунок](screenshot_marked.png))
![avatar](screenshot_marked.png)

### 1 - NotifyCards - правое меню
Все компоненты в разделе cards:
* `UserInfo` ([/src/components/cards/UserInfo](src/components/cards/UserInfo))
* `WeatherCard` ([/src/components/cards/Weather](src/components/cards/Weather))

### 2 - TopRow - верхняя строка меню
Все компоненты в разделе headlines:
* `City` ([/src/components/headlines/City](src/components/headlines/City))
* `MenuBar` ([/src/components/headlines/MenuBar](src/components/headlines/MenuBar))
* меню `Settings` ([/src/components/headlines/Settings](src/components/headlines/Settings))

### 3 - TopBlock - верхний блок
Все компоненты в корневом разделе (src/components) и в разделе карточек (/src/components/cards):
* `TopNews` ([/src/components/TopNews](src/components/TopNews))
  * использует `NewsCard`(новости) ([/src/components/cards/NewsCard](src/components/cards/NewsCard))
    * `StaticList` - список новостей
    * `AnimatedList` - список сменяющихся новостей в одной строке - **!!вот тут проболема - не работает!!** 
  * использует `Stockings`(котировки) ([/src/components/cards/Stockings](src/components/cards/Stockings))

### 4 - Search - строка поиска
Все компоненты в корневом разделе (src/components/Search):
* `Search` ([/src/components/Search](src/components/Search))
    * `SearchLogo` - картинка поиска
    * `SearchBlock` - форма поиска
      * `ServiceLinks` - ссылки сверху строки поиска
      * `SearchForm` - сама строка поиска(форма)
      * `SearchExampleRow` - пример поиска

### 4 - Widgets - блоки с тематической информацией
Все компоненты в разделе widgets (src/components/widgets):
* `WeatherWidget` - прогноз погоды ([/src/components/widgets/Weather](src/components/Weather))
* `Services` - посещаемые сервисы Яндекс ([/src/components/widgets/Services](src/components/Services))
* `Region` - карта региона ([/src/components/widgets/Region](src/components/Region))
* `Programme` - ТВ-программа ([/src/components/widgets/Programme](src/components/Programme))
* `WeatherWidget` - прогноз погоды ([/src/components/widgets/Weather](src/components/Weather))
