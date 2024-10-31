import React, {useContext} from "react";
import {FlexColumn} from "../shared/Flex";
import {UserItem} from "./userItem/UserItem";
import {Search} from "../shared/search/Search";
import {SearchContext} from "../../contexts/SearchContext";

export const UsersList = () => {
    const {users, userSearchResult} = useContext(SearchContext)!;
    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <Search />
            <h3>USERS</h3>
            {userSearchResult ? userSearchResult.map((user, i) => <UserItem user={user} key={`${i}-user`}/>)
            : users.map((user, i) => <UserItem user={user} key={`${i}-user`}/>)
            }
        </FlexColumn>
    )
}