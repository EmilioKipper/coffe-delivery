import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import {
  AddressFormContainer,
  AddressHeader,
  AddressSubtitle,
  AddressTitle,
  FormContainer,
  FormPart1,
  FormPart2,
  InputBase,
} from './styles';

export function AddressForm() {
  const theme = useTheme();
  const { register } = useFormContext();

  return (
    <AddressFormContainer>
      <AddressHeader>
        <span>
          <MapPinLine size={22} color={theme.yellow} />
        </span>
        <div>
          <AddressTitle>Endereço de entrega</AddressTitle>
          <AddressSubtitle>
            Informe o endereço que deseja receber o seu pedido
          </AddressSubtitle>
        </div>
      </AddressHeader>

      <FormContainer>
        <InputBase
          type="text"
          placeholder="CEP"
          maxLength={9}
          size={9}
          pattern="\d{5}-\d{3}"
          {...register('cep')}
        />
        <InputBase
          type="text"
          placeholder="Logradouro"
          {...register('street')}
        />
        <FormPart1>
          <InputBase type="text" placeholder="Nº" {...register('number')} />
          <InputBase
            type="text"
            placeholder="Complemento (Opcional)"
            {...register('complement')}
          />
        </FormPart1>
        <FormPart2>
          <InputBase
            type="text"
            placeholder="Bairro"
            {...register('district')}
          />
          <InputBase type="text" placeholder="Cidade" {...register('city')} />
          <InputBase
            type="text"
            placeholder="UF"
            maxLength={2}
            size={2}
            pattern="\w{2}"
            {...register('uf')}
          />
        </FormPart2>
      </FormContainer>
    </AddressFormContainer>
  );
}
