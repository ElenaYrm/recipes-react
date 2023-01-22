import { Link } from 'react-router-dom';
import { useAreasList } from '../../store/areasList/useAreasList';
import { Message } from '../shared/Message';
import { Loader } from '../shared/Loader';

import styles from './areasList.module.scss';

function AreasList() {
  const [areas, { isLoading, error }] = useAreasList();

  return (
    <section className={styles.areas}>
      <div className="container">
        <h2 className={styles.areas__title}>Areas</h2>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && (
          <>
            {areas.length > 0 ? (
              <ul className={styles.areas__list}>
                {areas.map((item) => (
                  <li key={item.name} className={styles.areas__item}>
                    <Link to={`/area/${item.name}`}>#{item.name}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Message message={'No result'} typeMessage={'warn'} />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default AreasList;
