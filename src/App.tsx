import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";
import {MySkillsComponent} from "./layout/mySkills/MySkillsComponent.tsx";

function App() {
    return (
        <AppStyled >
            <Main/>
            <MySkillsComponent/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`

    
    
`

