import React, {FC} from "react";
import {IDashboardUser} from "../types";
import {FlexColumn, FlexRow} from "../../shared/Flex";
import './userItem.css';
import {ContentWrapper} from "../../shared/Common";


interface IProps {
    user: IDashboardUser;
}


export const UserItem: FC<IProps> = ({user}) => {
    const {name, email, phone} = user;
    return (
        <ContentWrapper alignItems={'center'}>
            <FlexColumn>
                <b>{name}</b>
                <p>{email} - </p>
            </FlexColumn>
            <span>{phone}</span>
        </ContentWrapper>
    )
}