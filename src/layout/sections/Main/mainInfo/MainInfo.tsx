import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import {S} from "./../main_styled/Main_Styled.tsx";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";


export function MainInfo() {
    return (
        <S.MainInfoWrapper>
                <S.MainTitle>Graphic Designer</S.MainTitle>
                <Wrapper flexdirection={"column"} alignitems={"flex-start"}>
                    <S.GreetingStyled>Hello I’m</S.GreetingStyled>
                    <S.NameTitleStyled>Daniel Bryan</S.NameTitleStyled>
                </Wrapper>
                <S.DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</S.DiscriptionTextStyled>
                <BtnStyled>GET IN TOUCH</BtnStyled>
        </S.MainInfoWrapper>

    )
}




