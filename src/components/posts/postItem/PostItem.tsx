import React, {FC, useCallback, useMemo, useState} from "react";
import {IDashboardPost} from "../types";
import './postItem.css';
import {ContentWrapper} from "../../shared/Common";
import {useFetchData} from "../../../hooks/useFetchData";
import {IDashboardUser} from "../../users/types";
import {FlexColumn, FlexRow} from "../../shared/Flex";
import { FaUserTie } from "react-icons/fa6";
import {IComment} from "../../coments/types";
import { TfiComments } from "react-icons/tfi";


interface IProps {
    post: IDashboardPost;
}

export const PostItem: FC<IProps> = (props) => {
    const [isShowComments, setIsShowComments] = useState<boolean>(false);
    const options = useMemo(() => ({method: 'GET'}), []);
    const {data, isLoading} = useFetchData<IDashboardUser>(`https://jsonplaceholder.typicode.com/users/${props.post.userId}`, options);
    const {data: comments, isLoading: isCommentsLoading} = useFetchData<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`, options);


    const onShowCommentsToggle  = useCallback(() => {
        setIsShowComments(!isShowComments);
    }, [isShowComments]);


    return (
        <ContentWrapper flexDirection={'column'} alignItems={'flex-start'}>
            <FlexRow alignItems={'center'} gap={'20px'}>
                <FaUserTie size={'30px'} color={'blue'}/>
                <h4>{data?.username}</h4>
                <span>{data?.email}</span>
            </FlexRow>
            <h3>{props.post.title.toUpperCase()}</h3>
            <p>{props.post.body}</p>
            <button className={'comments-btn'} onClick={() => onShowCommentsToggle()}>
                {isShowComments ? 'Hidden' : 'Show'} posts
            </button>

            {isShowComments &&
                <FlexColumn width={'100%'} margin={'10px'}>
                    {comments?.map((el, i) =>
                        <ContentWrapper
                            alignItems={'center'}
                            flexDirection={'row'}
                            gap={'30px'}
                            width={'100%'}
                            key={`${i}-comment`}
                            background={'rgba(228, 222, 222, 0.92) !important'}
                        >
                            <TfiComments size={'50px'} />
                            <h4>{el.name} - </h4>
                            <p>{el.body}</p>
                        </ContentWrapper>
                    )}
                </FlexColumn>
            }
        </ContentWrapper>
    )
}