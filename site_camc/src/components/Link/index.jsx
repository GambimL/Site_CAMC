export function Link({ titles }) {
  return (
    <>
      {titles.map((text) => (
<<<<<<< HEAD
        <a key={text} className="flex mx-10 cursor-pointer capitalize transition-colors duration-200 transform text-white px-4 py-3 rounded-md hover:text-sky-700">{text}</a>
      ))}
=======
        <a key={text} href={"#" + text} className="flex mx-10 cursor-pointer capitalize transition-colors duration-200 transform text-white px-4 py-3 rounded-md hover:text-sky-700">{text}</a >
      ))
}
>>>>>>> e131c102e1f028f636f8e4c65c48a87bf499f384
    </>
  )
}
