import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Container} from "../../../container/Container.ts";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {BtnWrapper, WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <Container>
                <WrapperComponent  flexdirection={'row'} justifycontent={'space-between'}>
                    <WhyHireMeComponent/>
                    <StatSkills/>
                </WrapperComponent>
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
        margin-bottom: 40px;
    }
   
    @media ${myTheme.media.large} {
        ${Container} > ${WrapperComponent} {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 100px;
            & > ${WrapperComponent} {
                width: 80%;
            }
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




