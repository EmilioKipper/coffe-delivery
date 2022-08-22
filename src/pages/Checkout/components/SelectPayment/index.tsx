import {
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
  IconContext,
} from 'phosphor-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
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
  const { register } = useFormContext();
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
            onClick={() => setOption('Cartão de Crédito')}
            current={option === 'Cartão de Crédito'}
          >
            <CreditCard />
            <input
              type="radio"
              value="Cartão de Crédito"
              {...register('paymentMethod')}
            />
            <span>Cartão de crédio</span>
          </SelectPaymentLabel>

          <SelectPaymentLabel
            onClick={() => setOption('Cartão de Débito')}
            current={option === 'Cartão de Débito'}
          >
            <Bank />
            <input
              type="radio"
              value="Cartão de Débito"
              {...register('paymentMethod')}
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
              value="Dinheiro"
              {...register('paymentMethod')}
            />
            <span>Dinheiro</span>
          </SelectPaymentLabel>
        </IconContext.Provider>
      </SelectPaymentRadioContainer>
    </SelectPaymentContainer>
  );
}
