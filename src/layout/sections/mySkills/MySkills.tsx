import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";
import {IconBg} from "../../../components/iconBg/IconBg.tsx";

import {PatternIcon} from "../../../components/bgCross/PatternIcon.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <WhyHireMeComponent/>
            <StatSkills/>

            <IconBg stroke={myTheme.colors.strokeSecondSection} right={'20%'} top={'10%'} id={'elipse'}/>
            <IconBg stroke={myTheme.colors.strokeSecondSection} right={'40%'} bottom={'10%'} id={'elipse'}/>


            <IconBg stroke={myTheme.colors.strokeSecondSection} left={'28%'} top={'11%'} id={'polygon'}/>
            <IconBg stroke={myTheme.colors.strokeSecondSection} left={'51%'} top={'27%'} id={'polygon'}/>


            <PatternIcon stroke={myTheme.colors.strokeSecondSection} bottom={'8%'} right={'3%'}/>
            <PatternIcon stroke={myTheme.colors.strokeSecondSection} bottom={'13%'} left={'10%'}/>
            <PatternIcon stroke={myTheme.colors.strokeSecondSection} top={'20%'} left={'5%'}/>
        </MySkillsSectionStyled>
    )
}


const MySkillsSectionStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: ${myTheme.colors.secondarySection};
    gap: 160px;
    position: relative;


`




