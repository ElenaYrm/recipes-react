import { useParams } from 'react-router-dom';
import { useMealInfo } from '../../store/mealInfo/useMealInfo';
import { MealInfo } from './MealInfo';
import { BackButton } from '../shared/BackButton';
import { Loader } from '../shared/Loader';
import { Message } from '../shared/Message';

import styles from './meal.module.scss';

function Meal() {
  const param = useParams();
  const [meal, { isLoading, error }] = useMealInfo(param.id ? param.id : '');

  return (
    <section className={styles.mealInfo}>
      <div className="container">
        <BackButton />

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && <MealInfo {...meal} />}
      </div>
    </section>
  );
}

export default Meal;
