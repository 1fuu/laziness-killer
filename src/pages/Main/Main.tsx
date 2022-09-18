import styled from 'styled-components';
import { Calendar } from 'common/domains';

const maxWidth = process.env.REACT_APP_MAX_WIDTH;

const Main: React.FC = () => {
    return (
        <StyledMainContainer>
            <StyledCalendarContainer>
                <Calendar />
            </StyledCalendarContainer>
        </StyledMainContainer>
    );
};

export default Main;

const StyledCalendarContainer = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const StyledMainContainer = styled.div`
    width: ${maxWidth}px;
    margin: 0 auto;
`;
