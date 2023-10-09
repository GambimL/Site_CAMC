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
          <div className="w-[270px] col-span-3 rounded-md bg-violet-200 shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 ml-0">
            <div className="static flex text-md leading-6 text-slate-400 border-solid border-b border-t border-[#7c41c9] border-t-transparent">
              <div className="font-['Consolas'] mt-2 flex flex-none text-lg items-center px-24 py-1 font-bold text-white">
                {value.time}
              </div>
            </div>
          </div>

          <div id={id} className="p-4 bg-violet-200 rounded-md cursor-pointer hover:bg-[#21043f] duration-300 w-[770px]">
            <div className="grid grid-cols-2 text-justify w-[700px]">
              <div className="grid gap-5 w-[460px] leading-normal">
                <p className="font-['Consolas']">{value.title}</p>
                <p className="font-['Consolas'] my-4 text-[#7c41c9]">{value.speaker}</p>
              </div>
              <div className="flow-root bg-[#2d0555] text-center rounded-md w-[210px] justify-self-end border-2 border-solid border-[#7c41c9] ">
                <div className="h-36 w-56 grid grid-cols-3 content-center">
                  <MdLocationOn size={20} className="mx-6 my-3" />
                  <span className="font-['Consolas'] text-base font-bold text-right">{value.location}</span>
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
      <div className="w-[800px] col-span-3 -ml-10 rounded-xl bg-zinc-900
       shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-zinc-800 xl:ml-0 border-[#7c41c9] border border-solid ">
        <div className="static flex text-md leading-6 text-slate-400">
          <div className="font-['Consolas'] mt-2 flex flex-none items-center border-solid border-b border-t border-b-[#7c41c9] border-t-transparent px-10 py-1 font-bold text-[#7c41c9]">Programação do evento</div>
          <div className="flex flex-auto overflow-hidden rounded-tr-xl pt-3">
            <div className="-mr-px py-6 flex-auto rounded-tl border border-solid border-[#7c41c9] bg-slate-800/30"></div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="flex items-center h-20 text-xl">
            <MdKeyboardArrowRight className="text-[#7c41c9] flex-none overflow-visible w-auto h-8 px-6" />
            <a
              onClick={(() => { openCollapse1 ? setOpenCollapse1(false) : setOpenCollapse1(true) })} 
              className="font-['Consolas'] col-span-2 hover:text-[#7c41c9] duration-300 px-2 cursor-pointer" href="/home/#07/11"
            >
              07/11
            </a>
            <MdKeyboardArrowRight className="flex-none overflow-visible text-[#7c41c9] w-auto h-8 px-6" />

            <a
              onClick={(() => { openCollapse2 ? setOpenCollapse2(false) : setOpenCollapse2(true) })}
              className="font-['Consolas'] col-span-2 hover:text-[#7c41c9] duration-300 px-2 cursor-pointer"
              href="/home/#08/11">
              08/11
            </a>
            <MdKeyboardArrowRight className="flex-none overflow-visible text-[#7c41c9] w-auto h-8 px-6" />

            <a
              onClick={(() => { openCollapse3 ? setOpenCollapse3(false) : setOpenCollapse3(true) })} 
              className="font-['Consolas'] col-span-2 hover:text-[#7c41c9] duration-300 px-2 cursor-pointer"
              href="/home/#09/11">
              09/11
            </a>
          </div>
        </div>
      </div>

    </div>
    <div className="grid gap-3 mx-auto my-10 w-[800px] drop-shadow rounded-xl text-center">
      <details className={"bg-violet-200 open:bg-violet-150 rounded-xl w-[800px] text-center"}>
        <summary onClick={() => openCollapse1 ? setOpenCollapse1(false) : setOpenCollapse1(true)} 
        className="grid grid-cols-3 bg-inherit px-5 py-3 cursor-pointer 
        duration-500 font-bold rounded-xl hover:bg-violet-150">
          {openCollapse1 ? <BiSolidUpArrow className="self-center" /> : <BiSolidDownArrow className="self-center" />}
          <p className="font-['Consolas'] text-xl">Quarta-feira</p>
        </summary>
        <div className="grid gap-6 bg-background px-5 py-3 border border-sky-900 text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions07} id="07/11" />
        </div>
      </details>
      <details className="font-['Consolas'] bg-violet-200 open:bg-violet-150 rounded-xl border-violet-150" >
        <summary onClick={() => openCollapse2 ? setOpenCollapse2(false) : setOpenCollapse2(true)} 
        className="grid grid-cols-3 bg-inherit px-5 py-3 rounded-xl text-lg duration-500 cursor-pointer font-bold  hover:bg-violet-150">
          {openCollapse2 ? <BiSolidUpArrow className="self-center" /> : <BiSolidDownArrow className="self-center" />}
          <p className="font-['Consolas'] text-xl">Quinta-feira</p>
        </summary>
        <div className="grid gap-6 bg-background px-5 py-3 border border-violet-150 text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions08} id="08/11" />
        </div>
      </details>
      <details className="bg-violet-200 open:bg-violet-150 rounded-xl border-violet-150" >
        <summary onClick={() => openCollapse3 ? setOpenCollapse3(false) : setOpenCollapse3(true)} className="grid grid-cols-3 bg-inherit px-5 py-3 text-lg rounded-xl duration-500 cursor-pointer font-bold  hover:bg-violet-150">
          {
            openCollapse3 ? <BiSolidUpArrow className="self-center" /> :
              <BiSolidDownArrow className="self-center" />
          }
          <p className="font-['Consolas'] text-xl">Sexta-feira</p>
        </summary>
        <div className="grid gap-6 bg-background px-5 py-3 border border-[#7c41c9] text-sm font-light">
          <Schedule scheduleDescription={scheduleDescriptions09} id="09/11" />
        </div>
      </details>
    </div>
  </div>
}