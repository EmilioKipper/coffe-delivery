import styled from 'styled-components';

export const HomeContainer = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    max-width: 100%;
  }

  & h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 1rem;
  }
`;

export const CoffeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  flex-wrap: wrap;
`;
