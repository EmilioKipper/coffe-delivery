import { Minus, Plus, IconContext } from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { CounterContainer, CounterValue, IconButton } from './styles';

interface CounterProps {
  children?: (quantity: number) => ReactNode;
  onChange?: (quantity: number) => void;
  initialValue?: number;
}

export function Counter({ children, onChange, initialValue }: CounterProps) {
  const [value, setValue] = useState(initialValue || 1);
  const theme = useTheme();

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]);

  return (
    <>
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
      {children && children(value)}
    </>
  );
}
