import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, switchMap, catchError, filter, tap } from 'rxjs/operators';

import { requestItems, setItemsError, setItemsSuccess, setSearchString } from '../store/serviceReducer';

import { SERVERURL } from '../const';

export const changeSearchEpic = (action$) => action$.pipe(
    // проверка типа события
    filter(o => setSearchString.match(o)),
    // вызов trim() для всех полей search
    map(o => Object.keys(o.payload).reduce((prev, key) => ({ ...prev, [key]: o.payload[key].trim() }), {})),
    // удаление пустых полей
    map(o => Object.keys(o).reduce((prev, key) => o[key] !== '' ? ({ ...prev, [key]: o[key].trim() }) : prev, {})),
    // задержка на следующее событие
    debounceTime(100),
    // вызов генератора события
    map(o => requestItems(o))
)


export const requestItemsEpic = (action$) => action$.pipe(
    // проверка типа события
    filter(o => requestItems.match(o)),
    // получение объекта для поиска
    map(o => o.payload),
    // запуск запроса к серверу с отменой предыдущих
    switchMap(o => {
        const request = new URLSearchParams(o);
        // основной блок - fetch
        return ajax.getJSON(SERVERURL + '?' + request).pipe(
            // новый поток с вызовом события - OK
            map(o => setItemsSuccess(o)),
            // если ошибка - вызываем ошибку в новом потоке
            catchError(o => of(setItemsError(o)))
        )
    }),
);
