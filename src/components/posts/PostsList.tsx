import React, {useMemo} from 'react'
import {useFetchData} from "../../hooks/useFetchData";
import {FlexColumn} from "../shared/Flex";
import {IDashboardPost} from "./types";
import {PostItem} from "./postItem/PostItem";


export const PostsList = () => {
    const options = useMemo(() => ({method: 'GET'}), []);
    const {data, isLoading} = useFetchData<IDashboardPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
        options
    );


    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <h1>POSTS</h1>
            {data?.map((post, i) => <PostItem post={post} key={`${i}-post`}/>)}
        </FlexColumn>
    )
}