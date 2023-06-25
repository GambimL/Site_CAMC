
export function Course() {
  const descriptionsCourse = [
    {
      description: "Determinação da unidade monitora em planejamento radioterápico",
      speaker: "Carolina M. Isabela L. e Matheus F."
    },
    {
      description: "O que fazer após a graduação? Empreender!",
      speaker: "Irradiation - Empresa Júnior de Física Médica"
    },
    {
      description: "Radioterapia Hands On: Planejamento de casos ao vivo no sistema Varian Eclipse™",
      speaker: "William Trinca"
    },
    {
      description: "Inteligência Artificial em linguagem Python com aplicação em imagens médicas",
      speaker: "Bruno Yukio Takara"
    }
  ]
  return (
    descriptionsCourse.map((course) => {
      return <>
        <div key={course.speaker} className='space-x-4 font-light'>
          <div className="sm:p-2 rounded-xl lg:w-96 lg:h-80 md:p-4 space-y-3 dark:bg-slate-900 font-bold grid gap-5 text-justify p-5 cursor-pointer sm:text-xl hover:border-2 hover:border-sky-700 border-solid hover:border-y-0">
            <h2 className="uppercase text-2xl text-center">minicurso</h2>
            <p >{course.description}</p>
            <span className="text-sky-800 dark:text-sky-700">{course.speaker}</span>
          </div>
        </div>
      </>
    })
  )
}