import styled from 'styled-components';

export const InputBase = styled.input`
  box-sizing: border-box;

  background: #eeeded;

  border: 1px solid ${(props) => props.theme.button};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.text};

  margin: 0.5rem;
`;
