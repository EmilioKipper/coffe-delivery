import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Input } from '../Input';
import {
  AddressFormContainer,
  AddressHeader,
  AddressSubtitle,
  AddressTitle,
  FormContainer,
  FormPart1,
  FormPart2,
} from './styles';

export function AddressForm() {
  const theme = useTheme();

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
        <Input
          type="text"
          placeholder="CEP"
          maxLength={9}
          size={9}
          pattern="\d{5}-\d{3}"
        />
        <Input type="text" placeholder="Logradouro" />
        <FormPart1>
          <Input type="text" placeholder="Nº" />
          <Input type="text" placeholder="Complemento (Opcional)" />
        </FormPart1>
        <FormPart2>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input
            type="text"
            placeholder="UF"
            maxLength={2}
            size={2}
            pattern="\w{2}"
          />
        </FormPart2>
      </FormContainer>
    </AddressFormContainer>
  );
}
