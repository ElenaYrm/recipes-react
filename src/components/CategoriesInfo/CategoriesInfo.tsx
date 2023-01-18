import { CategoryCard } from './CategoryCard';
import { useCategories } from '../../store/categoriesInfo/useCategories';

import styles from './categoriesInfo.module.scss';

function CategoriesInfo() {
  const [categories, { isLoading, error }] = useCategories();

  return (
    <section className={styles.categories}>
      <div className="container">
        <h2 className={styles.categories__title}>Categories</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className={styles.categories__list}>
            {categories.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </ul>
        )}

        {error && <div>Error...</div>}
      </div>
    </section>
  );
}

export default CategoriesInfo;
