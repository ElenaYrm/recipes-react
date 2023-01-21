import { useNavigate } from 'react-router-dom';
import { IMealLocal } from '../../../types/meal';

import styles from './randomCard.module.scss';
import { CustomButton } from '../../shared/CustomButton';
import { DescriptionItem } from '../../shared/DescriptionItem';

type RandomCardProps = Pick<IMealLocal, 'id' | 'name' | 'area' | 'category' | 'img'>;

function RandomCard({ id, name, area, category, img }: RandomCardProps) {
  const navigate = useNavigate();

  function goToDetailByID() {
    navigate(`recipe/${id}`);
  }

  return (
    <article className={styles.recipe}>
      <div className={styles.recipe__info}>
        <h3 className={styles.recipe__name}>{name}</h3>
        <ul>
          <DescriptionItem {...category} />
          <DescriptionItem {...area} />
        </ul>
        <CustomButton
          text={'Detail recipe'}
          handleClick={goToDetailByID}
          buttonType={'orange'}
          className={styles.recipe__btn}
        />
      </div>
      <div className={styles.recipe__image}>
        <img src={img} alt={name} />
      </div>
    </article>
  );
}

export default RandomCard;
