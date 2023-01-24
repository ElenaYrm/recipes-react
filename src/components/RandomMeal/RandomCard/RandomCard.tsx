import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../shared/CustomButton';
import { DescriptionItem } from '../../shared/DescriptionItem';
import { Image } from '../../shared/Image';
import { IMealLocal } from '../../../types/meal';

import styles from './randomCard.module.scss';

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

        <ul className={styles.recipe__list}>
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

      <Image src={img} title={name} className={styles.recipe__image} />
    </article>
  );
}

export default RandomCard;
