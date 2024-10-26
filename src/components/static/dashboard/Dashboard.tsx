import {FC, useContext} from "react";
import {FlexColumn} from "../../shared/Flex";
import {DashboardContext} from "../../../contexts/DashboardContext";


export const Dashboard: FC = () => {
    const {user} = useContext(DashboardContext)!;


    if(!user)  return <h1>Are you hacker?</h1>;

    return (
        <FlexColumn width={'100%'}>
            <h1>DASHBOARD! </h1>
            <h2>Hello, {user?.email}</h2>
        </FlexColumn>
    )
};