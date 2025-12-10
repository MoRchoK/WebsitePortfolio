import sprite from "../../../../../public/iconsSprites.svg";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
type OfferItemsPropsType = IconOfferPropsType &  {
    svgid: string;
    title: string;
    description: string;
}

export const OfferItemsStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.5);
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
`

const OfferItemsTitle = styled.h3`
    font-size: 25px;
    line-height: 100%;
    letter-spacing: 0.01em;
    horiz-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
`

const OfferItemsDesctiprion = styled.p`
    width: 75%;
    font-size: 16px;
    color: ${myTheme.colors.descriptionCard};
    text-align: center;
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 177%;
`


export function OfferItems(props: OfferItemsPropsType) {
    return (
        <OfferItemsStyled>
            <IconOffer xmlns={"http://www.w3.org/1999/xlink"}
                       preserveAspectRatio="xMidYMid meet"
                       viewBox={props.viewBox}
                       rotate={props.rotate}
                       stroke={props.stroke}
                       position={props.position}
                       left={props.left}
                       bottom={props.bottom}
                       top={props.top}
                       right={props.right}
                       fill={props.fill}>
                <use xlinkHref={sprite + "#" + props.svgid}></use>
            </IconOffer>
            <OfferItemsTitle>{props.title}</OfferItemsTitle>
            <OfferItemsDesctiprion>
                {props.description}
            </OfferItemsDesctiprion>
        </OfferItemsStyled>
    )

}


type IconOfferPropsType = {
    fill?: string,
    viewBox: string
    stroke?: string,
    position?: string
    top?: string
    right?: string
    bottom?: string
    left?: string
    rotate?: number
}


export const IconOffer = styled.svg<IconOfferPropsType>`
    position: ${(props) => (props.position ? props.position : "static")};
    fill: ${(props) => props.fill || 'currentColor'};
    top: ${(props) => props.top || ''};
    bottom: ${(props) => props.bottom || ''};
    right: ${(props) => props.right || ''};
    left: ${(props) => props.left || ''};
    transform: ${(props) =>props.rotate? `rotate(${props.rotate}deg)` :  ''}
`