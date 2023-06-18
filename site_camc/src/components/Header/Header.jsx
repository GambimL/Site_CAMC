import logoFisMed from '../../assets/logoFisMed.png'
const buttons = ['Programação', 'Minicursos', 'Palestrantes', 'Opinião', 'Contatos']

export function Header() {
    
    return <div className='flex flex-col h-screen overflow-hidden fixed'>
        <header className="bg-zinc-950 flex 
            fixed h-32 h w-full
            text-center border-b 
            border-grey p-4">
            <div className="container mx-auto flex h-30 
                justify-start
                sm:justify-center
                items-center pb-6">
                <img src={logoFisMed} className="justify-start scale-150 
                h-28 w-30 
                pt-6 pr-6"></img>
                {buttons.map((text) => (
                    <button key={text} className="flex mx-10 text-white 
                    hidden sm:block">
                        {text}</button>
                ))}
            
            </div>
        </header>
    </div>

}