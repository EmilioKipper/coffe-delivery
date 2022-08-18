import styled from 'styled-components';

export const TransparentBackground = styled.div`
  background-color: transparent;
`;

export const EmptyDiv = styled.div`
  height: 1.875rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    width: 7.5rem;
    margin: auto;
    margin-top: -1.875rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  background: ${(props) => props.theme.yellowLight};
  width: fit-content;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme.yellowDark};
`;

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme.subtitle};
`;

export const Description = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  margin-bottom: 1.375rem;
  text-align: center;
  color: ${(props) => props.theme.label};
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.375rem;
  line-height: 130%;
  flex: 1;
  color: ${(props) => props.theme.text};

  ::before {
    content: 'R$';
    font-family: 'Roboto';
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme.purpleDark};
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
