import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import styled from "styled-components";
import {PortfolioMenu} from "./portfolioMenu/PortfolioMenu.tsx";
import {ButtonDark} from "../../../components/buttonDark/Button.tsx";
import bgOneImg from "../../../image/RectangleR.webp";
import bgTwoImg from "../../../image/Rectangle89.webp";
import bgThreeImg from "../../../image/Rectangle87.webp";
import bgFourImg from "../../../image/Rectangle79.webp";
import bgfiveImg from "../../../image/Rectangle92.webp";
import bgSixImg from "../../../image/Rectangle78.webp";




export function Portfolio() {

    return (
        <PortfolioStyles>
            <TitleComponent mgbttitle={'55px'} title={"Portfolio"}/>
            <PortfolioMenu/>
            <PortfolioPost/>
            <ButtonDark title={'VIEW PORTFOLIO'}/>
        </PortfolioStyles>

    )
}


const PortfolioStyles = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`


function PortfolioPost() {
    const portfolioItems = [bgOneImg, bgTwoImg, bgThreeImg, bgFourImg, bgfiveImg,bgSixImg]
    return (
        <WrapperPrortfolio>
            <PortfolioPostStyledOne backgroundimage={portfolioItems[0]}></PortfolioPostStyledOne>
            <PortfolioPostStyledTwo backgroundimage={portfolioItems[1]}></PortfolioPostStyledTwo>
            <PortfolioPostStyledThree backgroundimage={portfolioItems[2]}></PortfolioPostStyledThree>
            <PortfolioPostStyledFour backgroundimage={portfolioItems[3]}></PortfolioPostStyledFour>
            <PortfolioPostStyledFive backgroundimage={portfolioItems[4]}></PortfolioPostStyledFive>
            <PortfolioPostStyledSix backgroundimage={portfolioItems[5]}></PortfolioPostStyledSix>
        </WrapperPrortfolio>
    )
}

const WrapperPrortfolio = styled.div`
    display: grid;
    width: 1800px;
    height: 1500px;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: 5%;
   
`


type PortfolioPostStyledPropsType = {
    height?: string
    flexGrow?: string
    backgroundimage?: string

}

const PortfolioPostStyledOne = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: red;
    background-size: cover;
    background-position: center;
    gap: 30px;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
`;


const PortfolioPostStyledTwo = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: red;
    background-size: cover;
    background-position: center;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
`;

const PortfolioPostStyledThree = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: red;
    background-size: cover;
    background-position: center;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 3;
    
`;

const PortfolioPostStyledFour = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: red;
    background-size: cover;
    background-position: center;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    
`;

const PortfolioPostStyledFive = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: blue;
    background-size: cover;
    background-position: center;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    
`;

const PortfolioPostStyledSix = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-color: blue;
    background-size: cover;
    background-position: center;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 3;
    
`;
