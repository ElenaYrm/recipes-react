import { IngredientsInfo } from '../../components/IngredientsInfo';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function Ingredients() {
  return (
    <CustomErrorBoundary>
      <IngredientsInfo />
    </CustomErrorBoundary>
  );
}

export default Ingredients;
