import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { Icon } from '../Icon';
import { IconId } from '../../../types/enums';

import styles from './backButton.module.scss';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <CustomButton
      text={'Back'}
      handleClick={goBack}
      buttonType={'red'}
      className={styles.back}
      icon={<Icon id={IconId.arrowLeft} className={styles.back__icon} />}
    />
  );
}

export default BackButton;
