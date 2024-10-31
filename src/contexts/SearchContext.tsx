import React, {createContext, Dispatch, FC, PropsWithChildren, useCallback, useMemo, useState} from 'react';
import {IDashboardUser} from "../components/users/types";
import {IDashboardPost} from "../components/posts/types";
import {useFetchData} from "../hooks/useFetchData";


interface ISearchContext {
    users: IDashboardUser[];
    posts: IDashboardPost[];

    value: string;
    setValue: Dispatch<string>;

    userSearchResult: IDashboardUser[];
    postSearchResult: IDashboardPost[];
}

export const SearchContext = createContext<ISearchContext | null>(null);



export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [value, setValue] = useState<string>("");

    const {data: users} = useFetchData<IDashboardUser[]>(
        'https://jsonplaceholder.typicode.com/users',
    );

    const {data: posts} = useFetchData<IDashboardPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
    );

    const userSearchResult = users ? users.filter(({name}) => name.includes(value)) : [];

    const postSearchResult = posts ? posts.filter((post) => post.title.includes(value)) : [];


    return (
        <SearchContext.Provider value={{
            value,
            setValue,
            users: users || [],
            posts: posts || [],
            userSearchResult,
            postSearchResult
        }}>
            {children}
        </SearchContext.Provider>
    )
}