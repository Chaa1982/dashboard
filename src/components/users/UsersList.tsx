import React, { useMemo } from "react";
import {useFetchData} from "../../hooks/useFetchData";
import {IDashboardUser} from "./types";
import {FlexColumn} from "../shared/Flex";
import {UserItem} from "./userItem/UserItem";
import {Search} from "../shared/search/Search";

export const UsersList = () => {
    const options = useMemo(() => ({method: "GET"}), []);

    const {data, isLoading} = useFetchData<IDashboardUser[]>(
        'https://jsonplaceholder.typicode.com/users',
        options
    );

    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <Search />
            <h3>USERS</h3>
            {data?.map((user, i) => <UserItem user={user} key={`${i}-user`}/>)}
        </FlexColumn>
    )
}