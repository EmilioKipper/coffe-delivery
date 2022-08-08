import {
  IconContext,
  ShoppingCartSimple,
  Timer,
  Coffee,
  Package,
} from 'phosphor-react';
import { useTheme } from 'styled-components';
import BannerImg from './banner.png';
import {
  BannerContainer,
  BannerContentContainer,
  BannerSubtitle,
  BannerTitle,
  Icon,
  IconContainer,
  IconGrid,
} from './styles';

export function Banner() {
  const theme = useTheme();

  return (
    <BannerContainer>
      <BannerContentContainer>
        <BannerTitle>
          Encontre o café perfeito para qualquer hora do dia
        </BannerTitle>

        <BannerSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </BannerSubtitle>

        <IconGrid>
          <IconContext.Provider
            value={{
              size: 16,
              weight: 'fill',
              color: theme.white,
            }}
          >
            <IconContainer>
              <Icon color="yellowDark">
                <ShoppingCartSimple />
              </Icon>
              Compra simples e segura
            </IconContainer>
            <IconContainer>
              <Icon color="yellow">
                <Timer />
              </Icon>
              Entrega rápida e rastreada
            </IconContainer>
            <IconContainer>
              <Icon color="purple">
                <Coffee />
              </Icon>
              O café chega fresquinho até você
            </IconContainer>
            <IconContainer>
              <Icon color="text">
                <Package />
              </Icon>
              Embalagem mantém o café intacto
            </IconContainer>
          </IconContext.Provider>
        </IconGrid>
      </BannerContentContainer>

      <img src={BannerImg} alt="Banner" />
    </BannerContainer>
  );
}
