import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";

export function MainInfoComponent() {
    return (
        <WrapperComponentStyled width={'30%'} left={"15vw"} position={'absolute'} alignitems={'start'}>
            <MainTitle>Graphic Designer</MainTitle>
            <GreetingStyled>Hello I’m<br/> <NameTitleStyled>Daniel Bryan</NameTitleStyled></GreetingStyled>
            <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem dolorum
                ducimus earum esse
                exercitationem fugiat incidunt iusto libero minus molestias, mollitia nisi obcaecati officia optio
                porro reprehenderit, rerum veniam.</DiscriptionTextStyled>
            <BtnStyled>GET IN TOUCH</BtnStyled>
        </WrapperComponentStyled>
    )
}


const DiscriptionTextStyled = styled.p`
    color: ${myTheme.colors.discriptionText};
    margin-bottom: 50px;
`

const MainTitle = styled.h1`
    color: ${myTheme.colors.additionalText};
    font-size: 18px;
    margin-bottom: 23px;
`

const GreetingStyled = styled.p`
    color: ${myTheme.colors.PraymaryText};
    font-size: 80px;
    letter-spacing: -5px;
    line-height: 1;
`


type NameTitlePropsType = {
    color?: string,
    text?: string,
}


const NameTitleStyled = styled.span<NameTitlePropsType>`
    display: block;
    color: ${myTheme.colors.highlighting};
    font-size: 80px;
    margin-bottom: 30px;
`
