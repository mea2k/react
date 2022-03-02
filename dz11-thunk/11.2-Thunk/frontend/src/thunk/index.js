import { selectItem, setItems, setSelectedItemData, setStatus, clearSelectedItem } from "../store/serviceReducer"
import { statusTypes } from "../store/storeTypes"


// универсальная обертка для вызова GET-событий по блоку services
// добавлены вызовы setStatus() до, после
// добавлен отлов ошибок
// PARAMS:
//    actionType - тип события (по нему формируется url)
//    reducer - функция обработчика события (reducer), вызываемая после получения данных от сервера
// сам URL приезжает третьим параметром (extraArgument) 
export const getServiceReducerFunc = (actionType, reducer, id = '') => (dispatch, getState, extraArgument) => {
    const { mainUrl, actions } = extraArgument.URL;
    // статус - загрузка
    dispatch(setStatus(statusTypes.LOADING));
    // основной блок
    // url формируется из экстра-параметра и типа события (1й параметр thunk-функции)
    fetch(mainUrl + actions[actionType].url + id )
        .then((res) => res.json())
        .then((data) => {
            // основной вызов reducer-а (2й параметр thunk-функции)
            dispatch(reducer(data));
            // статус - успех
            dispatch(setStatus(statusTypes.SUCCESS));
        })
        .catch((e) => {
            // статус - ошибка
            dispatch(setStatus(statusTypes.ERROR));
        })
}


// универсальная обертка для вызова POST- и DELETE-событий по блоку services
// добавлены вызовы setStatus() до, после
// добавлен отлов ошибок
// PARAMS:
//    actionType - тип события (по нему формируется url)
//    reducer - функция обработчика события (reducer), вызываемая после получения данных от сервера
//    body - тело запроса
//    type - тип запроса ({POST, UPDATE, DELETE})
// сам URL приезжает третьим параметром (extraArgument)
export const postServiceReducerFunc = (actionType, reducer, body = {}, type = "POST") => async (dispatch, getState, extraArgument) => {
    const { mainUrl, actions } = extraArgument.URL;

    // статус - загрузка
    dispatch(setStatus(statusTypes.LOADING));

    const headers = {
        method: type,
        body: JSON.stringify(body)
    };
    // основной блок
    // url формируется из экстра-параметра и типа события (1й параметр thunk-функции)
    fetch(mainUrl + actions[actionType].url, headers)
        .then((res) => res.text())
        .then((data) => {
            // основной вызов reducer-а
            dispatch(reducer(data));
            // статус - успех
            dispatch(setStatus(statusTypes.SUCCESS));
            return data;
        })
        .catch((e) => {
            // статус - ошибка
            dispatch(setStatus(statusTypes.ERROR));
        })
}


// универсальная обертка для вызова POST- и DELETE-событий по блоку services
// добавлены вызовы setStatus() до
// PARAMS:
//    actionType - тип события (по нему формируется url)
//    body - тело запроса
//    type - тип запроса ({POST, UPDATE, DELETE})
//  RETURN Promise
export const postServiceFunc = (actionType, body = {}, type = "POST") => async (dispatch, getState, extraArgument) => {
    const { mainUrl, actions } = extraArgument.URL;

    // статус - загрузка
    dispatch(setStatus(statusTypes.LOADING));

    const headers = {
        method: type,
        body: JSON.stringify(body)
    };
    // основной блок - fetch
    // url формируется из экстра-параметра и типа события (1й параметр thunk-функции)
    return fetch(mainUrl + actions[actionType].url, headers)
}



// формирование массива элементов
// используется генератор события setItems()
export const getServiceList = (actionType) =>
    getServiceReducerFunc(actionType, setItems);


// получение значения отдельного элемента
// исопльзуется генератор события selectItem()
export const getServiceItem = (actionType, id) =>
    getServiceReducerFunc(actionType, selectItem, id);


// Очистка выбранногог элемента
// исопльзуется генератор события clearSelectedItem()
export const clearSelected = () => (dispatch, getState, extraArgument) => {
    dispatch(clearSelectedItem);
}


// удаление отдельного элемента
// добавлены вызовы setStatus() до
export const delServiceItem = (actionType, id) => async (dispatch, getState, extraArgument) => {
    // сохранение удаляемого элемента
    dispatch(setSelectedItemData({ [id]: id }));

    // статус - загрузка
    dispatch(setStatus(statusTypes.LOADING));

    const { mainUrl, actions } = extraArgument.URL;

    const headers = {
        method: "DELETE",
        body: JSON.stringify({ id })
    };
    // основной блок - fetch
    // url формируется из экстра-параметра и типа события (1й параметр thunk-функции)
    // возвращаем Promise
    return fetch(mainUrl + actions[actionType].url + '/' + id, headers)
}

