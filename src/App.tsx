import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";
import {Offer} from "./layout/sections/offer/Offer.tsx";
import {Portfolio} from "./layout/sections/protfolio/Portfolio.tsx";
import {BrandsInfo} from "./layout/sections/brandsInfo/BrandsInfo.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkills/>
            <Offer/>
            <Portfolio/>
            <BrandsInfo/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`

    
    
`

