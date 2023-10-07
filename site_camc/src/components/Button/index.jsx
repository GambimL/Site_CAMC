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

export function MenuButton(props){
  return(
      <a href="#" className="drop-shadow-sm hover:shadow-none duration-200 h-12 w-32 flex justify-center 
          items-center shadow-md shadow-black text-lg font-['Consolas'] bg-[#8257e5] rounded-md hover:translate-y-1 border-white"
      >
          {props.text}
      </a>
  )
}