import {FlexColumn} from "../../shared/Flex";
import {Link} from "react-router-dom";
import './landing.css';

export const Landing = () => {
    return (
        <FlexColumn
            className="landing"
            width={'100%'}
            height={'100vh'}
            background={'yellow'}
            alignItems={'end'}
            padding={"20px 30px"}>
            <Link className={'link'} to={'/auth'} >Authorization</Link>
        </FlexColumn>
    )
}