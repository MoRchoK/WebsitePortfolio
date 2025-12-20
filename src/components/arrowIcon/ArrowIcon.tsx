import {SvgIcon} from "../svgIcon/SvgIcon.tsx";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


type ArrowIconProps = {
    id: string,
    opacity?: number,
}


export const  ArrowIcon = (props: ArrowIconProps)=> {
    return (
        <SvgIcon fill={myTheme.colors.discriptionText} stroke={myTheme.colors.discriptionText}
                 opacity={props.opacity}
                 width={'50px'}
                 height={'50px'}
                 id={props.id}
                 viewBox={"0 0 53 35"}/>
    )
}