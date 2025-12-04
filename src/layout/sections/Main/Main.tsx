import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {Header} from "../../header/Header.tsx";
import {MainInfoComponent} from "./mainInfo/MainInfoComponent.tsx";
import {CircleStyled} from "../../../components/circleStyled/Circle.styled.tsx";


export function Main() {
    return (
        <MainStyled>
            <Header/>
            <MainInfoComponent/>
            <ImgStyled src='/src/image/mainPhoto.webp'/>
            <CircleStyled left={"-10%"} bottom={'-10%'}/>
            <CircleStyled right={"-15%"} top={'-15%'}/>
            <CircleStyled right={"22%"} bottom={'20%'}/>
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
    height: 105vh;
    right: -5%;
    bottom: 0;
    z-index: 1;

`


