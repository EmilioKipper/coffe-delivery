import styled from 'styled-components';

interface HeaderProps {
  isSticky: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  position: sticky;
  top: ${(props) => (props.isSticky ? 0 : 'unset')};
  background: ${(props) => props.theme.white};
  z-index: 1;
  padding: 0 10rem;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  color: ${(props) => props.theme[props.color]};
  background-color: ${(props) => props.theme[props.backgroundColor]};
  padding: 0.5rem;
  border-radius: 6px;

  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 130%;
`;

interface IconContainerProps {
  color: 'purple' | 'yellowDark';
  backgroundColor: 'purpleLight' | 'yellowLight';
}
