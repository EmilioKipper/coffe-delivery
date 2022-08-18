import styled from 'styled-components';

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.button};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border-radius: 6px;
`;

export const IconButton = styled.button`
  background-color: ${(props) => props.theme.button};
  border-radius: 6px;
  border: none;
  height: inherit;
  cursor: pointer;

  svg:hover line {
    stroke: ${(props) => props.theme.purpleDark};
  }
`;

export const CounterValue = styled.span`
  font-size: 1rem;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme.title};
`;
