import React, {useContext} from 'react'
import {FlexColumn} from "../shared/Flex";
import {PostItem} from "./postItem/PostItem";
import {Search} from "../shared/search/Search";
import {SearchContext} from "../../contexts/SearchContext";




export const PostsList = () => {
const {posts, postSearchResult} = useContext(SearchContext)!;
console.log(posts);
    return (
        <FlexColumn width={'100%'} alignItems={'center'}>
            <h1>POSTS</h1>
            <Search />
            {postSearchResult ? postSearchResult.map((post, i) => <PostItem post={post} key={`${i}-user`}/>)
                : posts.map((post, i) => <PostItem post={post} key={`${i}-user`}/>)
            }
        </FlexColumn>
    )
}