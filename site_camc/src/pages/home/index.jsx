import '../../styles/styles.css'
import { Layout } from "../../components/Layout";
import { Course } from "../../components/Course";
import { TextField } from "../../components/TextField";

export function Home() {
  return (
    <>
      <Layout>
        <div className='grid grid-cols-6 gap-4'>

          <div className="col-start-1 col-end-7  bg-fixed bg-no-repeat h-screen bg-background-initial bg-cover"
          >
            <div className="grid gap-10 content-center h-screen">

              <img src='https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png' className=" justify-center justify-self-center"></img>

              <div className="h-20 flex justify-center gap-24 items-center">
                <p>Tecnologias Emergentes nas<span> Grandes Áreas da Física Médica</span></p>
                <p>7, 8 e 9<span> de Nov.</span></p>
              </div>

            </div>
          </div>
          <div className='bg-slate-800 col-start-2 col-span-4 space-y-10'>
            <div className="grid pt-5 md:p-8 space-y-4 h-screen justify-center items-center gap-5 ">
              {/* gap */}
              <h1 className="dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center">
                IX jornada de física médica
              </h1>
              <div className='grid grid-cols-2 gap-6'>
                <Course />
              </div>
            </div>

            <div className="grid h-96 place-items-center ">
              <div className="static z-10 col-span-3 -ml-10 rounded-xl bg-slate-900 shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 xl:ml-0 w-10/12 border-gray-600 border border-solid ">
                <div className="static flex text-md leading-6 text-slate-400">
                  <div className="mt-2 flex flex-none items-center border-solid border-b border-t border-b-sky-300 border-t-transparent px-10 py-1 font-bold text-sky-300">Programação</div>
                  <div className="flex flex-auto overflow-hidden rounded-tr-xl pt-3">
                    <div className="-mr-px py-6 flex-auto rounded-tl border border-solid border-slate-500/30 bg-slate-800/50"></div>
                  </div>
                </div>
                <div className="grid place-items-center">
                  <div className="flex items-center h-20 text-center">
                    <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p className="col-span-2 hover:text-sky-700 duration-300 px-2">07/11</p>
                    <svg viewBox="-20 -9 1 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3 px-10"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p className="col-span-2 hover:text-sky-700 duration-300 px-2">08/11</p>

                    <svg viewBox="-20 -9 1 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3 px-10"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p className="col-span-2 hover:text-sky-700 duration-300  px-2">09/11</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="grid py-8 place-items-center bg-slate-900 h-max">
          <h1 className='dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center'>Dúvidas?</h1>
          <form className="" onSubmit={() => { }}>
            <div className="grid grid-cols-3 gap-5 w-max">
              <div>
                <TextField
                  name="name"
                  label="Nome"
                  type="text"
                  // error={errors.email?.message}
                  id="name"
                />
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
                  // error={errors.email?.message}
                  id="email"
                />
                <TextField
                  name="course"
                  label="Curso"
                  type="text"
                  // error={errors.email?.message}
                  id="course"
                />
              </div>
              <div className="w-96 col-span-2"><TextField
                name="phone"
                label="Telefone"
                type="text"
                // error={errors.email?.message}
                id="phone"
              />
                <textarea id="message" rows="6" className="block p-2.5 w-full text-md  dark:bg-gray-700 dark:border-gray-600 flex-1 rounded-lg border-2 border-solid dark:placeholder-white dark:focus:border-sky-700 font-bold" placeholder="Diga-nos sua dúvida aqui!"></textarea>
              </div>
              <div className='h-24 grid content-center'>
                <button className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}
