import styled from "styled-components";
import {Link} from "react-router-dom";


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
