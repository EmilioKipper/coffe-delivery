import { getData } from '../../services';
import { Card } from '../../components/Card';
import { CoffeList, HomeContainer } from './styles';
import { Banner } from './components/Banner';

export function Home() {
  const data = getData();

  return (
    <HomeContainer>
      <Banner />
      <h1>Nossos cafés</h1>

      <CoffeList>
        {data.map((coffe) => {
          return <Card key={coffe.name} {...coffe} />;
        })}
      </CoffeList>
    </HomeContainer>
  );
}
