export function Link({ titles }) {
  return (
    <>{
      titles.map((text) => (
        <a key={text} href={"/" + text}
          className="flex mx-10 cursor-pointer capitalize transition-colors 
            duration-200 transform text-white px-4 py-3 rounded-md hover:text-sky-700">
          {text === 'programação' ? <a href={"/home/#" + text}>{text}</a>
            : text}
        </a>
      ))
    }</>
  )
}
