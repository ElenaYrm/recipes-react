import { RandomMeal } from '../../components/RandomMeal';
import { AreasList } from '../../components/AreasList';
import { Hero } from '../../components/Hero';

function Home() {
  return (
    <>
      <Hero />
      <AreasList />
      <RandomMeal />
    </>
  );
}

export default Home;
