import { useState } from "react"
import { MdLocationOn } from "react-icons/md";
import { scheduleDescriptions07, scheduleDescriptions08, scheduleDescriptions09 } from "../../utils/Constants";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Schedule = ({ scheduleDescription, id }) => {

  return (
    <>
      {scheduleDescription.map((value, index) => {
        return <div key={index} className="hover:border-2 cursor-pointer">
          <div className="w-[270px] col-span-3 rounded-md bg-slate-900 shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 ml-0">
            <div className="static flex text-md leading-6 text-slate-400 border-solid border-b border-t border-sky-300 border-t-transparent">
              <div className="mt-2 flex flex-none text-lg items-center px-24 py-1 font-bold text-sky-300">
                {value.time}
              </div>
            </div>
          </div>

          <div id={id} className="p-4 bg-slate-900 rounded-md cursor-pointer hover:bg-slate-950 duration-300 w-[770px]">
            <div className="grid grid-cols-2 text-justify w-[700px]">
              <div className="grid gap-5 w-[460px] leading-normal">
                <p>{value.title}</p>
                <p className="my-4 text-sky-600">{value.speaker}</p>
              </div>
              <div className="flow-root bg-sky-900 text-center rounded-md w-[210px] justify-self-end border-2 border-solid border-sky-700 ">
                <div className="h-36 w-56 grid grid-cols-3 content-center">
                  <MdLocationOn size={20} className="mx-6 my-3" />
                  <span className='text-base font-bold text-right'>{value.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      })
      }
    </>
  )
}


export function Content() {
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);
  const [openCollapse3, setOpenCollapse3] = useState(false);

  return <div className="grid gap-2">
    <div id="programação" className="grid h-96 place-items-center ">
      <div className="w-[800px] col-span-3 -ml-10 rounded-xl bg-slate-900 shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 xl:ml-0 border-gray-600 border border-solid ">
        <div className="static flex text-md leading-6 text-slate-400">
          <div className="mt-2 flex flex-none items-center border-solid border-b border-t border-b-sky-300 border-t-transparent px-10 py-1 font-bold text-sky-300">Programação do evento</div>
          <div className="flex flex-auto overflow-hidden rounded-tr-xl pt-3">
            <div className="-mr-px py-6 flex-auto rounded-tl border border-solid border-slate-500/30 bg-slate-800/50"></div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="flex items-center h-20 text-xl">
            <MdKeyboardArrowRight className="text-sky-700 flex-none overflow-visible w-auto h-8 px-6" />
            <a
              onClick={(() => { openCollapse1 ? setOpenCollapse1(false) : setOpenCollapse1(true); console.log(openCollapse1) })} className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer" href='/home/#07/11'
            >
              07/11
            </a>
            <MdKeyboardArrowRight className="flex-none overflow-visible text-sky-700 w-auto h-8 px-6" />

            <a
              onClick={(() => { openCollapse2 ? setOpenCollapse2(false) : setOpenCollapse2(true) })}
              className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer"
              href='/home/#08/11'>
              08/11
            </a>
            <MdKeyboardArrowRight className="flex-none overflow-visible text-sky-700 w-auto h-8 px-6" />

            <a
              onClick={(() => { openCollapse3 ? setOpenCollapse3(false) : setOpenCollapse3(true) })} className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer"
              href='/home/#09/11'>
              09/11
            </a>
          </div>
        </div>
      </div>

    </div>
    <div className="grid gap-3 mx-auto my-10 w-[800px] drop-shadow rounded-xl text-center">
      <details className={"bg-slate-900 open:bg-sky-800 rounded-xl w-[800px] text-center"}>
        <summary onClick={() => openCollapse1 ? setOpenCollapse1(false) : setOpenCollapse1(true)} className="grid grid-cols-3 bg-inherit px-5 py-3 cursor-pointer duration-500 font-bold rounded-xl hover:bg-sky-800">
          {openCollapse1 ? <BiSolidUpArrow className="self-center" /> : <BiSolidDownArrow className="self-center" />}
          <p className="text-xl">Quarta-feira</p>
        </summary>
        <div className="grid gap-6 bg-slate-800 px-5 py-3 border border-sky-900 text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions07} id="07/11" />
        </div>
      </details>
      <details className="bg-slate-900 open:bg-sky-800 rounded-xl border-sky-700" >
        <summary onClick={() => openCollapse2 ? setOpenCollapse2(false) : setOpenCollapse2(true)} className="grid grid-cols-3 bg-inherit px-5 py-3 rounded-xl text-lg duration-500 cursor-pointer font-bold hover:bg-sky-800">
          {openCollapse2 ? <BiSolidUpArrow className="self-center" /> : <BiSolidDownArrow className="self-center" />}
          <p className="text-xl">Quinta-feira</p>
        </summary>
        <div className="grid gap-6 bg-slate-800 px-5 py-3 border border-sky-700 text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions08} id="08/11" />
        </div>
      </details>
      <details className="bg-slate-900 open:bg-sky-800 rounded-xl border-sky-700" >
        <summary onClick={() => openCollapse3 ? setOpenCollapse3(false) : setOpenCollapse3(true)} className="grid grid-cols-3 bg-inherit px-5 py-3 text-lg rounded-xl duration-500 cursor-pointer font-bold hover:bg-sky-800">
          {
            openCollapse3 ? <BiSolidUpArrow className="self-center" /> :
              <BiSolidDownArrow className="self-center" />
          }
          <p className="text-xl">Sexta-feira</p>
        </summary>
        <div className="grid gap-6 bg-slate-800 px-5 py-3 border border-sky-700 text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions09} id="09/11" />
        </div>
      </details>
    </div>
  </div>
}