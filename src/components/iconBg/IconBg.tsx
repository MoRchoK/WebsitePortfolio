import {IconOffer} from "../../layout/sections/offer/offerItems/OfferItems.tsx";
import {myTheme} from "../Theme/Theme.styled.tsx";
import sprite from  '../../../public/iconsSprites.svg'





type IconBgPropsType = {
    id: 'line' | 'elipse' | 'polygon'
    top?: string
    bottom?: string
    left?: string
    rotate?: number
    right?: string
    stroke?: string


}

export function IconBg (props: IconBgPropsType) {
    return(
        <IconOffer
            rotate={props.rotate}
            top={props.top}
            right={props.right}
            bottom={props.bottom}
            left={props.left}
            position = {'absolute'}
            width={'24px'}
            height={'24px'}
            viewBox={'0 0 24 24'}
            fill={'transparent'}
            stroke={props.stroke || myTheme.colors.bgIconMain}
        >
            <use xlinkHref={sprite + '#' + props.id}/>
        </IconOffer>
    )
}