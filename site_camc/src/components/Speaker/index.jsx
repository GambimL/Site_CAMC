export function Speaker(props) {
    return (
        <div className="group md:max-w-full h-64 sm:my-40 my-6 flex justify-center items-center" >
            <div className="sm:max-w-5xl sm:h-5/6 rounded-none mx-6 h-3/4 bg-sky-950 sm:rounded-lg duration-300 flex md:flex-row  flex-wrap">
                <div className="bg-sky-950 w-1/4 h-full rounded-l-lg">
                    <img
                        src={props.avatar}
                        className="
                            sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-60 xl:w-60
                            xl:group-hover:h-[16rem] xl:group-hover:w-96 lg:group-hover:h-56 lg:group-hover:w-56 
                            rounded-lg lg:-translate-x-5 lg:-translate-y-1/4 md:-translate-y-1/4 md:-translate-x-3 -translate-x-5 translate-y-1/4">
                    </img>
                </div>
                <div className="rounded-r-lg h-full w-3/4 flex flex-col">
                    <div className="bg-cyan-700 sm:rounded-tr-lg h-1/6 w-full items-center flex">
                        <p className="text-lg al px-3 font-mono font-bold ">{props.nameSpeaker}</p>
                    </div>
                    <div className="h-3/4 w-full bg-white">
                        <p className="text-start text-[0.68rem] sm:text-xs px-3  
                                 md:text-sm lg:text-base  text-zinc-900 font-bold tracking-tight">{props.description} {/*445 caracters */}
                        </p>
                    </div>
                    <div className="bg-sky-950 w-full h-1/4 rounded-br-lg flex flex-row items-center" >
                        <p className="text-start text-[0.7rem] sm:text-base  md:text-lg px-3 font-mono font-semibold tracking-tight">{props.lattes}</p>

                    </div>
                </div>
            </div>
        </div>
    )


}