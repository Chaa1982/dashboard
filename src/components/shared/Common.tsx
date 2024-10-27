import styled from "styled-components";
import {Flex} from "./Flex";

export const ContentWrapper = styled(Flex)`
    width: calc(90% - 20px);
    background: lightgrey;
    margin: 10px;
    padding: 10px;
    align-items: flex-start;
    justify-content: space-between;
`;