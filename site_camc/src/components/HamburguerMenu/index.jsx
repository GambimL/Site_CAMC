import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import { MenuButton } from "../Button";

export function HamburguerMenu(props) {

    const [visible, setVisible] = useState(false)

    return (
        (visible == true) ?
            <div className="w-full  flex flex-col md:hidden items-center justify-center duration-300 bg-zinc-900 absolute right-0 top-0">
                <div className=" w-screen h-full flex justify-end scale-100"
                    onClick={() => setVisible(false)}
                >
                    <div className="h-auto w-auto mr-8 mt-6 cursor-pointer">
                        <MdOutlineClose size={25} />
                    </div>
                </div>
                <MenuButton text={"Inscreva-se!"}/>
                
            </div> :
            <div>
                <div className="h-auto w-auto md:hidden cursor-pointer duration-100" onClick={() => setVisible(true)}>
                    <TfiMenu />
                </div>
            </div>
    )
}