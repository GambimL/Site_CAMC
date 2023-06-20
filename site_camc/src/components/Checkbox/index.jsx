// import { useFormContext } from 'react-hook-form';
import styles from './Checkbox.module.scss';

export function Checkbox({ name, label, checked, ...props }) {
  // const { register } = useFormContext();

  return (
    <div className={styles.checkbox}>
      <input type="checkbox" checked={checked}
        // {...register(name)}
        {...props}
        className={checked ? styles.checked : ''}
      ></input>

      <label>
        <span>{label}</span>
      </label>
    </div >
  );
}
