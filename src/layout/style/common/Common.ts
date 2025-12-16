import {myTheme} from "../Theme/Theme.styled.tsx";

type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmax?: number,
    Fmin?: number,
    letterSpacing?: string,
}


export const font = ({family, weight, color, lineHeight, Fmax, Fmin, letterSpacing}: fontPropsType) => `
    font-family: ${family || 'Raleway, sans-serif'} ;
    font-weight: ${weight || 700};
    color: ${color || myTheme.colors.PraymaryText };
    line-height: ${lineHeight || 1};
    letter-spacing: ${letterSpacing};
    font-size: calc((100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`