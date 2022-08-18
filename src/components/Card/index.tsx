import { ShoppingCartSimple } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Counter } from '../Counter';
import {
  CardContainer,
  CardFooter,
  CartButton,
  Description,
  EmptyDiv,
  Price,
  Tag,
  TagContainer,
  Title,
  TransparentBackground,
} from './styles';

interface CardProps {
  tags: string[];
  name: string;
  description: string;
  price: number;
  image: string;
}

function format(number: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(number);
}

export function Card({ description, image, name, price, tags }: CardProps) {
  const theme = useTheme();

  return (
    <TransparentBackground>
      <EmptyDiv />
      <CardContainer>
        <img src={image} alt={name} />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>

        <CardFooter>
          <Price>{format(price)}</Price>
          <Counter />
          <CartButton>
            <ShoppingCartSimple size={22} weight="fill" color={theme.white} />
          </CartButton>
        </CardFooter>
      </CardContainer>
    </TransparentBackground>
  );
}
