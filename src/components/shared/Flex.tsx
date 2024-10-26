import styled from "styled-components";

interface FlexProps {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    background?: string;
    color?: string;
}

const Flex = styled('div')<FlexProps>`
    display: flex;
    
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    gap: ${(props) => props.gap || '0'};
    background: ${(props) => props.background || 'none'};
    color: ${(props) => props.color || 'black'};
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;
export const FlexRow = styled(Flex)`
flex-direction: row;
`;