import styled from "styled-components";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-use-scroll-to';


export const StyledLink = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    color: white;
    font-family: "Plantagenet Cherokee", cursive;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
        color: #f1e8aa;
        transform: scale(1.1);
    }
`;

export const StyledScrollLink = styled(ScrollLink)`
    color: white;
    font-size: 25px;
    font-family: "Al Nile";
`;
