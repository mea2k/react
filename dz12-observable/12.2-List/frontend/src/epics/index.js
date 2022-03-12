import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, switchMap, catchError, filter } from 'rxjs/operators';

import { requestItemDetails, requestItems, setItemDetailsError, setItemDetailsSuccess, setItemsError, setItemsSuccess } from '../store/serviceReducer';

import { URL } from '../const';

export const requestItemsEpic = (action$) => action$.pipe(
    // проверка типа события
    filter(o => requestItems.match(o)),
    // получение объекта для поиска
    map(o => o.payload),
    // запуск запроса к серверу в новом потоке с отменой предыдущих
    switchMap(o => ajax.getJSON(URL.list).pipe(
        // вызов события - SUCCESS
        map(o => setItemsSuccess(o)),
        //вызов события в новом потоке - ERROR
        catchError(o => of(setItemsError(o)))
    )),
);


export const requestItemDetailsEpic = (action$) => action$.pipe(
    // проверка типа события
    filter(o => requestItemDetails.match(o)),
    // получение объекта для поиска
    map(o => o.payload),
    // запуск запроса к серверу в новом потоке с отменой предыдущих
    switchMap(o => ajax.getJSON(URL.item + o).pipe(
        // вызов события - SUCCESS
        map(o => setItemDetailsSuccess(o)),
        //вызов события в новом потоке - ERROR
        catchError(o => of(setItemDetailsError(o)))
    )),
);