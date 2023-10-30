import logoFisMed from "../../assets/logofismed.png"
import { Link } from "../Link"
import { HamburguerMenu } from "../HamburguerMenu"
import { useState } from "react"
import { MenuButton } from "../Button";

const titles = ["palestrantes", "opinião"]
const menuButtonText = "Increva-se!"

export function Header() {
    const [visible, setVisible] = useState(false)
    function onCliked() {
        setVisible(true)
    }

    return <header
        className="sticky top-0 z-30 flex bg-zinc-900 py-4 lg:px-10 px-7 lg:h-32 text-center font-bold lg:w-full w-full md:w[800px]">
        <div
            className="container mx-auto flex h-30 
                justify-between
                md:justify-center                
                items-center">
            <a href="/home">
                <img
                    src={logoFisMed}
                    className="justify-start scale-100 
                    lg:h-28 lg:w-30 
                    h-28 w-30 
                     pr-6"
                >
                </img>
            </a>
            {/* <DropdownMenu /> */}
            <div className="md:flex justify-center hidden">
                <Link titles={titles} />
                <MenuButton text={menuButtonText}/>
            </div>
            <HamburguerMenu titles={titles} visible={visible} />
        </div>
    </header>
}
