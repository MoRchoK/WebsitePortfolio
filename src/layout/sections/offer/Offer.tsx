import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {S} from "./offer_Styled/Offer_Styled.ts";
import {useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './offerCard/offerSlider.css';
import {OfferCard} from "./offerCard/offerCard.tsx";
import {NextBtn, PrevBtn} from "./btnArrowOffer/BtnArrowOffer.tsx";




export type icon = {
    id: string,
    title: string,
    viewBox: string,
    description: string,
    $is_fill: boolean,
    $is_stroke: boolean,
}

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



export function Offer() {
    const [activeOfferItem, setActiveOfferItem] = useState(0)

    const newOffer = icon.map((item, index) => (
        <OfferCard index={index} item={item} activeOfferItem={activeOfferItem}/>))

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
        <S.OfferSection>
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
                    renderNextButton={()=>  <NextBtn length={newOffer.length} activeOfferItem={activeOfferItem} setActiveOfferItem={setActiveOfferItem} />}
                    renderPrevButton={()=>  <PrevBtn activeOfferItem={activeOfferItem} setActiveOfferItem={setActiveOfferItem}/>}
                />
            </Wrapper>
        </S.OfferSection>
    )
}




