import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import { CartContainer, HeaderContainer, IconContainer } from './styles';
import Logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <CartContainer>
        <IconContainer color="purple" backgroundColor="purpleLight">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </IconContainer>
        <IconContainer color="yellowDark" backgroundColor="yellowLight">
          <ShoppingCartSimple weight="fill" size={22} />
        </IconContainer>
      </CartContainer>
    </HeaderContainer>
  );
}
