import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import styled from "styled-components";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {BtnBusinessBlack} from "../../../components/btnBusiness/BtnBusiness.tsx";


export function Portfolio() {

    return (
        <PortfolioStyles>
            <TitleComponent marginBottom={'3.5rem'} title={"Portfolio"}/>
            <PortfolioPost/>
            <BtnBusinessBlack title={'VIEW PORTFOLIO'}/>
        </PortfolioStyles>

    )
}


const PortfolioStyles = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`


function PortfolioPost() {
    return (
       <WrapperComponentStyled marginBottom={'60px'}  gap={'50px'} height={'100%'}>
           <PortfolioPostStyled height={'540px'} backgroundImage={'/src/image/Rectangle77.webp'} />
           <PortfolioPostStyled height={'770px'} backgroundImage={'/src/image/Rectangle89.webp'} />
       </WrapperComponentStyled>
    )
}




type PortfolioPostStyledPropsType = {
    height?: string
    flexGrow?: string
    backgroundImage?: string
}

const PortfolioPostStyled = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    width: 620px;
    height: ${(props) => props.height || '100%'};
`;