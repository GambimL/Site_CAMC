import styles from "./styles.module.scss";

export function Button({ text }) {

  return (
    <div>
      <button className={styles.btn}>
        {text}
      </button>
    </div>
  )
}