import classNames from 'classnames';
import { Image } from '../shared/Image';

import styles from './hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            <span>Book of</span>
            <span>unique recipes</span>
          </h1>

          <Image
            src={process.env.PUBLIC_URL + '/images/hero-left.png'}
            title={'Image 1'}
            className={classNames(styles.hero__img, styles.hero__left)}
          />

          <Image
            src={process.env.PUBLIC_URL + '/images/hero-right.png'}
            title={'Image 2'}
            className={classNames(styles.hero__img, styles.hero__right)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
