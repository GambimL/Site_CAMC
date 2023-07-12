import { useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';
import { ErrorMessage } from '../ErrorMessage';

export function TextField({ name, label, textarea, placeholder, ...rest }) {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {textarea ?
<<<<<<< HEAD
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
=======
          <textarea id="message" rows="6" className={'block p-2.5 w-full text-md  dark:bg-slate-900 flex-1 rounded-lg border border-solid  dark:focus:border-sky-700 border-gray-700 font-extrabold placeholder:text-gray-600'}
            {...register(name)}
            placeholder={placeholder}
            {...rest}
          ></textarea> :
          <div className="inputBox">
            <input
              required
              className="rounded-lg border dark:bg-slate-900 dark:focus:border-sky-700 border-solid border-gray-700"
              {...register(name)}
              placeholder=""
              {...rest}
            />
            <span className='text-gray-600'
            >{label}</span>
          </div>
        }
        {/* {!placeholder && <label htmlFor={name}>{label || name}</label>} */}
>>>>>>> e131c102e1f028f636f8e4c65c48a87bf499f384
      </div>
      <ErrorMessage field={name} />
    </div>
  );
}