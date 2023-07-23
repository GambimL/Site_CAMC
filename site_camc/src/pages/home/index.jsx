import '../../styles/styles.css'
import { Layout } from "../../components/Layout";
import { Course } from "../../components/Course";
import { TextField } from "../../components/TextField";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const createMessageFormSchema = z.object({
  name: z.string().nonempty({
    message: 'O nome é obrigatório',
  }).transform(name => {
    return name
      .trim()
      .split(' ')
      .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
      .join(' ')
  }),
  email: z.string().nonempty({
    message: 'O e-mail é obrigatório',
  }).email({
    message: 'Formato de e-mail inválido',
  }).toLowerCase(),
  course: z.string().nonempty({
    message: 'O curso é obrigatório',
  }),
  phone: z.string().nonempty({
    message: 'O telefone é obrigatório',
  }),
  doubt: z.string().nonempty({
    message: 'A dúvida é obrigatória',
  })
})

export function Home() {

  const createMessageForm = useForm({
    resolver: zodResolver(createMessageFormSchema),
  })

  const onSubmit = async data => {
    // emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
    //   from_name: data.name,
    //   message: data.doubt,
    //   email: data.email,
    //   course: data.course,
    //   phone: data.phone
    // }, import.meta.env.VITE_PUBLIC_KEY)
    //   .then((response) => {
    //     console.log('E-mail enviado', response.status, response.text)
    //   }, (err) => { console('Erro: ', err) })
  };
  // const onSubmit = async (data) => {
  //   const resend = await new Resend();

  //   resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'brenda.lima@ufcspa.edu.br',
  //     subject: 'Hello World',
  //     html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  //   })
  // }

  const {
    handleSubmit,
    formState: { isSubmitting },
    // watch,
    // control,
  } = createMessageForm;

  return (
    <>
      <Layout>
        <div className='gap-4'>
          <div className="grid col-start-1 col-end-7 bg-fixed bg-no-repeat bg-background-initial bg-cover"
          >
            <div className="grid gap-10 content-center h-screen">

              <img src='https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png' className="justify-center justify-self-center"></img>
              <div className="place-items-end place-self-center grid grid-cols-2">
                <p className="sm:w-64 md:w-auto">Tecnologias Emergentes nas<span> Grandes Áreas da Física Médica</span></p>
                <p className="w-32">7, 8 e 9<span> de Nov.</span></p>
              </div>

            </div>
          </div>
          <div className='bg-slate-800 col-start-2 col-span-4 space-y-10'>
            <div className="grid pt-5 space-y-4 sm:h-max justify-center items-center gap-5 ">
              <h1 className="dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center">
                IX jornada de física médica
              </h1>
              <div className='grid sm:grid-rows-2 md:grid-cols-2 gap-6'>
                <Course />
              </div>
            </div>
            <Content />
          </div>
        </div>
        <div className="grid py-8 p-2 place-items-center bg-slate-900 h-max">
          <h1 className='dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center'>Dúvidas?</h1>
          <FormProvider {...createMessageForm} >
            <form id="Contato" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4 w-max">
                <div className='col-start-1 col-end-3'>
                  <TextField
                    name="name"
                    label="Nome"
                    type="text"
                    id="name"
                  />
                  <TextField
                    name="email"
                    label="E-mail"
                    type="email"
                    id="email"
                  />
                  <TextField
                    name="course"
                    label="Curso"
                    type="text"
                    id="course"
                  />
                </div>
                <div className="col-end-7 col-span-2">
                  <TextField
                    name="phone"
                    label="Telefone"
                    placeholder={''}
                    type="text"
                    id="phone"
                  />
                  <TextField
                    name="doubt"
                    label=""
                    placeholder="Diga-nos sua dúvida aqui!"
                    type="text"
                    id="doubt"
                    textarea={true}
                  />
                </div>
                <div className='col-start-1 col-end-7 grid content-center'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </Layout>

    </>
  )
}

function Content() {

  return <>
    <div id="Programação" className="grid h-96 place-items-center ">
      <div className="lg:w-2/6 md:w-3/5 sm:w-4/5 col-span-3 -ml-10 rounded-xl bg-slate-900 shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 xl:ml-0 border-gray-600 border border-solid ">
        <div className="static flex text-md leading-6 text-slate-400">
          <div className="mt-2 flex flex-none items-center border-solid border-b border-t border-b-sky-300 border-t-transparent px-10 py-1 font-bold text-sky-300">Programação do evento</div>
          <div className="flex flex-auto overflow-hidden rounded-tr-xl pt-3">
            <div className="-mr-px py-6 flex-auto rounded-tl border border-solid border-slate-500/30 bg-slate-800/50"></div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="flex items-center h-20 text-xl">
            <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <Link className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer" to='/schedule/#07/11'>07/11</Link>
          
            <svg viewBox="-20 -9 1 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3 px-10"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <Link className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer" to='/schedule/#08/11'>08/11</Link>

            <svg viewBox="-20 -9 1 24" aria-hidden="true" className="flex-none overflow-visible text-sky-700 w-auto h-10 mr-3 px-10"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <Link className="col-span-2 hover:text-sky-700 duration-300 px-2 cursor-pointer" to='/schedule/#09/11'>09/11</Link>
          </div>
        </div>
      </div>
      <details class="open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-50 py-30 text-lg cursor-pointer">How is the weather today?</summary>
            <div class=" px-100 py-30 border border-gray-300 text-sm font-light">
                <ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                </ul>
            </div>
        </details>
    </div>
  </>
}