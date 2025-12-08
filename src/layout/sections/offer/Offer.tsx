import styled from "styled-components";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {IconOffer, OfferItems, OfferItemsStyled} from "./offerItems/OfferItems.tsx";
import sprite from "../../../../public/iconsSprites.svg";
import {Container} from "../../../container/Container.ts";

export function Offer() {
    type icon = {
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
            title: "Brush",
            viewBox: "0 0 64 64",
            $is_fill: true,
            $is_stroke: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'
        },
        {
            id: "Tshirt",
            $is_fill: false,
            $is_stroke: true,
            title: "T-Shirt Design",
            viewBox: "3 3 58 58",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'
        },
        {
            id: "box",
            $is_fill: false,
            $is_stroke: true,
            title: "Package Design",
            viewBox: "0 0 24 24",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'
        },
    ]
    return (
        <OfferSectionStyled>
            <Container>
                <WrapperComponentStyled alignitems={'center'}>
                    <TitleComponent mgbtdescriotion={'3.75rem'} alignment={'center'}
                                    description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                                    title={'What I Offer'}/>
                    <WrapperIcons>
                        <IconOffer xmlns={"http://www.w3.org/1999/xlink"}
                                   preserveAspectRatio="xMidYMid meet"
                                   viewBox="0 0 53 35"
                                   width={'50px'}
                                   fill={myTheme.colors.additionalText}
                                   stroke={'none'}
                                   height={'60px'}>
                            <use xlinkHref={sprite + "#" + 'leftArrow'}></use>
                        </IconOffer>
                        {icon.map((item, index) => (
                            <OfferItems
                                key={index}
                                title={item.title}
                                svgid={item.id}
                                viewBox={item.viewBox}
                                fill={item.$is_fill ? myTheme.colors.additionalText : 'transparent'}
                                stroke={item.$is_stroke ? myTheme.colors.additionalText : 'transparent'}
                                description={item.description}
                            />
                        ))}

                        <IconOffer xmlns={"http://www.w3.org/1999/xlink"}
                                   preserveAspectRatio="xMidYMid meet"
                                   viewBox="0 0 53 35"
                                   width={'50px'}
                                   height={'60px'}
                                   fill={myTheme.colors.PraymaryText}>
                            <use xlinkHref={sprite + "#" + 'rightArrow'}></use>
                        </IconOffer>
                    </WrapperIcons>
                </WrapperComponentStyled>
            </Container>
        </OfferSectionStyled>
    )
}

const WrapperIcons = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    flex-direction: row;
    gap: 2rem;

    & > svg:first-child {
        position: absolute;
        left: -100px;
    }

    & > svg:last-child {
        position: absolute;
        right: -100px;
    }

    ${OfferItemsStyled} > svg {
        width: 100px;
        height: 100px;
        margin-bottom: 2.5rem;
    }
`
const OfferSectionStyled = styled.section`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${myTheme.colors.whteColor};
    gap: 160px;
    padding-top: 140px;
    margin-bottom: 140px;
`

