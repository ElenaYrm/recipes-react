import { useParams } from 'react-router-dom';
import { useMealInfo } from '../../store/mealInfo/useMealInfo';
import { MealInfo } from './MealInfo';

import styles from './meal.module.scss';

function Meal() {
  const param = useParams();
  const [meal, { isLoading, error }] = useMealInfo(param.id ? param.id : '');

  return (
    <section className={styles.mealInfo}>
      <div className="container">
        {isLoading ? <div>Loading...</div> : <MealInfo {...meal} />}

        {error && <div>Error</div>}
      </div>
    </section>
  );
}

export default Meal;
