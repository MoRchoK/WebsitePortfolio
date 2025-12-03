import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {myTheme} from "./components/Theme/Theme.styled.tsx";
import {GlobalStyled} from "./globalStyled/Global.styled.tsx";

createRoot(document.getElementById('root')!).render(
        <ThemeProvider theme={myTheme}>
            <App/>
            <GlobalStyled/>
        </ThemeProvider>
)
