
const buttons = ['Programação', 'Minicursos', 'Palestrantes', 'Opinião', 'Contatos']

function Header(){
    return <div className="bg-zinc-950 flex h-50">
            <div className="container mx-auto flex h-30 justify-center items-center pb-6">
            <img src="src\imagens\fotologo.png" className="scale-150 h-26 w-28 pt-6"></img>
                {buttons.map((texto) => (
                    <button className="flex mx-10 text-white">{texto}</button>
                ))}
            </div>
    </div>
   
}

export default Header