import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SuccessHeaderContainer = styled.div`
  margin-bottom: 2.5rem;

  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.yellowDark};
  }
  > h2 {
    font-size: 1.25rem;
    line-height: 130%;
    font-stretch: 100;
    color: ${(props) => props.theme.subtitle};
  }
`;

export const SuccessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  background: linear-gradient(white 0 0) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border: 1px solid transparent;
  width: 100%;
  max-width: 526px;
`;

export const SuccessInfoItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 130%;
  font-size: 1rem;
  color: ${(props) => props.theme.text};

  strong {
    font-weight: bold;
  }
`;
