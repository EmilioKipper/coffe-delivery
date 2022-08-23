import {
  IconContext,
  ShoppingCartSimple,
  Timer,
  Coffee,
  Package,
} from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CircleIcon } from '@components/CircleIcon';
import BannerImg from './banner.png';
import {
  BannerContainer,
  BannerContentContainer,
  BannerSubtitle,
  BannerTitle,
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
            <CircleIcon text="Compra simples e segura" color="yellowDark">
              <ShoppingCartSimple />
            </CircleIcon>
            <CircleIcon text="Entrega rápida e rastreada" color="yellow">
              <Timer />
            </CircleIcon>
            <CircleIcon text="O café chega fresquinho até você" color="purple">
              <Coffee />
            </CircleIcon>
            <CircleIcon text="Embalagem mantém o café intacto" color="text">
              <Package />
            </CircleIcon>
          </IconContext.Provider>
        </IconGrid>
      </BannerContentContainer>

      <img src={BannerImg} alt="Banner" />
    </BannerContainer>
  );
}
