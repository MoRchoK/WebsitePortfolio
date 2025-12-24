import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import {S} from "./../main_styled/Main_Styled.tsx";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import Typewriter from 'typewriter-effect';
import { animateScroll as scroll } from 'react-scroll';


export const MainInfo:React.FC = ()=> {

    const scrollToBottom = (e: any) => {
        e.preventDefault()
        scroll.scrollToBottom();
    };


    return (
        <S.MainInfoWrapper >
                <S.MainTitle>
                    <Typewriter
                        options={{
                            strings: ['Graphic Designer', 'Frontend Developer' ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 50
                        }}/>
                    </S.MainTitle>
                <Wrapper flexdirection={"column"} alignitems={"flex-start"}>
                    <S.GreetingStyled>Hello I’m</S.GreetingStyled>
                    <S.NameTitleStyled>Daniel Bryan</S.NameTitleStyled>
                </Wrapper>
                <S.DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</S.DiscriptionTextStyled>
                <BtnStyled onClick={scrollToBottom} as={'a'} href={'footer'}>GET IN TOUCH</BtnStyled>
        </S.MainInfoWrapper>
    )
}




