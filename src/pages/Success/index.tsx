import { MapPin, Timer, CurrencyDollar, IconContext } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
  SuccessContainer,
  SuccessHeaderContainer,
  SuccessInfoContainer,
  SuccessInfoItem,
} from './styles';
import { CircleIcon } from '../../components/CircleIcon';
import delivery from './Delivery.png';

export function Success() {
  const theme = useTheme();

  return (
    <>
      <SuccessHeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </SuccessHeaderContainer>
      <SuccessContainer>
        <SuccessInfoContainer>
          <IconContext.Provider
            value={{
              weight: 'fill',
              size: 16,
              color: theme.white,
            }}
          >
            <SuccessInfoItem>
              <CircleIcon color="purple">
                <MapPin />
              </CircleIcon>
              <div>
                Entrega em <strong>rua em negrito + numero</strong> resto do
                endereço
              </div>
            </SuccessInfoItem>
            <SuccessInfoItem>
              <CircleIcon color="yellow">
                <Timer />
              </CircleIcon>
              <div>
                <div>Previsão de entrega</div>
                <div>
                  <strong>20min - 30min</strong>
                </div>
              </div>
            </SuccessInfoItem>

            <SuccessInfoItem>
              <CircleIcon color="yellowDark">
                <CurrencyDollar />
              </CircleIcon>
              <div>
                <div>Pagamento na entrega</div>
                <div>
                  <strong>Cartão de crédito</strong>
                </div>
              </div>
            </SuccessInfoItem>
          </IconContext.Provider>
        </SuccessInfoContainer>

        <img src={delivery} alt="" />
      </SuccessContainer>
    </>
  );
}
