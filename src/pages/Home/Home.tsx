import { RandomMeal } from '../../components/RandomMeal';
import { AreasList } from '../../components/AreasList';
import { Hero } from '../../components/Hero';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function Home() {
  return (
    <>
      <Hero />
      <CustomErrorBoundary>
        <AreasList />
      </CustomErrorBoundary>
      <CustomErrorBoundary>
        <RandomMeal />
      </CustomErrorBoundary>
    </>
  );
}

export default Home;
