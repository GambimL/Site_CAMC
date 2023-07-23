import { descriptionsCourse } from "../../utils/Constants";
import { BiCalendar } from 'react-icons/bi'
import { FaRegClock } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export function Modal({ closeModal, value }) {
  return <>
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="blur fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={() => closeModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-11/12 p-4 mx-auto bg-slate-900 rounded-md shadow-sm border border-sky-800 border-solid shadow-sky-800">
          <div className="mt-3 sm:flex h-96">
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <div className="grid grid-cols-8 gap-4 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 dark:border-opacity-50">
                <h4 className="lg:text-2xl md:text-xl font-bold col-start-1 col-end-8 mb-2">
                  {descriptionsCourse[value].title}
                </h4>
                <button
                  type="button"
                  className="col-start-8 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none text-white absolute top-10 right-10"
                  onClick={() =>
                    closeModal(false)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <span className="text-sky-800 font-bold">{descriptionsCourse[value].speaker}</span>
              <p className="mt-3 lg:text-[18px] md:text-[15px] leading-relaxed text-justify">
                {descriptionsCourse[value].description}
              </p>
              <div className="items-center place-content-center gap-2 mt-3 sm:flex md:p-7 space-y-3">
                <div className="grid grid-cols-3 gap-5 font-bold text-md">
                  <div className="flex gap-5">
                    <BiCalendar className="place-self-center" /><span>{descriptionsCourse[value].day}</span>
                  </div>
                  <div className="flex gap-5">
                    <FaRegClock className="place-self-center"
                    /><span>{descriptionsCourse[value].time}</span>
                  </div>
                  <div className="flex gap-5">
                    <MdLocationOn className="place-self-center" /><span>{descriptionsCourse[value].location}</span>
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