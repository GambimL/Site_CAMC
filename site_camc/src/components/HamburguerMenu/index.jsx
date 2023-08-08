import { useState } from "react"

export function HamburguerMenu(props){

    const [visible, setVisible] = useState(false)
    function onClikedMenu () {
       setVisible(true)
    }

    function onClickedReturn () {
        setVisible(false)
     }
 




    return(
        (visible == true) ?
        <div className="w-full h-96 flex flex-col md:hidden items-center justify-center bg-sky-950 absolute right-0 top-0">
            <div className=" w-screen h-full flex justify-end scale-100" onClick={onClickedReturn}>
                <div className=" h-auto w-auto m-7 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                </div>
            </div>
            {props.titles.map((item) => (
                <div className=' m-8 border-b-4 py-3 w-1/3 hover:w-1/2 cursor-pointer rounded-sm duration-100 border-solid hover:border-sky-700 group border-white'>
                    <a key={item} href={"/" + item}
                    className=" transition-colors 
                    duration-200 text-white group-hover:text-sky-700">{item}
                
                    </a>
                </div>
            ))}
        </div> : 
        <div>
            <div className="h-auto w-auto md:hidden cursor-pointer" onClick={onClikedMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        </div>
    )



}