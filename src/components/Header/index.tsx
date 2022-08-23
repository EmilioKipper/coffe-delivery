import { useLocation } from 'react-router-dom';
import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import {
  CartContainer,
  HeaderCartQuantity,
  HeaderContainer,
  IconContainer,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from '../Link';

export function Header() {
  const {
    total: { quantity },
  } = useContext(CartContext);
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
            {quantity > 0 && (
              <HeaderCartQuantity>{quantity}</HeaderCartQuantity>
            )}
          </IconContainer>
        </Link>
      </CartContainer>
    </HeaderContainer>
  );
}
