import {FC, useContext} from "react";
import {FlexColumn, FlexRow} from "../../shared/Flex";
import {DashboardContext} from "../../../contexts/DashboardContext";
import {Link, Outlet} from "react-router-dom";
import './dashboard.css';
import {StyledLink} from "../../shared/StyledLink";


export const Dashboard: FC = () => {
    const {user} = useContext(DashboardContext)!;


    // if(!user)  return <h1>Are you hacker?</h1>;

    const dashboardLinks = [
        {link: 'users', text: 'Users'},
        {link: 'posts', text: 'Posts'},
        {link: 'settings', text: 'Settings'},

    ];

    return (
        <FlexColumn className={'dashboard'} width={'100%'}>
            <FlexRow
                as={'header'}
                width={'100%'}
                background={'grey'}
                gap={'20px'}
                padding={'10px'}>
                {dashboardLinks.map((el, i) =>
                    <StyledLink className={'link'} to={el.link} key={`${i}-dashboard`}>{el.text} </StyledLink>)}
            </FlexRow>
            <h1>DASHBOARD! Hello, {user?.email}</h1>
            <Outlet/>
        </FlexColumn>
    )
};