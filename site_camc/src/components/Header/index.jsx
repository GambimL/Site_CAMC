import logoFisMed from '../../assets/logoFisMed.png'
import { Link } from '../Link'
import { DropdownMenu } from '../DropdownMenu';

const titles = ['Palestrantes', 'Opinião', 'Contato']

export function Header() {
    return <header
        className="md:flex dark:bg-slate-900 bg-zinc-950 py-4 md:px-10 px-7 sm:h-28 lg:h-32
            text-center border-b 
            border-grey font-bold">
        <div
            className="container mx-auto flex h-30 
                justify-start
                sm:justify-center
                items-center">
            <img
                src={logoFisMed}
                className="justify-start scale-150 
                    h-28 w-30 
                    pt-6 pr-6">
            </img>

            <DropdownMenu />

            <div className="flex justify-center">
                <Link titles={titles} />
            </div>
        </div>
    </header >
}
