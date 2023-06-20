export function Course({ description, speaker }) {
  return (
    <div className="lg:w-96 lg:h-80 md:p-8 space-y-4 dark:bg-slate-900 font-bold grid gap-5 text-justify p-5 cursor-pointer hover:border-2 hover:border-sky-700 border-solid">
      <h2 className="uppercase text-2xl text-center">minicurso</h2>
      <p className="">{description}</p>
      <span className="text-sky-800 dark:text-sky-700">{speaker}</span>
    </div>
  )
}