import { Layout } from "../../components/Layout";
import "../../styles/styles.css";
import { Course } from "../../components/Course";
import { TextField } from "../../components/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import { Content } from "../../components/Schedule";
import { Button } from "../../components/Button";

const createMessageFormSchema = z.object({
  name: z.string().nonempty({
    message: "O nome é obrigatório",
  }).transform(name => {
    return name
      .trim()
      .split(" ")
      .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
      .join(" ")
  }),
  email: z.string().nonempty({
    message: "O e-mail é obrigatório",
  }).email({
    message: "Formato de e-mail inválido",
  }).toLowerCase(),
  course: z.string().nonempty({
    message: "O curso é obrigatório",
  }),
  phone: z.string().nonempty({
    message: "O telefone é obrigatório",
  }),
  doubt: z.string().nonempty({
    message: "A dúvida é obrigatória",
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
    //     console.log("E-mail enviado", response.status, response.text)
    //   }, (err) => { console("Erro: ", err) })
  };
  // const onSubmit = async (data) => {
  //   const resend = await new Resend();

  //   resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: "brenda.lima@ufcspa.edu.br",
  //     subject: "Hello World",
  //     html: "<p>Congrats on sending your <strong>first email</strong>!</p>"
  //   })
  // }

  const {
    handleSubmit,
    formState: { isSubmitting },
    // watch,
    // control,
  } = createMessageForm;

  return (
    <Layout>
      <div className="gap-4">
        <div className="grid col-start-1 col-end-7 bg-fixed h-[600px] bg-no-repeat bg-background-initial bg-cover"
        >
          <div className="grid gap-10 content-center ">

            <img src="https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png" className="justify-center justify-self-center"></img>
            <div className="place-items-end place-self-center grid grid-cols-2">
              <p className="sm:w-64 md:w-auto">Tecnologias Emergentes nas<span> Grandes Áreas da Física Médica</span></p>
              <p className="w-32">7, 8 e 9<span> de Nov.</span></p>
            </div>

          </div>
        </div>
        <div className="bg-slate-800 col-start-2 col-span-4 space-y-10">
          <div className="grid pt-5 space-y-4 sm:h-max justify-center items-center gap-5 ">
            <h1 className="dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center">
              IX jornada de física médica
            </h1>
            <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-6">
              <Course />
            </div>
          </div>
          <Content />
        </div>
      </div>
      <div className="grid py-8 p-2 place-items-center bg-slate-900 h-max">
        <h1 className="dark:text-white text-cyan-950 text-4xl font-bold uppercase text-center">Dúvidas?</h1>
        <FormProvider {...createMessageForm} >
          <form id="Contato" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 w-max">
              <div className="col-start-1 col-end-3 gap-3 grid">
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
                  placeholder={""}
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
              <div className="col-start-1 col-end-7 grid place-content-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  // className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded" 
                  text="Enviar"
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </Layout>
  )
}
