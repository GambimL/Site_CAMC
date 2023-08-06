import fotoavatar from '../../assets/fotominha1.png'

export function Palest(props) {

    return (
        <> 
        < div className = "group max-w-full h-64 sm:my-40 my-6 flex justify-center items-center" > 
            <div className=  "sm:max-w-5xl sm:h-5/6 w-4/5 h-3/4 bg-sky-950 rounded-lg  duration-300 flex md:flex-row  flex-wrap">
                <div className=' bg-sky-950 w-1/4 h-full rounded-l-lg'>
                <img
                        src={props.foto}
                        className="
                                sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-60 xl:w-60 
                                xl:group-hover:h-[16rem] xl:group-hover:w-96 lg:group-hover:h-56 lg:group-hover:w-56 
                                rounded-lg lg:-translate-x-1/4 lg:-translate-y-1/4 md:-translate-y-1/4 -translate-x-1/4 translate-y-1/4">
                    </img>
                </div> 
                <div className='rounded-r-lg h-full w-3/4 flex flex-col'>
                    <div className=' bg-cyan-700 rounded-tr-lg h-1/6 w-full items-center flex'>
                        <p className=' text-lg al px-3 font-mono font-bold ' >Nome do Palestrante</p>
                    </div>
                    <div className='h-3/4 w-full bg-white'>
                        <p className='text-start text-xs sm:text-xs px-3  
                            md:text-sm lg:text-base  text-zinc-900 font-bold tracking-tight'>{props.descricao} {/*445 caracters */}
                        </p>
                    </div>
                    <div className=' bg-sky-950 w-full h-1/4 rounded-br-lg flex flex-row items-center' >
                        <p className='text-start text-xs sm:text-base  md:text-lg px-3 font-mono font-semibold tracking-tight'>{props.lattes}</p>

                    </div>
                </div>     
            </div>
    </div>
</>
    )}