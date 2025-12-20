import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {useState} from "react";
import {
    CartTitle,
    OfferItemsDesctiprion,
    OfferItemsStyled,
} from "./offerSlider/offerSlider.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import '../offer/offerSlider/offerSlider.css';





export type icon = {
    id: string,
    title: string,
    viewBox: string,
    description: string,
    $is_fill: boolean,
    $is_stroke: boolean,
}



export function Offer() {
    const [activeOfferItem, setActiveOfferItem] = useState(0)

    const icon: Array<icon> = [
        {
            id: "brush",
            title: "Branding Design",
            viewBox: "0 0 64 64",
            $is_fill: true,
            $is_stroke: false,
            description: 'Lorem ipsum dolor sit amet, conssrci eget mi elit cursus donec amet sed sagittis.'
        },
        {
            id: "Tshirt",
            $is_fill: false,
            $is_stroke: true,
            title: "T-Shirt Design",
            viewBox: "3 3 58 58",
            description: 'Lorem ipsum dolor sit amet, cetur adipiscing elisit amet, consectetur adipit, cetur adipiscing et, cetur aditur adipiscing elcing elisit amet, piscing elcing elisit amet, c'
        },
        {
            id: "box",
            $is_fill: false,
            $is_stroke: true,
            title: "Package Design",
            viewBox: "0 0 24 24",
            description: 'Lorem ipsum dolor sit amet, sit ametOrsit ametur adipiscing elit. Orsit ametmet, consectetur adipiscing elisit amet, consectetur adipiscing elici eget mi elit cursus donec amet sed sagittis'
        },
        {
            id: "box",
            $is_fill: false,
            $is_stroke: true,
            title: "Package Design",
            viewBox: "0 0 24 24",
            description: 'Lorem ipsum dolor sit amet, sit ametOrsit ametur adipiscing elit. Orsit ametmet, consectetur adipiscing elisit amet, consectetur adipiscing elici eget mi elit cursus donec amet sed sagittis'
        },
    ]
    const newOffer = icon.map((item, index) => (
        <OfferItemsStyled data-value={index+1 + ''} key={item.id} $isActive={index === activeOfferItem}>
            <SvgIcon
                key={item.id}
                id={item.id}
                width={'85px'}
                height={'85px'}
                viewBox={item.viewBox}
                fill={item.$is_fill ? myTheme.colors.additionalText : 'transparent'}
                stroke={item.$is_stroke ? myTheme.colors.additionalText : 'transparent'}
            />
            <CartTitle>{item.title}</CartTitle>
            <OfferItemsDesctiprion>
                {item.description}
            </OfferItemsDesctiprion>
        </OfferItemsStyled>

    ))
    const responsive = {
        0: {
            items: 1,
        },
        769:{
            items: 2,
        },
        1311: {
            items: 3,
        },
    }
    return (
        <OfferSectionStyled>
            <Wrapper flexdirection={'column'} alignitems={'center'}>
                <TitleSection
                    width={'440px'}
                    description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                    title={'What I Offer'}/>

                <AliceCarousel
                    mouseTracking
                    items={newOffer}
                    responsive={responsive}
                    keyboardNavigation
                    renderNextButton={()=>  <BtnArrowRight onClick={()=>setActiveOfferItem(activeOfferItem+1)} disabled={activeOfferItem === (icon.length-1)}>
                        <ArrowIcon opacity={activeOfferItem === (icon.length-1)? 0.3: 1} id={'rightArrow'}/>
                    </BtnArrowRight>}
                    renderPrevButton={()=>  <BtnArrowLeft onClick={()=>setActiveOfferItem(activeOfferItem-1)} disabled={activeOfferItem ===0}>
                        <ArrowIcon id={'leftArrow'} opacity={activeOfferItem === 0? 0.3: 1}/>
                    </BtnArrowLeft>}
                />
            </Wrapper>
        </OfferSectionStyled>
    )
}


const OfferSectionStyled = styled.section`
    background-color: ${myTheme.colors.whteColor};
    padding: 100px 0 ;
    
`
type ArrowIconProps = {
    id: string,
    opacity?: number,
}
function ArrowIcon(props: ArrowIconProps) {
    return (
        <SvgIcon fill={myTheme.colors.discriptionText} stroke={myTheme.colors.discriptionText} opacity={props.opacity} width={'50px'} height={'50px'} id={props.id}
                 viewBox={"0 0 53 35"}/>
    )
}

export const BtnArrowLeft = styled.button`
   
`

export const BtnArrowRight = styled.button`
    
`