import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import { MenuButton } from "../MenuButton";

export function HamburguerMenu(props) {

    const [visible, setVisible] = useState(false)

    return (
        (visible == true) ?
            <div className="w-full h-96 flex flex-col md:hidden items-center justify-end duration-300 bg-sky-950 absolute right-0 top-0">
                <div className=" w-screen h-full flex justify-end scale-100"
                    onClick={() => setVisible(false)}
                >
                    <div className="h-auto w-auto mr-8 mt-6 cursor-pointer">
                        <MdOutlineClose size={25} />
                    </div>
                </div>
                <MenuButton text={"se inscreva"}/>
                {props.titles.map((title) => (
                    <div className="m-6 border-b-4 py-3 w-1/3 hover:w-1/2 cursor-pointer rounded-sm duration-100 border-solid hover:border-sky-700 group border-white capitalize">
                        <a key={title} href={"/" + title}
                            className=" transition-colors 
                            duration-200 text-white group-hover:text-sky-700">
                            {title === "programação" ? <a href={"/home/#" + title}>{title}</a>
                                : title}
                        </a>
                    </div>
                ))}
            </div> :
            <div>
                <div className="h-auto w-auto md:hidden cursor-pointer duration-100" onClick={() => setVisible(true)}>
                    <TfiMenu />
                </div>
            </div>
    )
}