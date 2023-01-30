import { useAreasList } from '../../store/areasList/useAreasList';
import { Message } from '../shared/Message';
import { Loader } from '../shared/Loader';
import { AreasList } from './AreasList';

import styles from './areasInfo.module.scss';

function AreasInfo() {
  const [areas, { isLoading, error }] = useAreasList();

  return (
    <section className={styles.areas}>
      <div className="container">
        <h2 className={styles.areas__title}>Areas</h2>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && (
          <>{areas.length > 0 ? <AreasList areas={areas} /> : <Message message={'No result'} typeMessage={'warn'} />}</>
        )}
      </div>
    </section>
  );
}

export default AreasInfo;
