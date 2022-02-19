import { useEffect, useState } from 'react';

export const useJsonFetch = (url, opts) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async (url) => {
        try {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        let err = new Error(res.statusText);
                        err.response = res;
                        throw err;
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((e) => {
                    console.log('catch1 - ' + e);
                    setError(e);
                    setLoading(false);
                });
        } catch (e) {
            console.log('catch2 - ' + e);
            setError(e);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData(url);
    }, [url])

    //console.log(url + ' - load: ' + loading + ', error: ' + error);

    const res = [data, loading, error];
    return [...res];
}
