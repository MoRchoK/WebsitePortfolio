import {S} from "./header_styled/Header_Styled.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../container/Container.ts";
import {MenuDesktop} from "./menuHeader/menuDesktop/MenuDesktop.tsx";
import * as React from "react";
import {MobileMenu} from "./burger/MobileMenu.tsx";
import {useEffect, useState} from "react";


// const Ligting: React.FC = ()=> {
//     const [isLight, setIsLight] = useState<boolean>(true);
//     const handleClick = () => {
//         setIsLight(!isLight)
//     }
//     return (
//         <LightingStyled onClick={() =>handleClick()}>
//             {isLight? <LightImg src={light} alt={'light'}/>: <DarkImg src={dark} alt={'dark'}/> }
//         </LightingStyled>
//     )
// }
//
// const LightImg = styled.img`
//     border-radius: 5px;
//     height: 50px;
// `
// const DarkImg = styled.img`
//     height: 50px;
//     border-radius: 5px;
// `
//
// const LightingStyled = styled.button`
//     position: absolute;
//     left: 0;
//     bottom: -53px;
//
// `

export type headerMenuItemsType = {
    title: string,
    id: string,
}

const headerMenuItems: Array<headerMenuItemsType> = [{
    title: 'Home',
    id: 'home',
},
    {
        title: 'About',
        id: 'about',
    },
    {
        title: 'Services',
        id: 'services',
    },
    {
        title: 'Store',
        id: 'store',
    },
    {
        title: 'Blog',
        id: 'blog',
    },
    {
        title: 'Contact',
        id: 'contact',
    },
]

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);



    return (
        <>
        {width > tablet ? <S.Header>
            <Container>
                <S.HeaderWrapper justifycontent={'space-between'} alignitems={'center'}>
                    <Logo/>
                    <MenuDesktop menuItems={headerMenuItems}/>
                    {/*<Ligting/>*/}
                </S.HeaderWrapper>
            </Container>
        </S.Header> : <MobileMenu menuItems={headerMenuItems}/>}
        </>
    )
}






