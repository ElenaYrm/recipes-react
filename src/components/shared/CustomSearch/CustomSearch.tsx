import { ChangeEvent, memo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks';
import { Icon } from '../Icon';
import { IconId } from '../../../types/enums';

import styles from './customSearch.module.scss';

interface CustomSearchProps {
  placeholder: string;
}

function CustomSearch({ placeholder }: CustomSearchProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');

  const changeParams = (value: string) => {
    // set search params to use it as a filtration data
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };
  const debounceChangeParams = useDebounce(changeParams, 500);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    debounceChangeParams(event.target.value);
  }

  // clear search params and input
  function handleClick() {
    setValue('');
    setSearchParams({});
  }

  return (
    <form className={styles.search}>
      <label className={styles.search__label}>
        <span className="visually-hidden">{placeholder}</span>

        <Icon id={IconId.search} className={styles.search__icon} />

        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          className={styles.search__input}
        />
      </label>

      <button type="button" className={styles.search__btn} onClick={handleClick} aria-label="Clear search">
        <Icon id={IconId.close} />
      </button>
    </form>
  );
}

export default memo(CustomSearch);
