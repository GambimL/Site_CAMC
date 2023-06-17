import logoFisMed from '../../assets/logoFisMed.png'
const buttons = ['Programação', 'Minicursos', 'Palestrantes', 'Opinião', 'Contatos']

export function Header() {
    
    return <div className="bg-zinc-950 flex h-50">
        <div className="container mx-auto flex h-30 justify-center items-center pb-6">
            <img src={logoFisMed} className="scale-150 h-26 w-28 pt-6"></img>
            {buttons.map((text) => (
                <button key={text} className="flex mx-10 text-white">{text}</button>
            ))}
           
        </div>
    </div>

}