import React, {FC} from "react";
import {FlexColumn} from "../../shared/Flex";
import {IDashboardPost} from "../types";
import './postItem.css';


interface IProps {
    post: IDashboardPost;
}

export const PostItem: FC<IProps> = (props) => {
    const {title, body} = props.post;
    return (
        <FlexColumn
            width={'100%'}
            background={'lightgrey'}
            margin={'10px'}
        >
            <h4>{title}</h4>
            <p>{body}</p>
        </FlexColumn>

    )
}