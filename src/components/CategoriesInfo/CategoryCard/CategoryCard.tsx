import { ICategoryLocal } from '../../../types/category';
import { CustomButton } from '../../shared/CustomButton';
import { useNavigate } from 'react-router-dom';

import styles from './categoryCard.module.scss';

function CategoryCard({ title, descr, img }: ICategoryLocal) {
  const navigate = useNavigate();

  function goToCategoryByID() {
    navigate(`/category/${title}`);
  }

  return (
    <li>
      <article className={styles.category}>
        <div className={styles.category__image}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.category__descr}>
          <h3 className={styles.category__caption}>{title}</h3>
          <p className={styles.category__info}>{descr}</p>
          <CustomButton
            text={'View Meals'}
            handleClick={goToCategoryByID}
            buttonType={'red'}
            className={styles.category__btn}
          />
        </div>
      </article>
    </li>
  );
}

export default CategoryCard;
