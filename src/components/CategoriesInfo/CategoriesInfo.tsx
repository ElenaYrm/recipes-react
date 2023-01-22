import { useCategories } from '../../store/categoriesInfo/useCategories';
import { CategoryCard } from './CategoryCard';
import { BackButton } from '../shared/BackButton';
import { Loader } from '../shared/Loader';
import { Message } from '../shared/Message';

import styles from './categoriesInfo.module.scss';

function CategoriesInfo() {
  const [categories, { isLoading, error }] = useCategories();

  return (
    <section className={styles.categories}>
      <div className="container">
        <BackButton />

        <h2 className={styles.categories__title}>Categories</h2>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && (
          <ul className={styles.categories__list}>
            {categories.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default CategoriesInfo;
