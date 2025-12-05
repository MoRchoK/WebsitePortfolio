import styled from "styled-components";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {IconOffer, OfferItems} from "./offerItems/OfferItems.tsx";
import sprite from "../../../../public/iconsSprites.svg";

export function Offer() {
    return (
        <OfferSectionStyled>
            <WrapperComponentStyled alignitems={'center'}>
                <TitleComponent   title={'What I Offer'}/>
                <OfferDescribtion  >Things that I can do for my clients. Just make your good trust I love to provide
                    quality works.</OfferDescribtion>
                <WrapperComponentStyled alignitems={'center'} flexdirection={'row'} gap={'2rem'}>
                    <IconOffer
                        xmlns={"http://www.w3.org/1999/xlink"}
                        fill={myTheme.colors.arrowColor}
                        width={'83px'}
                        height={'83px'} >
                        <use xlinkHref={sprite + "#" + 'leftArrow' }></use>
                    </IconOffer>
                    <OfferItems
                        title={'Branding Design'}
                        width={'100px'}
                        height={'100px'}
                        svgid={'brush'}
                        fill={myTheme.colors.highlighting}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'}
                    />

                    <OfferItems
                        width={'85px'}
                        height={'85px'}
                        title={'T-Shirt Design'}
                        svgid={'Tshirt'}
                        fill={'#D8D8D8'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'}
                    />

                    <OfferItems

                        width={'85px'}
                        height={'85px'}
                        title={'Package Design'}
                        svgid={'box'}
                        fill={'#D8D8D8'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'}
                    />
                    <IconOffer
                        xmlns={"http://www.w3.org/1999/xlink"}
                        width={'83px'}
                        height={'83px'} fill={myTheme.colors.arrowColor}>
                        <use xlinkHref={sprite + "#" + 'rightArrow' }></use>
                    </IconOffer>
                </WrapperComponentStyled>
            </WrapperComponentStyled>
        </OfferSectionStyled>
    )
}





const OfferSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${myTheme.colors.whteColor};
    gap: 160px;
`


// type OfferDescribtionPropsType = {
//     width: string,
// }
const OfferDescribtion = styled.p`
    font-size: 16px;
    line-height: 185%;
    display: block;
    margin-bottom: 3.75rem;
    width: 30%;
    text-align: center;
    color: ${myTheme.colors.discriptionText}

`



