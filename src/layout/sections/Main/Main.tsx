import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {MainInfoComponent} from "./mainInfo/MainInfoComponent.tsx";
import {Container} from "../../../container/Container.ts";


export function Main() {
    return (
        <MainStyled>
            <Container>
                <MainInfoComponent/>
            </Container>
        </MainStyled>
    )
}


const MainStyled = styled.section`
    background-color: ${myTheme.colors.BgMainSection};
    background: no-repeat right / auto 100vh  url(/src/image/mainPhoto.webp), no-repeat center / cover url("/src/image/BgMain.svg");
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`







