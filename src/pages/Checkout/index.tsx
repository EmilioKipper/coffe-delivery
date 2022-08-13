import { useEffect } from 'react';
import { AddressForm } from './components/AddressForm';
import { Resume } from './components/Resume';
import { SelectPayment } from './components/SelectPayment';
import { CheckoutContainer, Title } from './styles';

export function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressForm />
        <SelectPayment />
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <Resume />
      </div>
    </CheckoutContainer>
  );
}
