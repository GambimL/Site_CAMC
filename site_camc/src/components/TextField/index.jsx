// import { useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';

const TextField = ({ name, label, ...rest }) => {
  // const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
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
