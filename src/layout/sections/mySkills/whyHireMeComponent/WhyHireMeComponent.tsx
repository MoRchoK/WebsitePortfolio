import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import {Title} from "../../../../components/title/Title.tsx";
import {BtnDark} from "../../../../components/buttonDark/ButtonDark.tsx";
import {ButtonLight} from "../../../../components/buttonLight/ButtonLight.tsx";
import {S} from "../skills_styled/Skills_Styled.ts";


export function WhyHireMeComponent() {
    return (
        <S.WhyHireMe>
            <Wrapper flexdirection={'column'} justifycontent={'flex-start'}>
                <Title title='Why Hire Me ?'/>
                <S.MySkillsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                    amet
                    pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. <span>Vulputate
                    pulvinar
                    cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.</span>
                </S.MySkillsText>
                <S.BtnWrapper>
                    <BtnDark as={'a'}>Hire Me</BtnDark>
                    <ButtonLight>Download CV</ButtonLight>
                </S.BtnWrapper>
            </Wrapper>
        </S.WhyHireMe>
    )
}






