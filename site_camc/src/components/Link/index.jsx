export function Link({ titles }) {
  return (
    <>{
      titles.map((text) => (
        <a key={text} href={"/Site_CAMC/" + text}
          className="flex mx-10 cursor-pointer capitalize transition-colors 
            duration-200 transform px-4 py-3 rounded-md hover:text-[#8257e5] text-lg font-['Consolas'] text-white">
          {text === "opinião" ? <a className="font-['Consolas']" href={"/Site_CAMC/#" + text}>{text}</a>
            : text}
        </a>
      ))}</>
  )
}
