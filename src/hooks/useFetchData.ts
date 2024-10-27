import {useState, useEffect} from "react";

export const useFetchData = <TData>(url: string, options: RequestInit) => {
    const [data, setData] = useState<TData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {
        setIsLoading(true);
        fetch(url, options)
        .then(response => response.json())
            .then(responseData => {
                setData(responseData)
            })
            .catch((error) => {
                setIsLoading(false);
                setData(null);
            })
    }, [options, url]);

    return {data, isLoading};
}