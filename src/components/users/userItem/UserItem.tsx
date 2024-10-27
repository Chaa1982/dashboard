import React, {FC} from "react";
import {IDashboardUser} from "../types";
import {FlexColumn, FlexRow} from "../../shared/Flex";
import './userItem.css';


interface IProps {
    user: IDashboardUser;
}


export const UserItem: FC<IProps> = ({user}) => {
    const {id, name, email, company, phone, website, username, address} = user;
    return (
        <FlexRow
            className={'user-item'}
            width={"90%"}
            padding={'30px'}
            background={'lightgrey'}
            margin={'5px'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <FlexColumn>
                <b>{name}</b>
                <p>{email} - </p>
            </FlexColumn>
            <span>{phone}</span>
        </FlexRow>
    )
}