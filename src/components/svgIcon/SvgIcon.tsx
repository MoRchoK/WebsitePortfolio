import sprite from "../../../public/iconsSprites.svg";
import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


type IconPropsType = {
    fill?: string,
    viewBox: string
    stroke?: string,
    width?: string,
    height?: string,

}

type SvgIconPropsType = IconPropsType & {
    id: string
}

export function SvgIcon(props: SvgIconPropsType) {
    return (
        <Icon
              viewBox={props.viewBox}
              stroke={props.stroke}
              fill={props.fill}
              width={props.width}
              height={props.height}>
            <use xlinkHref={sprite + "#" + props.id}></use>
        </Icon>
    )
}

const Icon = styled.svg<IconPropsType>`
    fill: ${(props) => props.fill || 'currentColor'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    @media ${myTheme.media.tablet} {
        transform: scale(0.8);
    }
`