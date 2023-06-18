

export function buttonsHeader(nomes){
    return(
        <>
            {...nomes.map((text) => (
                <button key={text} className="flex mx-10 text-white">{text}</button>
            ))}
        </>
    )
}