import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export type Color = 'yellowDark' | 'yellow' | 'text' | 'purple';

interface IconColor {
  color: Color;
}

export const Icon = styled.span<IconColor>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme[props.color]};
`;
