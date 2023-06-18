import logoFisMed from '../../assets/logoFisMed.png'
import { Link } from '../Link'

const titles = ['Programação', 'Minicursos', 'Palestrantes', 'Opinião', 'Contatos']

export function Header() {

    return <div className='flex flex-col h-screen overflow-hidden fixed'>
        <header className="dark:bg-slate-900 bg-zinc-950 flex 
            fixed h-32 h w-full
            text-center border-b 
            border-grey p-4 font-bold">
            <div className="container mx-auto flex h-30 
                justify-start
                sm:justify-center
                items-center pb-6">
                <img src={logoFisMed} className="justify-start scale-150 
                h-28 w-30 
                pt-6 pr-6"></img>

                <Link titles={titles} />

            </div>
        </header>
    </div>

}
