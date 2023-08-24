import logoFisMed from "../../assets/logoFisMed.png"
import { Link } from "../Link"
import { HamburguerMenu } from "../HamburguerMenu"
import { useState } from "react"
import { MenuButton } from "../MenuButton"

const titles = ["programação", "palestrantes", "opinião"]
const menuButtonText = "Se increva"

export function Header() {
    const [visible, setVisible] = useState(false)
    function onCliked() {
        setVisible(true)
    }

    return <header
        className="sticky top-0 z-30 flex dark:bg-slate-900 bg-zinc-950 py-4 lg:px-10 px-7 lg:h-32 text-center border-b border-solid
        border-gray-600 font-bold  lg:w-full w-full md:w[800px]">
        <div
            className="container mx-auto flex h-30 
                justify-between
                md:justify-center
                
                items-center">
            <a href="/home">
                <img
                    src={logoFisMed}
                    className="justify-start scale-150 
                    lg:h-28 lg:w-30 
                    h-28 w-30 
                    pt-6 pr-6"
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
