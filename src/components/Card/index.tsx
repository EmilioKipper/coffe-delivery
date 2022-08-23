import { ShoppingCartSimple } from 'phosphor-react';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { CartContext } from '@contexts/CartContext';
import { currencyFormatter } from '@utils/currencyFormatter';
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

export function Card({ description, image, name, price, tags }: CardProps) {
  const theme = useTheme();
  const { addProduct } = useContext(CartContext);

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
          <Price>{currencyFormatter(price)}</Price>
          <Counter>
            {(quantity: number) => (
              <CartButton
                type="button"
                onClick={() => {
                  addProduct({
                    description,
                    image,
                    name,
                    price,
                    tags,
                    quantity,
                  });
                }}
              >
                <ShoppingCartSimple
                  size={22}
                  weight="fill"
                  color={theme.white}
                />
              </CartButton>
            )}
          </Counter>
        </CardFooter>
      </CardContainer>
    </TransparentBackground>
  );
}
