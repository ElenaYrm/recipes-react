import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../shared/CustomButton';
import { Image } from '../../shared/Image';
import { ICategoryLocal } from '../../../types/category';

import styles from './categoryCard.module.scss';

function CategoryCard({ title, descr, img }: ICategoryLocal) {
  const navigate = useNavigate();

  function goToCategoryByID() {
    navigate(`/category/${title}`);
  }

  return (
    <li>
      <article className={styles.category}>
        <Image src={img} title={title} className={styles.category__image} />

        <div className={styles.category__descr}>
          <h3 className={styles.category__caption}>{title}</h3>

          <p className={styles.category__info}>{descr}</p>

          <CustomButton
            text={'View Meals'}
            handleClick={goToCategoryByID}
            buttonType={'orange'}
            className={styles.category__btn}
          />
        </div>
      </article>
    </li>
  );
}

export default CategoryCard;
