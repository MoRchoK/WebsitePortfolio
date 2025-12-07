import styled from "styled-components";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {IconOffer, OfferItems} from "./offerItems/OfferItems.tsx";
import sprite from "../../../../public/iconsSprites.svg";

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
            <WrapperComponentStyled  alignitems={'center'}>
                <TitleComponent mgbtdescriotion={'3.75rem'} alignment={'center'} description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'} title={'What I Offer'}/>
                <WrapperComponentStyled alignitems={'center'} flexdirection={'row'} gap={'2rem'}>
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
                            margin_bottom={'2.5rem'}
                            title={item.title}
                            width={'100px'}
                            height={'100px'}
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

