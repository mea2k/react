import { take, put, spawn, debounce, call, takeLatest } from 'redux-saga/effects';

import { actions } from '../store/serviceReducer';
import * as api from '../api';

import { URL } from '../const';


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
        // вызов API-функции по получению списка работ
        const data = yield call(api.getServiceList, URL.list);
        // SUCCESS - формируем новое событие - setItemsSuccess и сохраняем в STORE новый список работ
        yield put(actions.setItemsSuccess(data));
    }
    catch (e) {
        // ERROR - формируем новое событие - setItemsSuccess и сохраняем в STORE новый список работ
        yield put(actions.setItemsError(e.message));
    }
}


// Функция-генератор - наблюдатель (watcher)
// перехватывает тип события - requestItemDetails
function* watchRequestItemDetailsSaga() {
    // запускается последнее, остальные - отменяются
    yield takeLatest(actions.requestItemDetails, handleRequestItemDetailsSaga);
}


// Функция-генератор - работник (worker)
// Запускается наблюдателем (watchRequestItemDetailsSaga)
// для обработки события типа requestItemDetails
function* handleRequestItemDetailsSaga(action) {
    try {
        const data = yield call(api.getServiceItemDetails, URL.item, action.payload);
        yield put(actions.setItemDetailsSuccess(data));
    } catch (e) {
        yield put(actions.setItemDetailsError(e.message));
    }
}



// Корневая saga
export default function* saga() {
    yield spawn(watchRequestItemsSaga);
    yield spawn(watchRequestItemDetailsSaga);
}

