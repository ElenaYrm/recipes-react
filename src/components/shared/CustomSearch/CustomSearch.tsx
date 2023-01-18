import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './customSearch.module.scss';

interface CustomSearchProps {
  placeholder: string;
}

function CustomSearch({ placeholder }: CustomSearchProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;

    setValue(newValue);
    if (newValue) {
      setSearchParams({ search: event.target.value });
    } else {
      setSearchParams({});
    }
  }

  function handleClick() {
    setValue('');
    setSearchParams({});
  }

  return (
    <form className={styles.search}>
      <label className={styles.search__label}>
        <span className="visually-hidden">{placeholder}</span>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          className={styles.search__input}
        />
      </label>
      <button type="button" className={styles.search__btn} onClick={handleClick}></button>
    </form>
  );
}

export default CustomSearch;
