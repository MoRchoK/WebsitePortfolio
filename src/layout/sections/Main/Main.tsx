import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
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
    background: no-repeat center/cover url("/src/image/BgMain.svg");
    background-color: ${myTheme.colors.BgMainSection};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`







