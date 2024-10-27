import {FlexColumn} from "../../shared/Flex";
import {Link} from "react-router-dom";
import './landing.css';
import {StyledLink} from "../../shared/StyledLink";

export const Landing = () => {
    return (
        <FlexColumn
            className="landing"
            width={'100%'}
            height={'100vh'}
            background={'grey'}
            alignItems={'end'}
            padding={"20px 30px"}>
            <StyledLink to={'/auth'} >Authorization</StyledLink>
        </FlexColumn>
    )
}