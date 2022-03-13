

// Асинхронная функция получения списка работ (метод GET)
// PARAMS:
//    url - адрес обращения на сервер
//    search - фильтр поиска ({name, price})
// RETURN
//    Promise() после data.json()
export const getServiceList = async (url, search) => {
    console.log("GET API", url, search);
    // создание URI-строки из объекта search
    const params = new URLSearchParams(search);
    const response = await fetch(url + '?' + params);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

