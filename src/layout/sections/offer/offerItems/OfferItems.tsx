import sprite from "../../../../../public/iconsSprites.svg";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";

type OfferItemsPropsType = {
    svgId: string;
    title: string;
    description: string;
    fill?: string;
    width?: string;
    height?: string;
}


const OfferItemsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 450px;
    box-shadow: 0 2px 40px 0  rgba(187, 187, 187, 0.5);
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
`

const OfferItemsTitle = styled.h3`
    font-size: 25px;
    line-height: 100%;
    letter-spacing: 1px;
    horiz-align: center;
    margin: 1rem;
`

const OfferItemsDesctiprion = styled.p`
    width: 75%;
    font-size: 16px;
    color: ${myTheme.colors.discriptionText};
    text-align: center;
    
`



export function OfferItems(props: OfferItemsPropsType) {
    return (
        <OfferItemsStyled>
                <IconOffer xmlns={"http://www.w3.org/1999/xlink"}  width={props.width} height={props.height} fill={props.fill}>
                    <use  xlinkHref={sprite + "#" + props.svgId}></use>
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
}


export const IconOffer  = styled.svg<IconOfferPropsType>`
    width: ${(props) => (props.height ? props.height : "0")};
    height: ${(props) => (props.height ? props.height : "0")};
    margin-bottom: 2.75rem;
    fill: ${(props)=>props.fill|| 'currentColor'};
   
    
`