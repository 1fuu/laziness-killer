import styled from 'styled-components';
import { useState, useCallback } from 'react';

const Calendar: React.FC = () => {
    const [crntMonth, setCrntMonth] = useState<number>(new Date().getMonth() + 1);
    const [crntYear, setCrntYear] = useState<number>(new Date().getFullYear());
    const [frstDay, setFrstDay] = useState<number>(new Date(crntYear, crntMonth - 1, 1).getDay());

    const days = ['일', '월', '화', '수', '목', '금', '토'];

    const onNextButton = useCallback(() => {
        if (crntMonth !== 12) {
            setCrntMonth((crntMonth) => crntMonth + 1);
        } else {
            setCrntMonth(1);
            setCrntYear((crntYear) => crntYear + 1);
        }
        setFrstDay(new Date(crntYear, crntMonth, 1).getDay());
    }, [crntMonth, crntYear]);

    const onPrevButton = useCallback(() => {
        if (crntMonth !== 1) {
            setCrntMonth((crntMonth) => crntMonth - 1);
        } else {
            setCrntMonth(12);
            setCrntYear((crntYear) => crntYear - 1);
        }
        setFrstDay(new Date(crntYear, crntMonth - 2, 1).getDay());
    }, [crntMonth, crntYear]);

    return (
        <StyledCalendarContainer>
            <StyledHeaderBlock>
                <StyledDateBlock>
                    {crntYear}년 {crntMonth}월
                </StyledDateBlock>
                <StyledButtonsBlock>
                    <StyledPrevButton onClick={onPrevButton}>이전</StyledPrevButton>
                    <StyledNextButton onClick={onNextButton}>다음</StyledNextButton>
                </StyledButtonsBlock>
            </StyledHeaderBlock>
            <StyledHeaderDaysContainer>
                {days.map((item, index) => (
                    <StyledHeaderDayBlock key={index}>{item}</StyledHeaderDayBlock>
                ))}
            </StyledHeaderDaysContainer>
            <StyledDaysContainer>
                {Array.from({ length: new Date(crntYear, crntMonth, -1).getDate() + frstDay + 1 }, (_, i) =>
                    i >= frstDay ? i - frstDay + 1 : 0,
                ).map((item, index) =>
                    item !== 0 ? (
                        <StyledDayBlock key={index}>{item}</StyledDayBlock>
                    ) : (
                        <StyledEmptyDayBlock key={index} />
                    ),
                )}
            </StyledDaysContainer>
        </StyledCalendarContainer>
    );
};

const StyledButtonsBlock = styled.div`
    display: flex;
`;

const StyledDateBlock = styled.div`
    display: flex;
    font-size: 10px;
    font-weight: bold;
`;

const StyledNextButton = styled.div`
    width: 50px
    height: 50px;
    border: solid 1px;
    border-color: silver;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    &: hover {
        background-color: silver;
    }
`;

const StyledHeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledPrevButton = styled.div`
    width: 50px
    height: 50px;
    border: solid 1px;
    border-color: silver;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    &: hover {
        background-color: silver;
    }
`;

const StyledEmptyDayBlock = styled.div`
    width: 14.28%;
    padding-bottom: 10%;
`;

const StyledDayBlock = styled.div`
    width: 13.48%;
    padding-bottom: 10%;
    border: solid 1px;
    border-radius: 5px;
    margin: 1px;
    border-color: #eaeaea;
    font-size: 10px;
    color: grey;
    text-align: center;
`;

const StyledDaysContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const StyledHeaderDayBlock = styled.div`
    width: 14%;
    padding-bottom: 5%;
    border-radius: 5px;
    margin: 1px;
    background-color: #eaeaea;
    font-size: 12px;
    font-weight: bold;
    color: grey;
    text-align: center;
`;

const StyledHeaderDaysContainer = styled.div`
    width: 100%;
    display: flex;
`;

const StyledCalendarContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export default Calendar;
