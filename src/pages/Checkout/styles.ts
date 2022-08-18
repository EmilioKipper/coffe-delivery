import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > div:first-child {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.subtitle};

  margin-bottom: 1rem;
`;
