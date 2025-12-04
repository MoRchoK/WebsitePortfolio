import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {TitleComponent} from "../../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {
    BtnBusinessBlack,
    BtnBusinessPropsType,
    BtnBusinessStyled
} from "../../../../components/btnBusiness/BtnBusiness.tsx";


export function WhyHireMeComponent() {
    return (
        <WrapperComponentStyled height={'300px'} width={'26%'}>
            <TitleComponent marginBottom='2.5rem'  title='Why Hire Me ?'/>
            <MySkillsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                amet
                pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus.<br/> Vulputate
                pulvinar
                cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
            </MySkillsText>

            <WrapperComponentStyled flexDirection={'row'} gap={'1.5rem'}>
                <BtnBusinessBlack  width={'8.7em'} height={'3.5em'} title={'Hire Me'} ></BtnBusinessBlack>
                <BtnBusinessGray width={'12.5em'} height={'3.5em'} title='Download CV'></BtnBusinessGray>
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
        <BtnBusinessGrayStyled width={props.width} height={props.height} >{props.title}</BtnBusinessGrayStyled>
    )
}

const BtnBusinessGrayStyled = styled.button<BtnBusinessStyled>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    color: ${myTheme.colors.whteColor};
    font-size: 16px;
    border: ${myTheme.colors.borderBtnGray} 2px solid;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: ${myTheme.colors.PraymaryText};
    

`