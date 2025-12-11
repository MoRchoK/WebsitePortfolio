
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";


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
            description: 'Lorem ipsum dolor sit amet, cetur adipiscing elisit amet, consectetur adipit, cetur adipiscing et, cetur aditur adipiscing elcing elisit amet, piscing elcing elisit amet, c'},
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
                <WrapperComponent alignitems={'center'}>
                    <TitleSection
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                        title={'What I Offer'}/>
                    <WrapperIcons  >
                        <BtnArrowLeft>
                            <ArrowIcon id={'leftArrow'}/>
                        </BtnArrowLeft>

                        <BtnArrowRight>
                            <ArrowIcon id={'rightArrow'}/>
                        </BtnArrowRight>
                        {icon.map((item) => (
                            <OfferItemsStyled>
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

                        ))}
                    </WrapperIcons>
                </WrapperComponent>
        </OfferSectionStyled>
    )
}



const CartTitle = styled.h3`
    font-size: 25px;
    letter-spacing: 0.01em;
    color: ${myTheme.colors.PraymaryText};
    line-height: 100%;
    margin-bottom: 15px;
    font-weight: 600;
`

const OfferItemsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.5);
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
    max-width: 400px;
    min-width: 200px;
    min-height: 200px;
    padding: 70px 45px;
    overflow: hidden;

    & > svg {
        flex-shrink: 0;
        margin-bottom: 40px;
    }
`

const OfferItemsDesctiprion = styled.p`
    font-size: 16px;
    color: ${myTheme.colors.descriptionCard};
    text-align: center;
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 177%;
`

const WrapperIcons = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1550px;
    height: 100%;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 70px 47px;
    border: 1px red solid;
    position: relative;
  
    button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`

type ArrowIconProps = {
    id: string,
}

function ArrowIcon(props: ArrowIconProps) {
    return (
        <SvgIcon fill={'black'} stroke={'black'} width={'50px'} height={''} id={props.id}
                 viewBox={"0 0 53 35"}/>
    )
}

const BtnArrowLeft = styled.button`
    left: -50px;
`

const BtnArrowRight = styled.button`
    right: -50px;
`

const OfferSectionStyled = styled.section`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${myTheme.colors.whteColor};
    padding: 150px 0;

`

