

export function MenuButton(props){
    return(
        <a href="#" className=" drop-shadow-md hover:shadow-none duration-200 h-12 w-32 flex justify-center items-center shadow-lg shadow-black bg-cyan-700 rounded-md hover:translate-y-1  border-white">
            {props.text}
        </a>
    )
}