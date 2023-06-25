import { useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';
import { useForm } from 'react-hook-form';

export const TextField = ({ name, label, error, textarea, placeholder, ...rest }) => {
  // const { register } = useFormContext();
  const { register } = useForm();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {textarea ? <textarea id="doubt" rows="6" className="block p-2.5 w-full text-md  dark:bg-gray-700 dark:border-gray-600 flex-1 rounded-lg border-2 border-solid dark:placeholder-white dark:focus:border-sky-700 font-bold" placeholder=""
          {...register(name)}
        ></textarea> : <input
          className="flex-1 rounded-lg border dark:bg-gray-700 dark:placeholder-white dark:focus:border-sky-700 font-bold text-md border-gray-300 bg-gray-50"
          {...register(name)}
          placeholder={placeholder}
          {...rest}
        />}
        <label htmlFor={name}>{label || name}</label>
      </div>
      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextField;
