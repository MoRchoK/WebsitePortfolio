import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {useState} from "react";
import {OfferSlider} from "./offerSlider/offerSlider.tsx";

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
    ]
    return (
        <OfferSectionStyled>
            <Wrapper flexdirection={'column'} alignitems={'center'}>
                <TitleSection
                    width={'440px'}
                    description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                    title={'What I Offer'}/>

                <OfferSlider activeOfferItem={activeOfferItem} icon={icon} setActiveOfferItem={setActiveOfferItem} />

            </Wrapper>
        </OfferSectionStyled>
    )
}


const OfferSectionStyled = styled.section`
    background-color: ${myTheme.colors.whteColor};
    padding: 150px 0 80px;
    @media ${myTheme.media.mobile} {
        padding-right: 50px;
    }



`

