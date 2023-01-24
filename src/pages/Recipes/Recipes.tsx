import { RecipesList } from '../../components/RecipesList';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function Recipes() {
  return (
    <CustomErrorBoundary>
      <RecipesList />
    </CustomErrorBoundary>
  );
}

export default Recipes;
