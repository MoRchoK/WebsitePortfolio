import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {BtnDark} from "../../../../components/buttonDark/ButtonDark.tsx";
import styled from "styled-components";
import {font} from "../../../style/common/Common.ts";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";

// Portfolio Section
const PortfolioSection = styled.section`
    padding: 55px 0 150px;
    h2 {
        margin-bottom: 55px;
    }
    nav {
        height: auto;
        margin-bottom: 65px;
        li {
        }
    }
    ${BtnDark} {
        max-width: 210px;
        width: 100%;
        height: 56px;
        margin-top: 60px
    }
    @media ${myTheme.media.large} {
        padding-bottom: 100px;
    }
    @media ${myTheme.media.mobile} {
        ul {
            gap: 20px;
        }
        ${BtnDark} {
            padding: 1em 1.5em;
            font-size: 14px;
            margin-top: 30px;
        }
    }
`

// Portfolio Post
const WrapperOverlay = styled(Wrapper)`
    position: absolute;
    bottom: 100px;
    top: auto;
    left: 60px;
    gap: 35px;
    height: auto;
    transform: translateY(300px);
    opacity: 1;
    transition: transform 0.3s ease;
`

const OverlayTitle = styled.h4`
    ${font({color: myTheme.colors.BgMainSection, Fmax:26, Fmin: 20})}
    text-transform: capitalize;
    &::before {
        content: '➝';
        position: absolute;
        right: -130px;
        transform: scale(1.3);
        color: ${myTheme.colors.BgMainSection}
    }
`

const OverlayDescription = styled.span`
    ${font({color: myTheme.colors.BgMainSection, weight: 400})};
    font-size: 16px;
    padding-left: 5px;
`

type WrapperPrortfolioPropsType = {
    rows_count: string
    column_count: number
}
const WrapperPrortfolio = styled.div<WrapperPrortfolioPropsType>`
    position: relative;
    display: grid;
    max-width: 1500px;
    width: 100%;
    min-height: 200px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: ${props =>  props.rows_count};
    
    @media ${myTheme.media.large} {
        grid-template-columns: repeat( 2, 1fr);
        grid-template-rows: 540px;
        grid-auto-rows: 540px;
    }

    @media ${myTheme.media.tablet} {
        grid-template-columns: repeat( 1, 1fr);
    }
`
type PortfolioPostStyledPropsType = {
    backgroundimage?: string
    grid_row_start: number
    grid_row_end: number
    grid_column_start: number
}

const PortfolioPost = styled.div<PortfolioPostStyledPropsType>`
    width: 100%;
    height: 100%;
    grid-row-start: ${(props) => props.grid_row_start};
    grid-row-end: ${(props) => props.grid_row_end};
    grid-column-start: ${(props) => props.grid_column_start};
    max-height: 800px;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        opacity: 0;
        background-color: ${myTheme.colors.bgHoverPortfolioPost};
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.3s ease;
    }
    &:hover {
        &::before {
            opacity: 1;
        }
        ${WrapperOverlay}{
            transform: translateY(0);
        }
    }
    @media ${myTheme.media.large} {
        grid-row-start: auto ;
        grid-row-end: auto;
        grid-column-start: auto;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;



export const S = {
    PortfolioSection,
    OverlayTitle,
    OverlayDescription,
    PortfolioPost,
    WrapperPrortfolio,
    WrapperOverlay


}