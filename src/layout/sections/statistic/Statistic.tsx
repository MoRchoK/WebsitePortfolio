import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {Container} from "../../../container/Container.ts";



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
            <Container >
            {stats.map((item, index) => (
                <WrapperComponentStyled width={'auto'}  alignitems={"center"}   key={index}>
                    <StatValue>{item.value}
                    </StatValue>
                    <StatText >
                        {item.text}
                    </StatText>
                </WrapperComponentStyled>
            ))}
            </Container>
        </Statisticstyled>
    )
}

const Statisticstyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    padding: 120px 0;
    background-color: ${myTheme.colors.BgBrandsSection};

    ${Container} {
        display: flex;
        gap: 100px;
        justify-content: center;
        align-items: center;
    }


`
const StatValue = styled.span`
    font-size: 105px;
    color: ${myTheme.colors.statValueText};
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 100%;
    margin-bottom: 10px;
`
const StatText = styled.span`
    font-size: 18px;
    color: ${myTheme.colors.descriptionPostText};
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 100%;
`


