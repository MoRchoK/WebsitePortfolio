import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {Header} from "../../header/Header.tsx";
import {MainInfoComponent} from "./mainInfo/MainInfoComponent.tsx";
import {CircleStyled} from "../../../components/circleStyled/Circle.styled.tsx";
import {IconBg} from "../../../components/iconBg/IconBg.tsx";

import {PatternIcon} from "../../../components/bgCross/PatternIcon.tsx";

export function Main() {
    return (
        <MainStyled>
            <Header/>
            <MainInfoComponent/>
            <ImgStyled src='/src/image/mainPhoto.webp'/>
            <CircleStyled left={"-15%"} bottom={'-15%'}/>
            <CircleStyled right={"-21%"} top={'-21%'}/>
            <CircleStyled right={"12%"} bottom={'10%'}/>

            <IconBg top={'25%'} left={'48%'} id={'elipse'}/>
            <IconBg bottom={'25%'} left={'53%'} id={'elipse'}/>
            <IconBg top={'35%'} right={'5%'} id={'elipse'}/>


            <IconBg bottom={'30%'} right={'10%'} id={'polygon'}/>
            <IconBg top={'40%'} left={'53%'} id={'polygon'}/>

            <PatternIcon top={'20%'} left={'51%'}/>
            <PatternIcon bottom={'40%'} right={'13%'}/>
            <PatternIcon bottom={'53%'} right={'11%'}/>
            <PatternIcon bottom={'18%'} left={'8%'}/>

        </MainStyled>
    )
}


const MainStyled = styled.main`
    background-color: ${myTheme.colors.BgMainSection};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    overflow: hidden;
`


const ImgStyled = styled.img`
    display: block;
    position: absolute;
    height: 110vh;
    width: 85vw;
    right: -10%;
    bottom: 0;
    z-index: 4;
    
`





