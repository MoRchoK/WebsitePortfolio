import {S} from "./main_styled/Main_Styled.tsx";
import {MainInfo} from "./mainInfo/MainInfo.tsx";
import {Container} from "../../../container/Container.ts";

export function Main() {
    return (
        <S.MainStyled>
            <Container>
                <MainInfo/>
            </Container>
        </S.MainStyled>
    )
}



