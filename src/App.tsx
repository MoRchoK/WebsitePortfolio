import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";
import {Offer} from "./layout/sections/offer/Offer.tsx";
import {Portfolio} from "./layout/sections/protfolio/Portfolio.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkills/>
            <Offer/>
            <Portfolio/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`

    
    
`

