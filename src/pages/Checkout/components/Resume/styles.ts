import styled from 'styled-components';

export const ResumeContainer = styled.div`
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme.card};
  padding: 2.5rem;
`;

export const ResumeProductCardContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.688rem;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme.text};
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 0.5rem;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 0.5rem;
        padding: 0.5rem 0;
      }
    }
  }
`;

export const ResumeRemoveButton = styled.button`
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  border: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.688rem;
  gap: 0.25rem;

  transition: 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.subtitle};
  }
`;

export const ResumePrices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;
  margin: 0.75rem 0;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.text};
  }

  > div:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
  }
`;

export const ResumeConfirmButton = styled.button`
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${(props) => props.theme.white};
  transition: 0.5s ease-out;
  width: 100%;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
  }
`;
