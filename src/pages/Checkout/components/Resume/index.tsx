import { Trash } from 'phosphor-react';
import { Fragment, useContext } from 'react';
import { useTheme } from 'styled-components';

import { Counter } from '@components/Counter';
import { CartContext } from '@contexts/CartContext';
import { currencyFormatter } from '@utils/currencyFormatter';
import {
  ResumeConfirmButton,
  ResumeContainer,
  ResumePrices,
  ResumeProductCardContainer,
  ResumeRemoveButton,
} from './styles';

export function Resume() {
  const {
    products,
    addProduct,
    deleteProduct,
    total: { price },
  } = useContext(CartContext);
  const theme = useTheme();
  const deliveryFee = 10;

  return (
    <ResumeContainer>
      {products.map((product) => (
        <Fragment key={product.name}>
          <ResumeProductCardContainer>
            <div>
              <img src={product.image} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <div>
                  <Counter
                    initialValue={product.quantity}
                    onChange={(quantity) =>
                      addProduct({ ...product, quantity })
                    }
                  />
                  <ResumeRemoveButton
                    type="button"
                    onClick={() => deleteProduct(product.name)}
                  >
                    <Trash size={16} color={theme.purple} weight="bold" />
                    Remover
                  </ResumeRemoveButton>
                </div>
              </div>
            </div>
            <span>
              R$ {currencyFormatter(product.price * product.quantity)}
            </span>
          </ResumeProductCardContainer>
          <hr />
        </Fragment>
      ))}

      <ResumePrices>
        <div>
          <span>Total de itens</span>
          <span>R$ {currencyFormatter(price)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {currencyFormatter(deliveryFee)}</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ {currencyFormatter(price + deliveryFee)}</span>
        </div>
      </ResumePrices>

      <ResumeConfirmButton type="submit">Confirmar pedido</ResumeConfirmButton>
    </ResumeContainer>
  );
}
