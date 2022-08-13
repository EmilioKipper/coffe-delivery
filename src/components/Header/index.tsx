import { useLocation, Link } from 'react-router-dom';
import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import { CartContainer, HeaderContainer, IconContainer } from './styles';
import Logo from '../../assets/Logo.svg';

export function Header() {
  const location = useLocation();

  const isSticky = location.pathname === '/';

  return (
    <HeaderContainer isSticky={isSticky}>
      <Link to="/">
        <img src={Logo} />
      </Link>

      <CartContainer>
        <IconContainer color="purple" backgroundColor="purpleLight">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </IconContainer>
        <Link to="/checkout">
          <IconContainer color="yellowDark" backgroundColor="yellowLight">
            <ShoppingCartSimple weight="fill" size={22} />
          </IconContainer>
        </Link>
      </CartContainer>
    </HeaderContainer>
  );
}
