import styled from 'styled-components';

export const AddressFormContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const AddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const AddressTitle = styled.div`
  font-size: 1rem;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.subtitle};
`;

export const AddressSubtitle = styled.div`
  font-size: 0.875rem;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.text};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  > input:first-child {
    width: 16rem;
  }
`;

export const FormPart1 = styled.div`
  display: flex;
  > input:nth-child(2) {
    flex-grow: 1;
  }
`;

export const FormPart2 = styled.div`
  display: flex;

  > input:nth-child(2) {
    width: 18.75rem;
  }
`;
