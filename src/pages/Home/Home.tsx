import { RandomMeal } from '../../components/RandomMeal';
import { AreasInfo } from '../../components/AreasInfo';
import { Hero } from '../../components/Hero';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function Home() {
  return (
    <>
      <Hero />
      <CustomErrorBoundary>
        <AreasInfo />
      </CustomErrorBoundary>
      <CustomErrorBoundary>
        <RandomMeal />
      </CustomErrorBoundary>
    </>
  );
}

export default Home;
