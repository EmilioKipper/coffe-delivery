import { Trash } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { Counter } from '../../../../components/Counter';
import { getData } from '../../../../services';
import {
  ResumeConfirmButton,
  ResumeContainer,
  ResumePrices,
  ResumeProductCardContainer,
  ResumeRemoveButton,
} from './styles';

export function Resume() {
  const theme = useTheme();
  const data = getData();

  return (
    <ResumeContainer>
      <ResumeProductCardContainer>
        <div>
          <img src={data[0].image} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <Counter />
              <ResumeRemoveButton>
                <Trash size={16} color={theme.purple} weight="bold" />
                Remover
              </ResumeRemoveButton>
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </ResumeProductCardContainer>

      <hr />

      <ResumeProductCardContainer>
        <div>
          <img src={data[0].image} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <Counter />
              <ResumeRemoveButton>
                <Trash size={16} color={theme.purple} weight="bold" />
                Remover
              </ResumeRemoveButton>
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </ResumeProductCardContainer>

      <hr />

      <ResumePrices>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 29,70</span>
        </div>
      </ResumePrices>

      <ResumeConfirmButton>Confirmar pedido</ResumeConfirmButton>
    </ResumeContainer>
  );
}
