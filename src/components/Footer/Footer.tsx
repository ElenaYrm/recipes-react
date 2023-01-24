import { MediaItemProps } from './MediaItem/MediaItem';
import { MediaItem } from './MediaItem';
import { IconId } from '../../types/enums';

import styles from './footer.module.scss';

// contacts for example without real links
const social: MediaItemProps[] = [
  {
    name: 'Facebook',
    icon: IconId.facebook,
    link: '#',
  },
  {
    name: 'Twitter',
    icon: IconId.twitter,
    link: '#',
  },
  {
    name: 'Instagram',
    icon: IconId.instagram,
    link: '#',
  },
  {
    name: 'Telegram',
    icon: IconId.telegram,
    link: '#',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <h2 className={styles.footer__title}>Contact us:</h2>

          <ul className={styles.footer__social}>
            {social.map((item) => (
              <MediaItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
