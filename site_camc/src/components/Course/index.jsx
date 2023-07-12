import { useState } from "react"
import { Modal } from "../Modal/Modal";
import { descriptionsCourse } from "../../utils/Constants";

export function Course() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState();

  return (
    <> {descriptionsCourse.map((course) => {
      return <>
        <div 
          key={course.speaker}
          className='space-x-4 font-light'
          onClick={() => {
            setOpenModal(true)
            setValue(course.id)
          }}
        >
          <div className="sm:p-2 rounded-xl lg:w-96 lg:h-80 md:p-4 space-y-3 dark:bg-slate-900 font-bold grid gap-5 text-justify p-5 cursor-pointer sm:text-xl hover:border-2 hover:border-sky-700 border-solid hover:border-y-0">
            <h2 className="uppercase text-2xl text-center">minicurso</h2>
            <p >{course.title}</p>
            <span className="text-sky-800 dark:text-sky-700">{course.speaker}</span>
          </div>
        </div>
      </>
    })}

    {openModal && <Modal value={value} closeModal={setOpenModal} />}

    </>)
}