import {myTheme} from "../Theme/Theme.styled.tsx";

type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmax?: number,
    Fmin?: number,
}


export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: fontPropsType) => `
    font-family: ${family || 'Raleway, sans-serif'} ;
    font-weight: ${weight || 700};
    color: ${color || myTheme.colors.PraymaryText };
    line-height: ${lineHeight || 1};
    font-size: calc((100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`