import { Minus, Plus, IconContext } from 'phosphor-react';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { CounterContainer, CounterValue, IconButton } from './styles';

export function Counter() {
  const [value, setValue] = useState(1);
  const theme = useTheme();

  return (
    <CounterContainer>
      <IconContext.Provider
        value={{
          size: 14,
          color: theme.purple,
        }}
      >
        <IconButton
          onClick={() => setValue((prev) => (prev > 1 ? prev - 1 : 1))}
        >
          <Minus />
        </IconButton>
        <CounterValue>{value}</CounterValue>
        <IconButton onClick={() => setValue((prev) => prev + 1)}>
          <Plus />
        </IconButton>
      </IconContext.Provider>
    </CounterContainer>
  );
}
