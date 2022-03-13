import { take, put, spawn, debounce, call, takeLatest, select } from 'redux-saga/effects';

import { actions } from '../store/serviceReducer';
import * as api from '../api';

import { SERVERURL } from '../const';

// Проверка на тип события и полноту строки поиска
const filterSearchAction = (action) => (
    actions.requestSearchString.match(action) && action.payload && Object.keys(action.payload).length > 0
);

// Функция-генератор - наблюдатель (watcher)
// перехватывает тип события - requestSearchString
function* watchChangeSearchSaga() {
    // задержка на срабатываение - 100мс
    yield debounce(100, filterSearchAction, handleChangeSearchSaga);
}


// Функция-генератор - работник (worker)
// Запускается наблюдателем (watchChangeSearchSaga) 
// для обработки события типа requestSearchString
function* handleChangeSearchSaga(action) {
    // удаление пробелов из фильтра поиска (action.payload)
    var search = Object.keys(action.payload).reduce((prev, key) => ({ ...prev, [key]: action.payload[key].trim() }), {});

    // если фильтр поиска не пуст, формируем новое событие - requestItems
    if (Object.keys(search).length > 0) {
        // формируем новое событие - setSearchString и сохраняем в STORE новое значение фильтров поиска (без пробелов и пустых элементов)    
        yield put(actions.setSearchString(search));
        // формируем новое событие - requestItems    
        yield put(actions.requestItems());
    }
}


// Функция-генератор - наблюдатель (watcher)
// перехватывает тип события - requestItems
function* watchRequestItemsSaga() {
    // запускается последнее, остальные - отменяются
    yield takeLatest(actions.requestItems, handleRequestItemsSaga);
}


// Функция-генератор - работник (worker)
// Запускается наблюдателем (watchRequestItemsSaga)
// для обработки события типа requestItems
function* handleRequestItemsSaga(action) {
    try {
        // из STATE берем объект SEARCH (фильтр поиска)
        const search = yield select((state) => state.services.search)

        const data = yield call(api.getServiceList, SERVERURL, search);
        yield put(actions.setItemsSuccess(data));
    } catch (e) {
        yield put(actions.setItemsError(e.message));
    }
}



// Корневая saga
export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchRequestItemsSaga);
}

