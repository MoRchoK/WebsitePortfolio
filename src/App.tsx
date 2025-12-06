import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";
import {Offer} from "./layout/sections/offer/Offer.tsx";
import {Portfolio} from "./layout/sections/protfolio/Portfolio.tsx";
import {BrandsInfo} from "./layout/sections/brandsInfo/BrandsInfo.tsx";
import {Blog} from "./layout/sections/blog/Blog.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkills/>
            <Offer/>
            <Portfolio/>
            <BrandsInfo/>
            <Blog/>
        </AppStyled>
    )
}



export default App
const AppStyled = styled.div`

    
    
`

