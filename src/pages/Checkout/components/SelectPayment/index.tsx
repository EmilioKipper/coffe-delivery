import {
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
  IconContext,
} from 'phosphor-react';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  SelectPaymentContainer,
  SelectPaymentHeader,
  SelectPaymentLabel,
  SelectPaymentRadioContainer,
  SelectPaymentSubtitle,
  SelectPaymentTitle,
} from './styles';

export function SelectPayment() {
  const theme = useTheme();
  const [option, setOption] = useState('');

  return (
    <SelectPaymentContainer>
      <SelectPaymentHeader>
        <CurrencyDollar weight="fill" color={theme.purple} size={22} />
        <div>
          <SelectPaymentTitle>Pagamento</SelectPaymentTitle>
          <SelectPaymentSubtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </SelectPaymentSubtitle>
        </div>
      </SelectPaymentHeader>

      <SelectPaymentRadioContainer>
        <IconContext.Provider
          value={{
            size: 16,
            color: theme.purple,
            weight: 'bold',
          }}
        >
          <SelectPaymentLabel
            onClick={() => setOption('Crédito')}
            current={option === 'Crédito'}
          >
            <CreditCard />
            <input
              type="radio"
              name="select"
              onChange={() => {}}
              checked={option === 'Crédito'}
            />
            <span>Cartão de crédio</span>
          </SelectPaymentLabel>

          <SelectPaymentLabel
            onClick={() => setOption('Débito')}
            current={option === 'Débito'}
          >
            <Bank />
            <input
              type="radio"
              name="select"
              onChange={() => {}}
              checked={option === 'Débito'}
            />
            <span>Cartão de débito</span>
          </SelectPaymentLabel>

          <SelectPaymentLabel
            onClick={() => setOption('Dinheiro')}
            current={option === 'Dinheiro'}
          >
            <Money />
            <input
              type="radio"
              name="select"
              onChange={() => {}}
              checked={option === 'Dinheiro'}
            />
            <span>Dinheiro</span>
          </SelectPaymentLabel>
        </IconContext.Provider>
      </SelectPaymentRadioContainer>
    </SelectPaymentContainer>
  );
}
