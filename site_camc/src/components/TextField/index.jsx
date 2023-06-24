import { useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';

export const TextField = ({ name, label, ...rest }) => {
  // const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className="flex-1 rounded-lg border dark:bg-gray-700 dark:placeholder-white dark:focus:border-sky-700 font-bold text-md border-gray-300 bg-gray-50"
          // {...register(name)}
          placeholder={' '}
          {...rest}
        />
        <label htmlFor={name}>{label || name}</label>
      </div>
      {/* {!!error && <span className={styles.error}>{error}</span>} */}
    </div>
  );
};

export default TextField;
