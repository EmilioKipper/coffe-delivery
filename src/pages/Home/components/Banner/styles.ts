import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  margin: 5.875rem 0;

  & img {
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`;

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerTitle = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
  color: ${(props) => props.theme.title};
`;

export const BannerSubtitle = styled.div`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
  font-stretch: 100;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.25rem;
  margin: 4rem 0;
`;
