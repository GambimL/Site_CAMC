import React, { useState } from "react"
import { Modal } from "../Modal/Modal";
import { descriptionsCourse } from "../../utils/Constants";

export function Course() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState();

  return (
    <> {descriptionsCourse.map((course, i) => {
      return <React.Fragment key={i}>
        <div
          className="space-x-4 font-light"
          onClick={() => {
            setOpenModal(true)
            setValue(course.id)
          }}
        >
          <div className="sm:p-2 rounded-xl lg:w-96 lg:h-80 md:p-4 space-y-3 dark:bg-zinc-700 font-bold grid gap-5 text-justify p-5 cursor-pointer sm:text-xl hover:border-2 hover:border-[#8257e5] border-solid hover:border-y-0">
            <h2 className="uppercase text-2xl text-center">minicurso</h2>
            <p className="leading-10">{course.title}</p>
            <span className="text-[#8257e5] dark:text-[#8257e5]">{course.speaker}</span>
          </div>
        </div>
      </React.Fragment>
    })}

    {openModal && <Modal value={value} closeModal={setOpenModal} />}

    </>)
}