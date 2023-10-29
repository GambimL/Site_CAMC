import { Layout } from "../../components/Layout";
import "../../styles/styles.css";
import { Course } from "../../components/Course";
import { TextField } from "../../components/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Content } from "../../components/Schedule";
import { Button } from "../../components/Button";
import background from "./../../assets/backgroundModel.png";
import bioRad from "./../../../public/images/logos/bioRad.jpeg";
import escla from "./../../../public/images/logos/escla.jpeg";
import mpex from "./../../../public/images/logos/mpex.jpeg";
import prophy from "./../../../public/images/logos/prophy.jpeg";
import thorLabs from "./../../../public/images/logos/thorLabs.jpeg";
import { Alert } from "../../components/Modal/Modal";
import { useEffect, useState } from "react";

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
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, [])
  
  const createMessageForm = useForm({
    resolver: zodResolver(createMessageFormSchema),
  })

  const onSubmit = async data => {
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
      from_name: data.name,
      message: data.doubt,
      email: data.email,
      course: data.course,
      phone: data.phone
    }, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        alert("E-mail enviado!");
      }, (err) => { console("Erro: ", err) })
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
    // watch,
    // control,
  } = createMessageForm;

  return (
    <Layout>
     {openModal && <Alert closeModal={setOpenModal} />}
      <div className="gap-4">
        <img src={background} className="justify-center justify-self-center" />
        <div className="col-start-2 col-span-4 space-y-10">
          <div className="grid pt-5 space-y-4 sm:h-max justify-center items-center gap-5 ">
            <h1 className="dark:text-white font-['Consolas'] text-violet-100 text-4xl font-bold uppercase text-center">
              IX jornada de física médica
            </h1>
            <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-6">
              <Course />
            </div>
          </div>
          <Content />
        </div>
      </div>
      <div className="grid py-8 p-2 place-items-center bg-violet-200 h-max">
        <h1 className="font-['Consolas'] dark:text-white text-violet-150 text-4xl font-bold uppercase text-center">Dúvidas?</h1>
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
                  label="email"
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
                  className="drop-shadow-sm hover:shadow-none duration-200 h-12 w-32 flex justify-center 
                  items-center shadow-md shadow-black text-lg font-['Consolas'] bg-violet-150 rounded-md hover:translate-y-1 font-bold border-white" 
                  text="Enviar"
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <footer className="bg-background">
        <h1 className="p-5 dark:text-white font-['Consolas'] text-violet-100 text-4xl font-bold uppercase text-center">
          Patrocinadores
        </h1>
        <div className="grid place-items-center h-96 grid-cols-5">
          <img src={bioRad} alt="bioRad" className="grayscale hover:grayscale-0 w-32" />
          <img src={escla} alt="escla" className="grayscale hover:grayscale-0 w-32" />
          <img src={mpex} alt="mpex" className="grayscale hover:grayscale-0 w-32" />
          <img src={prophy} alt="prophy" className="grayscale hover:grayscale-0 w-32" />
          <img src={thorLabs} alt="bioRad" className="grayscale hover:grayscale-0 w-32" />
        </div>
      </footer>
    </Layout>
  )
}
