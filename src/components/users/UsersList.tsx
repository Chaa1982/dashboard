import {useFetchData} from "../../hooks/useFetchData";
import {IDashboardUser} from "./types";
import {FlexColumn} from "../shared/Flex";
import {UserItem} from "./userItem/UserItem";

export const UsersList = () => {
    const {data, isLoading} = useFetchData<IDashboardUser[]>(
        'https://jsonplaceholder.typicode.com/users',
        {method: 'GET'}
    );

    console.log(isLoading, data);

    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <h3>USERS</h3>
            {data?.map((user) => <UserItem user={user} />)}
        </FlexColumn>
    )
}