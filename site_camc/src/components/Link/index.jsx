export function Link({ titles }) {
  return (
    <>
      {titles.map((text) => (
        <a key={text} className="flex mx-10 cursor-pointer hover:text-slate-400 duration-300">{text}</a>
      ))}
    </>
  )
}
