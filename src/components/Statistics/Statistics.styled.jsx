import styled from 'styled-components';

export const StyledStatisticsList = styled.ul`
  text-align: left;
`;

export const StyledStaticticsItem = styled.li`
  font-size: 20px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledStatisticsSpan = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #34ebcd;
  text-shadow: #000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px;
`;
