import styles from "./styles.module.scss";

export function Button({ link, text, className }) {
  return (
    <div>
      <a href={link} className={!className ? styles.btn : className}>
        {text}
      </a>
    </div>
  )
}

export function MenuButton(props){
  return(
    
    <a href="https://siur.ufcspa.edu.br/atividades/index/3685" className="drop-shadow-sm hover:shadow-none duration-200 h-12 w-32 flex justify-center 
      items-center shadow-md shadow-black text-lg font-['Consolas'] bg-violet-150 rounded-md hover:translate-y-1 font-bold border-white"
    >
      {props.text}
    </a>
  )
}