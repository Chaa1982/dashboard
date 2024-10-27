import React, {FC} from "react";
import {FlexColumn} from "../../shared/Flex";
import {IDashboardPost} from "../types";
import './postItem.css';
import {ContentWrapper} from "../../shared/Common";


interface IProps {
    post: IDashboardPost;
}

export const PostItem: FC<IProps> = (props) => {
    const {title, body} = props.post;
    return (
        <ContentWrapper flexDirection={'column'} alignItems={'flex-start'}>
            <h3>{title.toUpperCase()}</h3>
            <p>{body}</p>
        </ContentWrapper>

    )
}