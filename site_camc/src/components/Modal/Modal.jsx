import { descriptionsCourse } from "../../utils/Constants";
import { BiCalendar } from "react-icons/bi"
import { FaRegClock } from "react-icons/fa"
import { MdLocationOn, MdOutlineClose } from "react-icons/md"
import { BiBody } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";

export function Modal({ closeModal, value }) {
  return <>
    <div className="fixed inset-0 z-30 overflow-y-auto">
      <div
        className="blur fixed inset-0 w-full h-full bg-[#391a8f] bg-opacity-40 backdrop-blur-sm"
        onClick={() => closeModal(false)}></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-11/12 p-4 mx-auto bg-violet-200 rounded-md shadow-sm border border-black border-solid shadow-sky-[#511481]">
          <div className="mt-3 sm:flex h-auto">
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <div className="grid grid-cols-8 gap-4 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 dark:border-opacity-50">
                <h4 className="lg:text-2xl md:text-xl font-['Consolas'] font-bold col-start-1 col-end-8 mb-2">
                  {descriptionsCourse[value].title}
                </h4>
                <button
                  type="button"
                  className="col-start-8 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none text-white absolute top-10 right-10"
                  onClick={() =>
                    closeModal(false)
                  }
                >
                  <MdOutlineClose size={25} />
                </button>
              </div>

              <span className="font-['Consolas'] text-violet-100 font-bold">{descriptionsCourse[value].speaker}</span>
              <p className="font-['Consolas'] mt-3 lg:text-[18px] md:text-[15px] leading-relaxed text-justify">
                {descriptionsCourse[value].description}
              </p>
              <h2 className="lg:text-2xl md:text-xl font-['Consolas'] font-bold col-start-1 col-end-8 mt-2">
                  OBJETIVO
              </h2>
              <p className="font-['Consolas'] mt-3 lg:text-[18px] md:text-[15px] leading-relaxed text-justify">{descriptionsCourse[value].goal}</p>
              <div className="items-center place-content-center gap-2 mt-3 sm:flex md:p-7 space-y-3">
                <div className="grid grid-cols-3 gap-5 font-bold text-md">
                  <div className="flex gap-5">
                    <BiCalendar className="place-self-center" />
                      <span className="font-['Consolas']">{descriptionsCourse[value].day}</span>
                  </div>
                  <div className="flex gap-5">
                    <FaRegClock className="place-self-center"
                    /><span className="font-['Consolas']">{descriptionsCourse[value].time}</span>
                  </div>
                  <div className="flex gap-5">
                    <MdLocationOn className="place-self-center" /><span className="font-['Consolas']">{descriptionsCourse[value].location}</span>
                  </div>
                  <div className="flex gap-5">
                    <BiBody className="place-self-center" /><span className="font-['Consolas']">{descriptionsCourse[value].capacity}</span>
                  </div>
                  <div className="flex gap-5">
                    <BiArrowFromBottom className="place-self-center" /><a href={descriptionsCourse[value].link} className="font-['Consolas'] text-violet-100 rounded-md p-3 bg-white ">Incresva-se</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}