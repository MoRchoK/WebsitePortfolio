
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



// import {createGlobalStyle} from "styled-components";
//
//
//
// export const GlobalStyled = createGlobalStyle`
//
//     html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr [title ]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button, [type= "button " ], [type= "reset " ], [type= "submit " ]{-webkit-appearance:button}button::-moz-focus-inner, [type= "button " ]::-moz-focus-inner, [type= "reset " ]::-moz-focus-inner, [type= "submit " ]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring, [type= "button " ]:-moz-focusring, [type= "reset " ]:-moz-focusring, [type= "submit " ]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto} [type= "checkbox " ], [type= "radio " ]{box-sizing:border-box;padding:0} [type= "number " ]::-webkit-inner-spin-button, [type= "number " ]::-webkit-outer-spin-button{height:auto} [type= "search " ]{-webkit-appearance:textfield;outline-offset:-2px} [type= "search " ]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none} [hidden ]{display:none}
//
//
//     /* Reset and base styles  */
//     * {
//         padding: 0px;
//         margin: 0px;
//         border: none;
//     }
//
//     *,
//     *::before,
//     *::after {
//         box-sizing: border-box;
//     }
//
//     /* Links */
//
//     a, a:link, a:visited {
//         text-decoration: none;
//     }
//
//     a:hover {
//         text-decoration: none;
//     }
//
//     /* Common */
//
//     aside, nav, footer, header, section, main {
//         display: block;
//     }
//
//     h1, h2, h3, h4, h5, h6, p {
//         font-size: inherit;
//         font-weight: inherit;
//     }
//
//     ul, ul li {
//         list-style: none;
//     }
//
//     img {
//         vertical-align: top;
//     }
//
//     img, svg {
//         max-width: 100%;
//         height: auto;
//     }
//
//     address {
//         font-style: normal;
//     }
//
//     /* Form */
//
//     input, textarea, button, select {
//         font-family: inherit;
//         font-size: inherit;
//         color: inherit;
//         background-color: transparent;
//     }
//
//     input::-ms-clear {
//         display: none;
//     }
//
//     button, input[type="submit"] {
//         display: inline-block;
//         box-shadow: none;
//         background-color: transparent;
//         background: none;
//         cursor: pointer;
//     }
//
//     input:focus, input:active,
//     button:focus, button:active {
//         outline: none;
//     }
//
//     button::-moz-focus-inner {
//         padding: 0;
//         border: 0;
//     }
//
//     label {
//         cursor: pointer;
//     }
//
//     legend {
//         display: block;
//     }
//
//     input[type='file'] {
//         max-width: 100%;
//     }
//
//
//
// `
