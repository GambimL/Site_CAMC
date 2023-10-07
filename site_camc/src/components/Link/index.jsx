export function Link({ titles }) {
  return (
    <>{
      titles.map((text) => (
        <a key={text} href={"/" + text}
          className="flex mx-10 cursor-pointer capitalize transition-colors 
            duration-200 transform px-4 py-3 rounded-md hover:text-[#8257e5] text-lg font-['Consolas']  text-white">
          {text === "programação" ? <a className="font-['Consolas']" href={"/home/#" + text}>{text}</a>
            : text}
        </a>
      ))}</>
  )
}
