import tradicional from './images/tradicional.png';
import americano from './images/Americano.png';
import capuccino from './images/Capuccino.png';
import chocolate from './images/ChocolateQuente.png';
import leite from './images/comLeite.png';
import cubano from './images/Cubano.png';
import cremoso from './images/ExpressoCremoso.png';
import gelado from './images/Gelado.png';
import havaiano from './images/Havaiano.png';
import irlandes from './images/Irlandes.png';
import latte from './images/Latte.png';
import macchiato from './images/Macchiato.png';
import mochaccino from './images/Mochaccino.png';

export function getData() {
  return [
    {
      tags: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: tradicional,
    },
    {
      tags: ['tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: americano,
    },
    {
      tags: ['tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: cremoso,
    },
    {
      tags: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: gelado,
    },
    {
      tags: ['tradicional', 'com leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: leite,
    },
    {
      tags: ['tradicional', 'com leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: latte,
    },
    {
      tags: ['tradicional', 'com leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: capuccino,
    },
    {
      tags: ['tradicional', 'com leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: macchiato,
    },
    {
      tags: ['tradicional', 'com leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: mochaccino,
    },
    {
      tags: ['especial', 'com leite'],
      name: 'Chocolate quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: chocolate,
    },
    {
      tags: ['especial', 'alcóolico', 'gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: cubano,
    },
    {
      tags: ['especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: havaiano,
    },
    {
      tags: ['especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: tradicional,
    },
    {
      tags: ['especial', 'alcóolico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: irlandes,
    },
  ];
}
