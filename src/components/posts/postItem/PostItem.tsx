import React, {FC, useMemo} from "react";
import {IDashboardPost} from "../types";
import './postItem.css';
import {ContentWrapper} from "../../shared/Common";
import {useFetchData} from "../../../hooks/useFetchData";
import {IDashboardUser} from "../../users/types";
import {FlexRow} from "../../shared/Flex";


interface IProps {
    post: IDashboardPost;
}

export const PostItem: FC<IProps> = (props) => {
    const options = useMemo(() => ({method: 'GET'}), []);
    const {data, isLoading} = useFetchData<IDashboardUser>(`https://jsonplaceholder.typicode.com/users/${props.post.userId}`, options);

    console.log('data>>>', data);


    return (
        <ContentWrapper flexDirection={'column'} alignItems={'flex-start'}>
            <FlexRow alignItems={'center'} gap={'20px'}>
                <h4>{data?.username}</h4>
                <span>{data?.email}</span>
            </FlexRow>
            <h3>{props.post.title.toUpperCase()}</h3>
            <p>{props.post.body}</p>
        </ContentWrapper>
    )
}