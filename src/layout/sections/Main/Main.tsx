import {S} from "./main_styled/Main_Styled.tsx";
import {MainInfo} from "./mainInfo/MainInfo.tsx";
import {Container} from "../../../container/Container.ts";
import * as React from "react";





export const Main: React.FC = () => {
    return (
        <S.MainStyled id={'home'}>
            <Container>
                <MainInfo />
            </Container>
        </S.MainStyled>
    )
}



