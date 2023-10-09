import { useFormContext } from "react-hook-form";
import styles from "./TextField.module.scss";
import { ErrorMessage } from "../ErrorMessage";

export function TextField({ name, label, textarea, placeholder, ...rest }) {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {textarea ?
          <textarea id="message" rows="6" className=
          {"block p-2.5 w-full text-md  dark:bg-background flex-1 rounded-lg border border-solid  dark:focus:border-[#7c41c9] border-[#7c41c9] font-extrabold placeholder:text-gray-600"}
            {...register(name)}
            placeholder={placeholder}
            {...rest}
          ></textarea> :
          <div className="inputBox">
            <input
              required
              className="rounded-lg border dark:bg-background dark:focus:border-[#7c41c9] border-solid border-[#7c41c9]"
              {...register(name)}
              placeholder=""
              {...rest}
            />
            <span className="text-gray-600"
            >{label}</span>
          </div>
        }
        {/* {!placeholder && <label htmlFor={name}>{label || name}</label>} */}
      </div>
      <ErrorMessage field={name} />
    </div>
  );
}