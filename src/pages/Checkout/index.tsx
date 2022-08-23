import { useContext, useEffect } from 'react';
import { AddressForm } from './components/AddressForm';
import { Resume } from './components/Resume';
import { SelectPayment } from './components/SelectPayment';
import { CheckoutContainer, Title } from './styles';
import { useForm, FormProvider } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const checkoutFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(/\d{5}-\d{3}/)
    .min(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(2),
  paymentMethod: zod.string().min(1),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { finishCart } = useContext(CartContext);
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleCheckoutSubmit(data: CheckoutFormData) {
    finishCart(data);
    navigate('/success', { state: { from: '/checkout' } });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
      <CheckoutContainer>
        <div>
          <Title>Complete seu pedido</Title>
          <FormProvider {...checkoutForm}>
            <AddressForm />
            <SelectPayment />
          </FormProvider>
        </div>
        <div>
          <Title>Cafés selecionados</Title>
          <Resume />
        </div>
      </CheckoutContainer>
    </form>
  );
}
