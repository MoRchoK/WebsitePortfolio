import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkills} from "./layout/sections/mySkills/MySkills.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkills/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`

    
    
`

