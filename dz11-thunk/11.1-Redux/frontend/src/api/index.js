import { store } from "../store";
import { selectItem, setItems, setSelectedItemData, setStatus } from "../store/serviceReducer"
import { statusTypes } from "../store/storeTypes"


// универсальная обертка для вызова GET-событий по services
// добавлены вызовы setStatus() до, после
// добавлен отлов ошибок
// PARAMS:
//    url - адрес обращения на сервер
//    reducer - функция обработчика события (reducer), вызываемая после получения данных от сервера
export const getServiceFunc = (url, reducer) => {
    // статус - загрузка
    store.dispatch(setStatus(statusTypes.LOADING));
    // основной блок - fetch
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // основной вызов reducer-а
            store.dispatch(reducer(data));
            // статус - успех
            store.dispatch(setStatus(statusTypes.SUCCESS));
        })
        .catch((e) => {
            // статус - ошибка
            store.dispatch(setStatus(statusTypes.ERROR));
        })
}


// универсальная обертка для вызова POST- и DELETE-событий по services
// добавлены вызовы setStatus() до, после
// добавлен отлов ошибок
// PARAMS:
//    url - адрес обращения на сервер
//    reducer - функция обработчика события (reducer), вызываемая после получения данных от сервера
//    body - тело запроса
//    type = тип запроса ({POST, UPDATE, DELETE})
export const postServiceReducerFunc = async (url, reducer, body, type="POST") => {
    // статус - загрузка
    store.dispatch(setStatus(statusTypes.LOADING));
    const headers = {
        method: type,
        body: JSON.stringify(body)
    };
    // основной блок - fetch
    fetch(url, headers)
        .then((res) => res.text())
        .then((data) => {
            // основной вызов reducer-а
            store.dispatch(reducer(data));
            // статус - успех
            store.dispatch(setStatus(statusTypes.SUCCESS));
            console.log('ok')
            return data;
        })
        .catch((e) => {
            // статус - ошибка
            store.dispatch(setStatus(statusTypes.ERROR));
        })
}


// универсальная обертка для вызова POST- и DELETE-событий по services
// добавлены вызовы setStatus() до
// PARAMS:
//    url - адрес обращения на сервер
//    body - тело запроса
//    type = тип запроса ({POST, UPDATE, DELETE})
//  RETURN Promise
export const postServiceFunc = async (url, body, type = "POST") => {
    // статус - загрузка
    store.dispatch(setStatus(statusTypes.LOADING));
    const headers = {
        method: type,
        body: JSON.stringify(body)
    };
    // основной блок - fetch
    return fetch(url, headers)
}



// формирование массива элементов
// используется генератор события setItems()
export const getServiceList = (url) => {
    getServiceFunc(url, setItems);
}

// получение значения отдельного элемента
// исопльзуется генератор события selectItem()
export const getServiceItem = (url) => {
    getServiceFunc(url, selectItem);
}


// удаление отдельного элемента
export const delServiceItem = (url, id, handleIfSuccess) => {
    // сохранение удаляемого элемента
    store.dispatch(setSelectedItemData(id));
    // возвращаем Promise
    return postServiceFunc(url, { id }, "DELETE");
}

