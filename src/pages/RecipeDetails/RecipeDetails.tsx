import { Meal } from '../../components/Meal';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function RecipeDetails() {
  return (
    <CustomErrorBoundary>
      <Meal />
    </CustomErrorBoundary>
  );
}

export default RecipeDetails;
