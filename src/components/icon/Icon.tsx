import sprite from '../../../public/iconsSprites.svg'


type IconPropsType = {
    idIcon: string,
    width?: string,
    height?: string,
}



export function Icon(props: IconPropsType): JSX.Element {

    return (
        <svg width="83" height="84" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`${sprite}#${props.idIcon}`}>

            </use>

        </svg>
    )
}