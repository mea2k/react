

// Асинхронная функция получения списка работ (метод GET)
// PARAMS:
//    url - адрес обращения на сервер
//    search - фильтр поиска ({name, price})
// RETURN
//    Promise() после data.json()
export const getServiceList = async (url, search) => {
    // создание URI-строки из объекта search
    const params = new URLSearchParams(search);
    const response = await fetch(url + '?' + params);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}



// Асинхронная функция получения информации по выбранному элементу (метод GET)
// PARAMS:
//    url - адрес обращения на сервер
//    id - идентификатор выбранного элемента
// RETURN
//    Promise() после data.json()
export const getServiceItemDetails = async (url, id) => {
    const response = await fetch(url + id);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
