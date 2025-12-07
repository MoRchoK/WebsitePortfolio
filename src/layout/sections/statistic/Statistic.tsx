import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";



type statsType = {
    value: string,
    text: string,

}

export function Statistic () {

    const stats: Array<statsType> = [
        {
            value: '720+',
            text: 'Projects Completed',
        },
        {
            value: '920+',
            text: 'Products Sold',
        },
        {
            value: '25+',
            text: 'Awards Received',
        },
        {
            value: '700+',
            text: 'Happy Clients',
        },
    ]

    return (
        <Statisticstyled>
            {stats.map((item, index) => (
                <WrapperComponentStyled alignitems={"center"} key={index}>
                    <StatText color={myTheme.colors.statValueText} font_size={'105px'}>{item.value}
                    </StatText>
                    <StatText color={myTheme.colors.descriptionPostText} font_size={'18px'}>
                        {item.text}
                    </StatText>
                </WrapperComponentStyled>
            ))}
        </Statisticstyled>
    )
}

const Statisticstyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    flex-direction: row;
    height: 33vh;
    background-color: ${myTheme.colors.BgBrandsSection};
`


type StatTextPropsType = {
    font_size: string
    color: string

}

const StatText = styled.span<StatTextPropsType>`
    font-size: ${(props) => props.font_size};
    color: ${(props) => props.color};

`

