
import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: Raleway;
        src: url(/src/assets/fonts/Raleway-v4020-Bold.eot?) format('eot');
        src: url(/src/assets/fonts/Raleway-v4020-Bold.woff) format('woff');
        src: url(/src/assets/fonts/Raleway-v4020-Bold.otf) format('otf');
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: Raleway;
        src: url(/src/assets/fonts/Raleway-v4020-Medium.eot?) format('embedded-opentype');
        src: url(/src/assets/fonts/Raleway-v4020-Medium.woff) format('woff');
        src: url(/src/assets/fonts/Raleway-v4020-Medium.otf) format('otf');
        font-weight: 500;
        font-display: swap;
    }



    @font-face {
        font-family: Lato;
        src: url(/src/assets/fonts/Lato-Regular.eot?) format('embedded-opentype');
        src: url(/src/assets/fonts/Lato-Regular.woff2) format('woff2');
        src: url(/src/assets/fonts/Lato-Regular.ttf) format('truetype');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: Lato;
        src: url(/src/assets/fonts/Lato-Medium.eot?) format('embedded-opentype');
        src: url(/src/assets/fonts/Lato-Medium.woff2) format('woff2');
        src: url(/src/assets/fonts/Lato-Medium.ttf) format('truetype');
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: Lato;
        src: url(/src/assets/fonts/Lato-MediumItalic.ttf) format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
       
    }
    body {
        margin: 0;
        font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-width: 360px;
    }

    
   
    
    
    section{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    a {
        text-decoration: none;
    }
    
    ul{
        list-style: none;
    }
    button {
        background-color: unset;
        border: none;
    }
    section {
        display: flex;
        justify-content: center;
    }
    button {
        cursor: pointer;
    }
`


