import {FlexColumn, FlexRow} from "../../shared/Flex";
import './landing.css';
import {StyledLink, StyledScrollLink} from "../../shared/StyledLink";
import {ScrollPoint, ScrollTopContextProvider, Link as ScrollLink} from "react-use-scroll-to";
import {ContentWrapper} from "../../shared/Common";


export const Landing = () => {
    return (
        <ScrollTopContextProvider>
            <FlexColumn
                className="landing"
                width={'100%'}
                background={'grey'}
                alignItems={'start'}
                justifyContent={'flex-end'}
                gap={'10px'}
                padding={"20px 30px"}
            >
                <ContentWrapper
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    width={'100%'}
                    background={'none !important' }
                >
                    <StyledLink to={'/auth'}>Authorization</StyledLink>
                    <FlexRow
                        justifyContent={'space-between'}
                        gap={'10px'}
                    >
                        <StyledScrollLink elementTag={'section-1'}>Section-1</StyledScrollLink>
                        <StyledScrollLink elementTag={'section-2'}>Section-2</StyledScrollLink>
                        <StyledScrollLink elementTag={'section-3'}>Section-3</StyledScrollLink>
                    </FlexRow>
                </ContentWrapper>

                <ScrollPoint
                    className={'scroll-pointer'}
                    tag={'section-1'}
                    style={{width:'100%'}}
                >
                    <FlexColumn
                        height={'100vh'}
                        background={'red'}
                    ></FlexColumn>
                </ScrollPoint>
                <ScrollPoint
                    className={'scroll-pointer'}
                    tag={'section-2'}
                    style={{width:'100%'}}>
                    <FlexColumn
                        height={'100vh'}
                        background={'yellow'}
                    ></FlexColumn>
                </ScrollPoint>

                <ScrollPoint
                    className={'scroll-pointer'}
                    tag={'section-3'}
                    style={{width:'100%'}}
                >
                    <FlexColumn
                        height={'100vh'}
                        background={'violet'}
                    ></FlexColumn>
                </ScrollPoint>

            </FlexColumn>
        </ScrollTopContextProvider>
    )
}