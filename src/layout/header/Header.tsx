import {S} from "./header_styled/Header_Styled.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../container/Container.ts";
import {Wrapper} from "../../components/wrapperComponent/Wrapper.tsx";
import {useEffect, useState} from "react";
import {MobileMenu} from "./burger/MobileMenu.tsx";
import {MenuDesktop} from "./menuHeader/menuDesktop/MenuDesktop.tsx";

export function Header() {
    const [isActive, setIsActive] = useState(false)
    const headerMenuItems = ['Home', 'About', 'Services', 'Store', 'Blog', 'Contact']

    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);



    return (
        <S.Header>
            <Container>
                <Wrapper justifycontent={'space-between'} alignitems={'center'}>
                    <Logo/>
                    {width <= tablet? <MobileMenu headerMenuItems={headerMenuItems} $isActive={isActive} $setIsActive={setIsActive}/>: <MenuDesktop menuItems={headerMenuItems}/>}
                </Wrapper>
            </Container>
        </S.Header>
    )
}


