import styled, { css } from 'styled-components';

export const SelectPaymentContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 12px;
`;

export const SelectPaymentHeader = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
`;

export const SelectPaymentTitle = styled.span`
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
  margin-bottom: 2px;
`;

export const SelectPaymentSubtitle = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme.text};
`;

export const SelectPaymentRadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  gap: 0.75rem;

  margin-top: 2rem;
`;

interface SelectPaymentLabelProps {
  current: boolean;
}

export const SelectPaymentLabel = styled.label<SelectPaymentLabelProps>`
  font-size: 0.75rem;
  white-space: nowrap;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;

  background: ${(props) => props.theme.button};
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  width: 100%;
  border: 1px solid transparent;

  & input {
    display: none;
  }

  ${(props) => {
    if (props.current) {
      return css`
        border: 1px solid ${(props) => props.theme.purple};
        background-color: ${(props) => props.theme.purpleLight};
      `;
    }
  }}

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;
