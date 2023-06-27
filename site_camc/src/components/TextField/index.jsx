import { useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';
import { ErrorMessage } from '../ErrorMessage';

export function TextField({ name, label, textarea, placeholder, ...rest }) {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {textarea ?
          <textarea id="message" rows="6" className={`${styles.input} && {'block p-2.5 w-full text-md  dark:bg-gray-700 dark:border-gray-600 flex-1 rounded-lg border-2 border-solid dark:placeholder-white dark:focus:border-sky-700 font-bold'}`}
            {...register(name)}
            placeholder={placeholder}
            {...rest}
          ></textarea> : <input
            className="flex-1 rounded-lg border dark:bg-gray-700 dark:placeholder-white dark:focus:border-sky-700 font-bold text-md border-gray-300 bg-gray-50"
            {...register(name)}
            placeholder=""
            {...rest}
          />}
        {!placeholder && <label htmlFor={name}>{label || name}</label>}
      </div>
      <ErrorMessage field={name} />
    </div>
  );
}