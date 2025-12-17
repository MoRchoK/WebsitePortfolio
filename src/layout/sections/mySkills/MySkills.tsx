import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Container} from "../../../container/Container.ts";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {BtnWrapper, WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <Container>
                <Wrapper flexdirection={'row'} gap={'20px'} justifycontent={'space-between'}>
                    <WhyHireMeComponent/>
                    <StatSkills/>
                </Wrapper>
            </Container>
        </MySkillsSectionStyled>
    )
}
const MySkillsSectionStyled = styled.section`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.secondarySection};
    padding: 130px 0;
    h2 {
        text-align: left;
        margin-bottom: 40px;
    }
   
    @media ${myTheme.media.large} {
        ${Container} > ${Wrapper} {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 100px;
            h2 {
                align-self: center;
            }
            p{
                text-align: center;
            }
            
            ${BtnWrapper}{
                justify-content: center;
            }
        }
    }
`




