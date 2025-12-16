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
    //background: no-repeat 200px/cover url("/src/assets/image/mainPhoto.webp"), no-repeat center/cover url("/src/assets/image/BgMain.svg");
    background-color: ${myTheme.colors.BgMainSection};
    min-height: 100vh;
    padding-top: 150px;
    padding-bottom: 50px;
    
    @media screen and (max-width: 1550px) {
        background: no-repeat left/cover url("/src/assets/image/mainPhoto.webp"), no-repeat center/cover url("/src/assets/image/BgMain.svg");
    }
    @media ${myTheme.media.extra_large} {
        background: no-repeat center/cover url("/src/assets/image/mainPhoto.webp"), no-repeat center/cover url("/src/assets/image/BgMain.svg");
    }

    @media screen and (max-height: 700px) {
        background: no-repeat 100px/cover url("/src/assets/image/mainPhoto.webp"), no-repeat center/cover url("/src/assets/image/BgMain.svg");
    }
    @media ${myTheme.media.tablet} {
        background: no-repeat 100px/cover url("/src/assets/image/BgMain.svg");
    }
}



`



