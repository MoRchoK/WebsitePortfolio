import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {TitleComponent} from "../../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {
    BtnBusinessBlack,
    BtnBusinessPropsType
} from "../../../../components/btnBusiness/BtnBusiness.tsx";


export function WhyHireMeComponent() {
    return (
        <WrapperComponentStyled height={'300px'} width={'26%'}>
            <TitleComponent  title='Why Hire Me ?'/>
            <MySkillsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                amet
                pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus.<br/> Vulputate
                pulvinar
                cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
            </MySkillsText>

            <WrapperComponentStyled flexdirection={'row'} gap={'1.5rem'}>
                <BtnBusinessBlack title={'Hire Me'} ></BtnBusinessBlack>
                <BtnBusinessGray  title='Download CV'></BtnBusinessGray>
            </WrapperComponentStyled>

        </WrapperComponentStyled>


    )
}


const MySkillsText = styled.p`
    color: ${myTheme.colors.discriptionText};
    margin-bottom: 2.5rem;
`


function BtnBusinessGray (props: BtnBusinessPropsType){
    return (
        <BtnBusinessGrayStyled>{props.title}</BtnBusinessGrayStyled>
    )
}

const BtnBusinessGrayStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 1em 1.5em;
    font-size: 16px;
    border: ${myTheme.colors.borderBtnGray} 2px solid;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: ${myTheme.colors.PraymaryText};


`