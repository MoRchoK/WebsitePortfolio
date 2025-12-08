import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";
import {IconBg} from "../../../components/iconBg/IconBg.tsx";

import {PatternIcon} from "../../../components/bgCross/PatternIcon.tsx";
import {Container} from "../../../container/Container.ts";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <Container>
                <WrapperComponentStyled flexdirection={'row'} justifycontent={'space-between'} width={'100%'} height={'100%'}>
                    <WhyHireMeComponent/>
                    <StatSkills/>
                </WrapperComponentStyled>
                <IconBg stroke={myTheme.colors.strokeSecondSection} right={'20%'} top={'10%'} id={'elipse'}/>
                <IconBg stroke={myTheme.colors.strokeSecondSection} right={'40%'} bottom={'10%'} id={'elipse'}/>
                <IconBg stroke={myTheme.colors.strokeSecondSection} left={'28%'} top={'11%'} id={'polygon'}/>
                <IconBg stroke={myTheme.colors.strokeSecondSection} left={'51%'} top={'27%'} id={'polygon'}/>
                <PatternIcon stroke={myTheme.colors.strokeSecondSection} bottom={'8%'} right={'3%'}/>
                <PatternIcon stroke={myTheme.colors.strokeSecondSection} bottom={'13%'} left={'10%'}/>
                <PatternIcon stroke={myTheme.colors.strokeSecondSection} top={'20%'} left={'5%'}/>
            </Container>
        </MySkillsSectionStyled>
    )
}


const MySkillsSectionStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.secondarySection};
    gap: 160px;
    position: relative;

    ${Container} {
        padding: 130px 0;
    }


`




