import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/Main/Main.tsx";
import styled from "styled-components";

function App() {
    return (
        <AppStyled >
            <Header/>
            <Main/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    position: relative;

`