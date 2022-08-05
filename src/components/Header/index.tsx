import { CartContainer, HeaderContainer } from './styles';
import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';
import Location from '../../assets/Location.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <CartContainer>
        <img src={Location} alt="Ícone de localização" />
        <img src={Cart} alt="Ícone de carrinho" />
      </CartContainer>
    </HeaderContainer>
  );
}
