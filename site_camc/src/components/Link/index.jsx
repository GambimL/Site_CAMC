export function Link({ titles }) {
  return (
    <>
      {titles.map((text) => (
        <a key={text} className="flex mx-10 cursor-pointer text-white">{text}</a>
      ))}
    </>
  )
}
