import { CategoriesInfo } from '../../components/CategoriesInfo';
import { CustomErrorBoundary } from '../../components/shared/CustomErrorBoundary';

function Category() {
  return (
    <CustomErrorBoundary>
      <CategoriesInfo />
    </CustomErrorBoundary>
  );
}

export default Category;
