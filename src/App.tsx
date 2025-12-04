import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";
import {Offer} from "./layout/sections/mySkills/offer/Offer.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkills/>
            <Offer/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`

    
    
`

