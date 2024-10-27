import React from 'react'
import {useFetchData} from "../../hooks/useFetchData";
import {FlexColumn} from "../shared/Flex";
import {IDashboardPost} from "./types";
import {PostItem} from "./postItem/PostItem";


export const PostsList = () => {
    const {data, isLoading} = useFetchData<IDashboardPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {method: 'GET'}
    );


    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <h1>POSTS</h1>
            {data?.map((post) => <PostItem post={post} />)}
        </FlexColumn>
    )
}